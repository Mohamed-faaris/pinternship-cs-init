import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService, NOTIFIER_TOKEN, BILLING_TOKEN } from "../services/AppointmentService";
import { BillingService } from "../services/BillingService";
import { NotificationService } from "../services/NotificationService";

// Mock Billing Service for testing
class MockBilling extends BillingService {
  charges: Array<{ patient: string; amount: number }> = [];

  async charge(patient: string, amount: number): Promise<void> {
    this.charges.push({ patient, amount });
  }
}

// Mock Notification Service for testing
class MockNotifier extends NotificationService {
  messages: Array<{ to: string; message: string }> = [];

  async send(to: string, message: string): Promise<void> {
    this.messages.push({ to, message });
  }
}

// Test function
async function runTests() {
  console.log("=== Running AppointmentService Tests ===\n");

  let passed = 0;
  let failed = 0;

  // Test 1: Basic booking with mock billing
  try {
    console.log("Test 1: Should charge patient and send notification on booking");
    Container.reset();
    
    const mockBilling = new MockBilling();
    const mockNotifier = new MockNotifier();

    // Register mocks with tokens
    Container.set(BILLING_TOKEN, mockBilling);
    Container.set(NOTIFIER_TOKEN, mockNotifier);

    const appointmentService = Container.get(AppointmentService);

    const result = await appointmentService.bookAppointment(
      "bob@example.com",
      "Tuesday 2pm",
      75
    );

    // Verify result
    if (result.status !== "confirmed") {
      throw new Error(`Expected status 'confirmed', got '${result.status}'`);
    }

    // Verify billing was called
    if (mockBilling.charges.length !== 1) {
      throw new Error(`Expected 1 charge, got ${mockBilling.charges.length}`);
    }
    if (mockBilling.charges[0].patient !== "bob@example.com") {
      throw new Error(`Expected patient 'bob@example.com', got '${mockBilling.charges[0].patient}'`);
    }
    if (mockBilling.charges[0].amount !== 75) {
      throw new Error(`Expected amount 75, got ${mockBilling.charges[0].amount}`);
    }

    // Verify notification was sent
    if (mockNotifier.messages.length !== 1) {
      throw new Error(`Expected 1 message, got ${mockNotifier.messages.length}`);
    }
    if (mockNotifier.messages[0].to !== "bob@example.com") {
      throw new Error(`Expected recipient 'bob@example.com', got '${mockNotifier.messages[0].to}'`);
    }
    if (!mockNotifier.messages[0].message.includes("Tuesday 2pm")) {
      throw new Error(`Expected message to contain 'Tuesday 2pm', got '${mockNotifier.messages[0].message}'`);
    }

    console.log("✓ Test 1 passed\n");
    passed++;
  } catch (error) {
    console.error("✗ Test 1 failed:", error);
    failed++;
  }

  // Test 2: Multiple appointments
  try {
    console.log("Test 2: Should handle multiple appointments independently");
    Container.reset();
    
    const mockBilling = new MockBilling();
    const mockNotifier = new MockNotifier();

    // Register mocks with tokens
    Container.set(BILLING_TOKEN, mockBilling);
    Container.set(NOTIFIER_TOKEN, mockNotifier);

    const appointmentService = Container.get(AppointmentService);

    await appointmentService.bookAppointment("alice@example.com", "Monday 10am", 50);
    await appointmentService.bookAppointment("charlie@example.com", "Wednesday 3pm", 100);

    // Verify multiple charges
    if (mockBilling.charges.length !== 2) {
      throw new Error(`Expected 2 charges, got ${mockBilling.charges.length}`);
    }
    if (mockBilling.charges[0].amount !== 50) {
      throw new Error(`Expected first amount 50, got ${mockBilling.charges[0].amount}`);
    }
    if (mockBilling.charges[1].amount !== 100) {
      throw new Error(`Expected second amount 100, got ${mockBilling.charges[1].amount}`);
    }

    // Verify multiple notifications
    if (mockNotifier.messages.length !== 2) {
      throw new Error(`Expected 2 messages, got ${mockNotifier.messages.length}`);
    }
    if (mockNotifier.messages[0].to !== "alice@example.com") {
      throw new Error(`Expected first recipient 'alice@example.com', got '${mockNotifier.messages[0].to}'`);
    }
    if (mockNotifier.messages[1].to !== "charlie@example.com") {
      throw new Error(`Expected second recipient 'charlie@example.com', got '${mockNotifier.messages[1].to}'`);
    }

    console.log("✓ Test 2 passed\n");
    passed++;
  } catch (error) {
    console.error("✗ Test 2 failed:", error);
    failed++;
  }

  // Test 3: Verify mock doesn't make real charges
  try {
    console.log("Test 3: Mock billing should not persist charges between tests");
    Container.reset();
    
    const mockBilling = new MockBilling();
    const mockNotifier = new MockNotifier();

    // Register mocks with tokens
    Container.set(BILLING_TOKEN, mockBilling);
    Container.set(NOTIFIER_TOKEN, mockNotifier);

    const appointmentService = Container.get(AppointmentService);

    await appointmentService.bookAppointment("test@example.com", "Friday 5pm", 25);

    // Verify only one charge was recorded
    if (mockBilling.charges.length !== 1) {
      throw new Error(`Expected 1 charge, got ${mockBilling.charges.length}`);
    }

    console.log("✓ Test 3 passed\n");
    passed++;
  } catch (error) {
    console.error("✗ Test 3 failed:", error);
    failed++;
  }

  // Summary
  console.log("=== Test Summary ===");
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
