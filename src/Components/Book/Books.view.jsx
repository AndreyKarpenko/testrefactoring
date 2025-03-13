import React from "react";
import {observer} from "mobx-react";

import "./Books.styles.css"

export const BooksView = observer((props) => {

    return (
        <ul className={'bookItemsContainer'}>
            {props.list.map((book) => (
                <li className={'bookItem'} key={book.id}>
                    {book.author}: {book.name}
                </li>
            ))}
        </ul>
    );
})