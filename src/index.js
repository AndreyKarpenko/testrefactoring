import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
// import { observer } from "mobx-react";

import "./styles.css";
import booksRepository from "./Books/Books.repository";
import {Book} from "./Book/Book";

function App() {
    return (<Book/>)
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(<App />, rootElement);
