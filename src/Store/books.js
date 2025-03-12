import {makeAutoObservable} from "mobx";

class BooksStore {
    count = 10
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
    }

    decrement() {
        this.count = this.count - 1
    }
}

const books = new BooksStore();
export default books;