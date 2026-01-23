// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/19-ioc-containers-advanced-dependency-management/

/*
Problem Statement:

Your news aggregator platform is growing: you fetch from dozens of sources, need to inject many dependencies (logger, cache, analytics), and manual wiring is error-prone.

The problem: How can you automate creation and injection of dependencies so your system is scalable, maintainable, and easy to test?

The challenge: Use an IoC container (e.g., TypeDI) to register and resolve dependencies automatically, swap implementations at runtime, and write tests that inject mocks.


Challenge (Interactive - "Your Turn"):

1. Register a new `APISource` with the container.
2. Swap the implementation from `RSSFeedSource` to `APISource` without changing the `NewsAggregator` code.
3. Write a test that injects a mock source to verify the aggregator’s behavior.


Programmer’s Workflow Checklist (Optional):

• Define interfaces for dependencies.
• Register implementations with the container.
• Use decorators and metadata for automatic injection.
• Swap implementations for testing or scaling.
*/