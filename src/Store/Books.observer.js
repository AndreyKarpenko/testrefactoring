import {makeAutoObservable, runInAction} from "mobx";
import booksRepository from "../Repository/Books.repository";

class BooksStore {
  allBooks = [];
  privateBooks = [];
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async getAllBooks() {
    this.isLoading = true;
    const books = await booksRepository.getAllBooks();
    runInAction(() => {
      this.allBooks = books;
      this.isLoading = false;
    });
  }

  async getPrivateBooks() {
    this.isLoading = true;
    const books = await booksRepository.getPrivateBooks();
    runInAction(() => {
      this.privateBooks = books;
      this.isLoading = false;
    });
  }

  async add(params) {
    this.isLoading = true;
    await booksRepository.addBook(params);
    await this.getAllBooks();
    await this.getPrivateBooks();
    this.isLoading = false;
  }
}

const booksObserver = new BooksStore();
export default booksObserver;
