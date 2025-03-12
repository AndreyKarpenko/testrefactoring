import { useEffect } from "react";

import booksObserver from "./Books.observer";

export const useBook = (props) => {
  useEffect(() => {
    booksObserver.load();
  }, []);

  const addBookHandler = () => {
    booksObserver.add();
  }

  return {
    ...props,
    addBookHandler
  }
};
