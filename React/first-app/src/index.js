import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Book from "./Book";
import { books } from "./books";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
