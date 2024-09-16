import { Request, Response } from 'express';
import { CreateBookUseCase } from '../application/use-cases/create-book-use-case';
import { ListAllBooksUseCase } from '../application/use-cases/list-all-books-use-case';
export interface CreateBookDTO {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  status: 'read' | 'unread' | 'donated';
}

interface BookDTO {
  id: string;
  createdAt: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  category: string;
  cover?: string;
  status: 'read' | 'unread' | 'donated';
}

export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private listAllBooksUseCase: ListAllBooksUseCase
  ) {}
  create(req: Request, res: Response): Response {
    const bookDTO: CreateBookDTO = req.body;
    const book = this.createBookUseCase.execute(bookDTO);
    return res.status(201).json(book);
  }

  listAll(req: Request, res: Response): Response {
    const books = this.listAllBooksUseCase.execute();
    return res.status(200).json(books);
  }

}