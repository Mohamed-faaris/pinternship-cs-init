// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/03-transactions/

/*
Problem Statement:

FinTrust Wallet needs atomic transfers ensuring balances and logs remain consistent.

• Transfers must update sender and receiver balances together.
• Transaction logs must be written atomically with balance updates.

The challenge: Use MongoDB multi-document transactions to ensure ACID guarantees for transfers, refunds, and related operations.


Challenge (Interactive - "Your Turn"):

1. Implement a refund transaction that reverses a payment and logs the refund; ensure rollback on any failure.
*/