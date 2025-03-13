import {observer} from "mobx-react";
import booksObserver from "../../Store/Books.observer"
import './Header.styles.css'

export const Header = observer(() => {
    return (
        <header className={'headerContainer'}>
            <div className={'headerText'}>{`Your books: ${booksObserver.privateBooks.length}`}</div>
        </header>
    )
})