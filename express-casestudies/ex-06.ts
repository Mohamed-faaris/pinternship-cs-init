// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/06-middleware/

/*
Problem Statement:

CityCare General Hospital’s discharge process lacks checkpoints and logs.

• Missing sign-offs and reviews cause delays and unsafe discharges.
• No centralized error handling or logging for workflows.

The challenge: Use middleware to add logging, doctor sign-off checks, pharmacy review, and follow-up scheduling to ensure a reliable discharge flow.


Challenge (Interactive - "Your Turn"):

1. Add a middleware that checks `req.body.insuranceApproved` and returns `403` if not approved.
*/