import "reflect-metadata";
import { Service, Inject, Container, Token } from "typedi";

interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

const NEWS_SOURCE = new Token<NewsSource>();

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
    @Inject(NEWS_SOURCE) private source: NewsSource
  ) { }

  async getLatestArticles() {
    const articles = await this.source.fetchArticles();
    return articles;
  }
}

class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article"];
  }
}

async function test() {
  Container.set(NEWS_SOURCE, new RSSFeedSource());
  const aggregator1 = Container.get(NewsAggregator);
  console.log(await aggregator1.getLatestArticles());

  Container.set(NEWS_SOURCE, new APISource());
  const aggregator2 = Container.get(NewsAggregator);
  console.log(await aggregator2.getLatestArticles());

  Container.set(NEWS_SOURCE, new MockNewsSource());
  const aggregatorTest = Container.get(NewsAggregator);
  console.log(await aggregatorTest.getLatestArticles());
}

test();
