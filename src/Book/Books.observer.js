import { makeAutoObservable } from "mobx";
import booksRepository from "./Books.repository";

class BooksStore {
  books = [];
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    this.isLoading = true;
    this.books = await booksRepository.getBooks();
    this.isLoading = true;
  }

  async add() {
    this.isLoading = true;
    this.books = await booksRepository.getBooks();
    this.isLoading = false;
  }
}

const booksObserver = new BooksStore();
export default booksObserver;
