import { useState } from 'react';
import BookItem from '../BookItem/BookItem';
import './Books.css';
import AddBook from '../AddBook/AddBook';

const Books = () => {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 21',
      completed: '80%',
    },
    {
      id: 1,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 2',
      completed: '10%',
    },
    {
      id: 2,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 15',
      completed: '60%',
    },
  ]);

  const deleteBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  const addNewBook = ({ title, author }) => {
    const newBook = {
      id: books.length,
      title,
      author,
      category: 'Action',
      currentChapter: 'Chapter 1',
      completed: '0%',
    };
    setBooks([...books, newBook]);
  };

  return (
    <>
      <ul className="bookList">
        {books.map((book) => (
          <BookItem
            key={book.id}
            bookProp={book}
            deleteBook={deleteBook}
          />
        ))}
      </ul>
      <section>
        <AddBook addNewBook={addNewBook} />
      </section>
    </>
  );
};

export default Books;
