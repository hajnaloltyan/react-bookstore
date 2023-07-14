import { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState({
    id: 0,
    title: 'title',
    author: 'author',
    category: 'Action',
    currentChapter: 'Chapter 3',
    completed: '10%',
  });

  return (
    <ul className="bookList">
      {books.map((book) => (
        <BookItem
          key={book.id}
          bookProp={book}
        />
      ))}
    </ul>
  );
};

export default Books;
