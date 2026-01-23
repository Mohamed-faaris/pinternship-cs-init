// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/09-repository-pattern/

/*
Problem Statement:

Riverdale University needs a registration system independent of storage backend.

• Different departments use different storage systems; upgrades are painful.
• Testing is hard when business logic is tightly coupled to storage.

The challenge: Implement repository interfaces and in-memory/database repositories so services can remain storage-agnostic and testable.


Challenge (Interactive - "Your Turn"):

1. Implement `delete(courseId: string)` in the repository and add a service/route to delete a course.
*/