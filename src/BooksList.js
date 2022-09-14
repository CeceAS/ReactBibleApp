import React from "react";
// import BookItem from "./BookItem";
import classes from "./BookItem.module.css";

const BooksList = (props) => {
  console.log("PROPS:", props);

  const getChaptersHandler = function (bookChapters) {
    console.log("chapters:", bookChapters);
  };

  return (
    <section>
      {props.books.map((book) => (
        <section
          key={book.id}
          className={classes.bookButton}
          onClick={() => getChaptersHandler(book.chapters)}
        >
          <h2>{book.bookName}</h2>
          {book.chapters.map((chapter) => {
            return <h1 key={chapter.id}>{chapter.number}</h1>;
          })}
        </section>
      ))}
    </section>
  );
};

export default BooksList;
