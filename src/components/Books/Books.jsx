import { useSelector } from 'react-redux';
import BookItem from '../BookItem/BookItem';
import './Books.css';
import AddBook from '../AddBook/AddBook';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <ul className="bookList">
        {books.map((book) => (
          <BookItem
            key={book.itemID}
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
