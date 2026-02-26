import type { Book } from '../../models/Book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  save(book: Book): Promise<void>;
  create(book: Book): Promise<void>;
  returnBook(id: string): Promise<void>;
}
