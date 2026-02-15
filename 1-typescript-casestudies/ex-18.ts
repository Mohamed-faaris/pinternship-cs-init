interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class MockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount}.simulating failure.`);
    return false;
  }
}

class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Bank Transfer at ${new Date()}.`);
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log(`Payment successful at ${new Date()}.`);
    return true;
  }
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway, private paymentProcessorName: string = Math.ceil(Math.random() * 1000).toString()) {
    console.log(`PaymentProcessor ${paymentProcessorName} created.`);
  }
  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);
    if (success) {
      console.log(`${this.paymentProcessorName}: Payment successful!`);
    } else {
      console.log(`${this.paymentProcessorName}: Payment failed.`);
    }
  }
}

const bankGateway = new BankTransferGateway();
const processor1 = new PaymentProcessor(bankGateway);
processor1.pay(100);

const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
testProcessor.pay(50);


//out
// ❯ bun tsr ex - 18.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-18.ts"
// PaymentProcessor 515 created.
// Processing payment of $100 via Bank Transfer at Mon Feb 16 2026 04: 11:03 GMT +0530(India Standard Time).
//   PaymentProcessor 859 created.
// Mock processing payment of $50.simulating failure.
// 859: Payment failed.
// Payment successful at Mon Feb 16 2026 04: 11:03 GMT +0530(India Standard Time).
// 515: Payment successful!