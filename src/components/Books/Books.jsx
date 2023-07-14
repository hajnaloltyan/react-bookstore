import { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 3',
      completed: '10%',
    },
    {
      id: 1,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 3',
      completed: '10%',
    },
    {
      id: 2,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 3',
      completed: '10%',
    },
  ]);

  const deleteBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  return (
    <ul className="bookList">
      {books.map((book) => (
        <BookItem
          key={book.id}
          bookProp={book}
          deleteBook={deleteBook}
        />
      ))}
    </ul>
  );
};

export default Books;
