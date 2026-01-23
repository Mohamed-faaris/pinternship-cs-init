// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/10-dependency-injection/

/*
Problem Statement:

Sunrise Clinic's scheduling, notifications, and billing are tightly coupled and hard to test.

• Adding new notification or billing providers requires code changes across the system.
• Tests trigger real notifications or charges.

The challenge: Use Dependency Injection (TypeDI) and interfaces to inject services (notification, billing) into business logic, enabling swapping and mocking for testing.


Challenge (Interactive - "Your Turn"):

1. Add a `BillingService` interface and `StripeBillingService` implementation, inject it into `AppointmentService`, and write a test with a mock billing service to verify charge behavior.
*/