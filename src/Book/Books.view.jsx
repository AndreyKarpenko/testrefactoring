import booksObserver from './Books.observer'
import {observer} from "mobx-react";
import React from "react";
import {useBook} from "./Books.controller";

export const BooksView = observer((props) => {
    const {addBookHandler} = useBook(props)

    return (
        <div>
            {booksObserver.books.map((book) => (
                <div key={book.id}>
                    {book.author}: {book.name}
                </div>
            ))}
            <button onClick={addBookHandler}>
                Add
            </button>
        </div>
    );
})