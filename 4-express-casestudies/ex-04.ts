// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/04-request-response/

/*
Problem Statement:

FreshMart’s loyalty API accepted invalid data causing wrong deductions.

• Missing fields and invalid types caused runtime errors and customer issues.
• Responses were inconsistent and unclear.

The challenge: Use TypeScript types and runtime validation (Zod) to validate requests, type responses, and provide consistent error handling.


Challenge (Interactive - "Your Turn"):

1. Add a `POST /transfer` endpoint that validates UUIDs for `fromCustomerId` and `toCustomerId`, ensures `points` is a positive integer, and returns appropriate errors if preconditions fail.
*/