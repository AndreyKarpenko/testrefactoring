import {createRoot} from "react-dom/client";

import {BooksView} from "./Book/Books.view";

import "./styles.css";

function App() {
  return <BooksView />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />, rootElement);
