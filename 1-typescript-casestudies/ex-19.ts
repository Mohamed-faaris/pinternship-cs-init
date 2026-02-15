// Source: https://sudarshansudarshan.github.io/vinternship/case-studies/19-ioc-containers-advanced-dependency-management/

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

/*
# IoC Containers & Advanced Dependency Management

## 1. Problem Statement

## Case Study: Scaling the News Aggregator

Your news aggregator platform is growing:

• 
You now fetch from dozens of sources, each with its own configuration.
• 
You want to inject not just one, but many dependencies (e.g., logger, cache,
analytics).
• 
Manually wiring up dependencies everywhere is becoming error-prone and hard to
maintain. ![Image](https://i.postimg.cc/kMBkmJhR/news-agg.png)

The problem:How can you automate the creation and injection of dependencies, so your system
is scalable, maintainable, and easy to test?

## 2. Learning Objectives

By the end of this tutorial, you will:

• 
Understand what an IoC (Inversion of Control) container is.
• 
Use a TypeScript IoC container (TypeDI) to manage dependencies.
• 
Register and resolve dependencies automatically.
• 
See how IoC containers simplify large-scale application development.

# IoC Containers & Advanced Dependency Management

## 3. Concept Introduction with Analogy

## Analogy: Hotel Concierge Service

Imagine a hotel guest (your class) needs various services: room cleaning, food
delivery, taxi booking.

• 
Instead of contacting each service directly, the guest calls the concierge (IoC container), who arranges everything behind the scenes.
• 
The guest doesn’t care who provides the service, just that it’s delivered on
request.

An IoC container is your concierge:It manages all services (dependencies) and delivers them to your classes as
needed.

## What Is Inversion of Control (IoC)?

Inversion of Control is a principle where the flow of a program’s control is inverted:

• 
Instead of your classes creating and managing their dependencies,
• 
An external system (the IoC container) creates and supplies those dependencies.

Why use IoC?

• This decouples your classes from specific implementations, making your code more
flexible, testable, and maintainable.

# IoC Containers & Advanced Dependency Management

## What is an IoC Container?

• 
An IoC Container is a framework that manages the creation, configuration, and injection of
dependencies automatically.
• 
Instead of manually creating dependencies, you register them with the container and request them when needed.

# IoC Containers & Advanced Dependency Management

## 5. Step-by-Step Data Modeling & Code Walkthrough

Step 1: Install TypeDI**

```
npm install typedi reflect-metadata

```

• In your `tsconfig.json`, enable decorators:

```
    "experimentalDecorators":  true, 
    "emitDecoratorMetadata":  true

```

• At the very top of your entry file (e.g., `index.ts`):

```
import "reflect-metadata";

```

Step 2: Define Interfaces and Implementations

```
// src/NewsSource.ts
export interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

```
 
```
// src/RSSFeedSource.ts
import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["RSS: Article 1", "RSS: Article 2"];
  }
}

// src/APISource.ts
# IoC Containers & Advanced Dependency Management

## 5. Step-by-Step Data Modeling & Code Walkthrough

import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}

```

• `@Service()` registers the class with TypeDI’s container.

Step 3: Inject Dependencies Automatically

```
// src/NewsAggregator.ts
import { Service, Inject } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource) private source: NewsSource
  ) {}

  async getLatestArticles() {
    const articles = await this.source.fetchArticles();
    articles.forEach(article => console.log(article));
  }
}

```

• `@Inject(() => RSSFeedSource)` tells TypeDI which implementation to inject.

# IoC Containers & Advanced Dependency Management

## 5. Step-by-Step Data Modeling & Code Walkthrough

Step 4: Resolve and Use

```
// src/index.ts
import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";

const aggregator = Container.get(NewsAggregator);
aggregator.getLatestArticles(); // Uses RSSFeedSource by default

```

• `Container.get()` creates the class and injects all dependencies.

Step 5: Swapping Implementations

```
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { APISource } from "./APISource";
import { NewsSource } from "./NewsSource";

// Override the NewsSource dependency
Container.set(NewsSource, new APISource());

const aggregator2 = Container.get(NewsAggregator);
aggregator2.getLatestArticles(); // Now uses APISource

```

• No changes to `NewsAggregator` code needed!

# IoC Containers & Advanced Dependency Management

## 5. Step-by-Step Data Modeling & Code Walkthrough

Step 6: Swapping Implementations

Suppose you want to use `APISource` instead of `RSSFeedSource`:

```
container.rebind<NewsSource>(TYPES.NewsSource).to(APISource);

const aggregator2 = container.resolve(NewsAggregator);
aggregator2.getLatestArticles(); // Now uses APISource

```

• No changes to `NewsAggregator` code needed!

Step 7: How Does TypeDI Know What to Inject?

• 
Decorators:

  ◦ 
`@Service()` marks a class as injectable.
  ◦ 
`@Inject()` specifies which dependency to inject.
• 
Metadata:

  ◦ TypeDI uses TypeScript’s `reflect-metadata` to read type information and decorator hints.

# IoC Containers & Advanced Dependency Management

## 6. Challenge

1. 
Register a new `APISource` with the container.
2. 
Swap the implementation from `RSSFeedSource` to `APISource` without changing the `NewsAggregator` code.
3. 
Write a test that injects a mock source to verify the aggregator’s behavior.

## 7. Quick Recap & Key Takeaways

• 
IoC Containers automate dependency management.
• 
Register, configure, and swap dependencies centrally.
• 
Classes remain clean, focused, and testable.

## 8. (Optional) Programmer’s Workflow Checklist

• 
Define interfaces for dependencies.
• 
Register implementations with the container.
• 
Use decorators (`@injectable`, `@inject`) for automatic injection.
• 
Swap implementations for testing or scaling.

# IoC Containers & Advanced Dependency Management

## Additional Links
- [Introduction](https://sudarshansudarshan.github.io/vinternship/intro/)
- [Case Studies](https://sudarshansudarshan.github.io/vinternship/case-studies/)
- [Projects](https://sudarshansudarshan.github.io/vinternship/projects/)
- [←](https://sudarshansudarshan.github.io/vinternship/case-studies/18-dependency-injection/)
- [←](https://sudarshansudarshan.github.io/vinternship/case-studies/18-dependency-injection/)
# IoC Containers & Advanced Dependency Management

Learn about IoC Containers & Advanced Dependency Management in TypeScript

## 1. Problem Statement

## Case Study: Scaling the News Aggregator
...
## 2. Learning Objectives
...
## 3. Concept Introduction with Analogy

## Analogy: Hotel Concierge Service
...
## What Is Inversion of Control (IoC)?
...
## What is an IoC Container?
...
## 5. Step-by-Step Data Modeling & Code Walkthrough
...
## 6. Challenge
...
## 7. Quick Recap & Key Takeaways
...
## 8. (Optional) Programmer’s Workflow Checklist
...
## Additional Links
...
[vinternship](https://sudarshansudarshan.github.io/vinternship/)
# IoC Containers & Advanced Dependency Management
*/

import "reflect-metadata";
import { Service, Inject, Container } from "typedi";

interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

@Service()
class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["RSS: Article 1", "RSS: Article 2"];
  }
}

@Service()
class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}

@Service()
class NewsAggregator {
  constructor(
    @Inject(() => RSSFeedSource) private source: NewsSource
  ) { }

  async getLatestArticles() {
    const articles = await this.source.fetchArticles();
    articles.forEach(article => console.log(article));
  }
}

class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article"];
  }
}

// Test
async function test() {
  // Default with RSS
  const aggregator1 = Container.get(NewsAggregator);
  await aggregator1.getLatestArticles();

  // Swap to API
  Container.set(RSSFeedSource, new APISource());
  const aggregator2 = Container.get(NewsAggregator);
  await aggregator2.getLatestArticles();

  // Test with mock
  const mockAggregator = new NewsAggregator(new MockNewsSource());
  await mockAggregator.getLatestArticles();
}

test();