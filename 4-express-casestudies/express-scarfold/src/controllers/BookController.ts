import type { Request, Response } from 'express';
import { BookService } from '../services/BookService';
import type { Book } from '../models/Book';

export class BookController {
  constructor(private bookService: BookService) {}

  async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      const bookId = req.params.id as string;
      const book = await this.bookService.borrowBook(bookId);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async createBook(req: Request, res: Response): Promise<void> {
    try {
      const book: Book = req.body;
      const created = await this.bookService.createBook(book);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
