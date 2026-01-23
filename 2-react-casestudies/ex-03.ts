// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/03-routing/

/*
Problem Statement:

Medix is building a patient portal with typed route parameters.

• Each patient, doctor, and appointment has a unique ID in the URL.
• The dashboard must display correct details and prevent type errors.

The challenge: How do you define and enforce type-safe dynamic route parameters in React Router so navigation and data fetching are robust and error-free?


Challenge (Interactive - "Your Turn"):

1. Define a route `/doctors/:doctorId/patients/:patientId` and implement `DoctorPatientDetails` component using `useParams` with typed interface.
2. Validate params (present and numeric), and show an error on invalid params.
*/