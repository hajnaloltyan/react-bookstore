import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendNewBook } from '../../redux/books/booksSlice';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
  });

  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.title.trim() && bookInfo.author.trim()) {
      dispatch(sendNewBook(bookInfo)).then(() => {
        setBookInfo({
          title: '',
          author: '',
        });
        setWarning('');
      });
    } else {
      setWarning('Empty input field(s)!');
    }
  };

  return (
    <section className="newBook">
      <h2 className="newBook-title">Add New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookInfo.title}
          onChange={handleChange}
          className="bookInput"
        />

        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={bookInfo.author}
          onChange={handleChange}
          className="bookInput"
        />
        <button type="submit" className="submit">
          Add Book
        </button>
      </form>
      <span className="warning">{warning}</span>
    </section>
  );
};

export default AddBook;
