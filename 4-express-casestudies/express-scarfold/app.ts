import express from 'express';
import ApplicationRouter from './routes/application';
import { BookController } from './src/controllers/BookController';
import { BookService } from './src/services/BookService';
import { InMemoryBookRepository } from './src/repositories/InMemoryBookRepository';

const app = express();
app.use(express.json());

app.use('/application', ApplicationRouter);

const bookRepository = new InMemoryBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
app.post('/books/:id/borrow', (req, res) => bookController.borrowBook(req, res));
app.post('/books', (req, res) => bookController.createBook(req, res));

export default app;
