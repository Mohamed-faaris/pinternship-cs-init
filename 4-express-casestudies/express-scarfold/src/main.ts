import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./services/AppointmentService";
import { EmailService } from "./services/EmailService";
import { NotificationService } from "./services/NotificationService";
import { BILLING_TOKEN, NOTIFIER_TOKEN } from "./services/AppointmentService";
import { StripeBillingService } from "./services/StripeBillingService";
import { SMSService } from "./services/SMSService";

// Main application entry point
async function main() {
  console.log("=== Sunrise Clinic Appointment System ===\n");

  // Example 1: Using default SMS service
  console.log("1. Booking with default SMS notification:");
  Container.set(NOTIFIER_TOKEN, new SMSService());
  Container.set(BILLING_TOKEN, new StripeBillingService());
  
  const appointmentService1 = Container.get(AppointmentService);
  await appointmentService1.bookAppointment("alice@example.com", "Monday 10am", 50);

  console.log("\n---\n");

  // Example 2: Swap to EmailService for notifications
  console.log("2. Booking with Email notification (swapped service):");
  Container.set(NOTIFIER_TOKEN, new EmailService());
  Container.set(BILLING_TOKEN, new StripeBillingService());
  
  const appointmentService2 = Container.get(AppointmentService);
  await appointmentService2.bookAppointment("bob@example.com", "Tuesday 2pm", 75);

  console.log("\n=== Booking completed ===");
}

main().catch(console.error);
