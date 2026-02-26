import type { IBookRepository } from '../repositories/interfaces/IBookRepository';
import type { Book } from '../models/Book';

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  async borrowBook(bookId: string): Promise<Book> {
    const book = await this.bookRepository.findById(bookId);
    if (!book) throw new Error('Book not found');
    if (book.isBorrowed) throw new Error('Book already borrowed');

    const updatedBook = { ...book, isBorrowed: true };
    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }

  async createBook(book: Book): Promise<Book> {
    await this.bookRepository.create(book);
    return book;
  }
}
