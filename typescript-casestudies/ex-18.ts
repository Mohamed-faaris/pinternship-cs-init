// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/18-dependency-injection/

/*
Problem Statement:

You’re building a payment processing platform that must support different payment gateways, allow easy swapping/upgrading of gateways, enable testing with fake gateways, and keep payment logic focused and maintainable.

The challenge: How do you provide the payment module with the right gateway, swap gateways easily, and test without real payments while keeping your payment logic decoupled and flexible (using constructor injection and interfaces)?


Challenge (Interactive - "Your Turn"):

• Implement a new gateway class `BankTransferGateway` that logs payment processing.
• Use it with `PaymentProcessor` to process a payment.
• Write a mock gateway that simulates failure (`return false`) and test error handling.


Programmer’s Workflow Checklist (Optional):

• Identify dependencies and define interfaces for them.
• Inject dependencies via constructors for testability.
• Use mocks/stubs for testing error and edge cases.
*/