import { useState } from 'react';
import './AddBook.css';

const AddBook = ({ addNewBook }) => {
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
      addNewBook(bookInfo);
      setBookInfo({
        title: '',
        author: '',
      });
      setWarning('');
    } else {
      setWarning('Empty input field(s)!');
    }
  };

  return (
    <>
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
    </>
  );
};

export default AddBook;
