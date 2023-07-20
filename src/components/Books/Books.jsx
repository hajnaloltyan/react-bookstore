import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks, AllBooks } from '../../redux/books/booksSlice';
import BookItem from '../BookItem/BookItem';
import './Books.css';
import AddBook from '../AddBook/AddBook';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(AllBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  return (
    <>
      <ul className="bookList">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
      <section>
        <AddBook />
      </section>
    </>
  );
};

export default Books;
