import {observer} from "mobx-react";
import {useHome} from "./Home.controller";
import {Tabs} from "../../Components/Tabs/Tabs.view";
import {BooksView} from "../../Components/Book/Books.view";
import {Form} from "../../Components/Form/Form.view";

const tabs = ["All books", "Private books"]

export const Home = observer((props) => {

    const {allBooks, privateBooks, onTabChange} = useHome(props);

    return (
        <>
            <Tabs onTabChange={onTabChange} tabs={tabs}>
                <BooksView list={allBooks} />
                <BooksView list={privateBooks} />
            </Tabs>
            <Form/>
        </>
    )
})