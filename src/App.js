import "./App.css";
import React, { useState } from "react";
import BooksList from "./BooksList.js";
import FetchBibleData from "./FetchBibleData";
import useApi from "./Hooks/useApi";

function App() {
  const [books, setBooks] = useState([]);

  const { loading, data, error } = useApi(
    "https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01/books?include-chapters=true&include-chapters-and-sections=false"
  );

  console.log(loading, data, error);

  if (data?.data) {
    const transformedBooks = data.data.map((bookData) => {
      return {
        id: bookData.id,
        bookName: bookData.name,
        chapters: bookData.chapters,
      };
    });

    console.log(transformedBooks);
    setBooks(transformedBooks);
  }

  return (
    <React.Fragment>
      <section></section>
      <section>
        {loading && <p>Loading....</p>}
        <BooksList books={books} />
      </section>
    </React.Fragment>
  );
}

export default App;
