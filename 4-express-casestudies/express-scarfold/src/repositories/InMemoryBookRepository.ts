import type { IBookRepository } from './interfaces/IBookRepository';
import type { Book } from '../models/Book';

export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find(book => book.id === id) || null;
  }

  async save(book: Book): Promise<void> {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index >= 0) {
      this.books[index] = book;
    } else {
      this.books.push(book);
    }
  }

  async create(book: Book): Promise<void> {
    this.books.push(book);
  }

  async returnBook(id: string): Promise<void> {
    const index = this.books.findIndex(b => b.id === id);
    if (index >= 0) {
      this.books[index]!.isBorrowed = false;
    }
  }
}
