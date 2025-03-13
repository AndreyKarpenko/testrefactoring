import {useEffect} from "react";

import booksObserver from "../../Store/Books.observer";

export const useHome = (props) => {

    useEffect(() => {
        (async () => {
            await booksObserver.getAllBooks();
            await booksObserver.getPrivateBooks()
        })()

    }, []);

    const onTabChange = (index) => {
        index ? booksObserver.getAllBooks() : booksObserver.getPrivateBooks()
    }

    return {
        ...props,
        onTabChange,
        allBooks: booksObserver.allBooks,
        privateBooks: booksObserver.privateBooks,
    }
}