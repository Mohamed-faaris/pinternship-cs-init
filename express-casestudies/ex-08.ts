// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/08-mvc-pattern/

/*
Problem Statement:

Maplewood Library’s code mixes business logic and data access, causing fragility.

• Rules are buried in request handlers, making updates risky.
• Testing and refactoring are hard when layers are mixed.

The challenge: Apply MVC with repositories and services to separate controllers (requests), services (business logic), and repositories (data access).


Challenge (Interactive - "Your Turn"):

1. Add a `returnBook` method to `BookService` and `BookController` that updates book status via repository.
*/