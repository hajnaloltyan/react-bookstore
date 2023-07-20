import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../redux/books/booksSlice';
import './BookItem.css';

const BookItem = ({ book }) => {
  const {
    item_id,
    title,
    author,
    category,
    currentChapter,
    completed,
  } = book;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <li className="bookCard">
      <article className="bookDetails">
        <div>
          <h4 className="bookInfo">{category}</h4>
          <h3 className="bookInfo">{title}</h3>
          <p className="bookInfo">{author}</p>

          <ul className="actionButtons">
            <li><button type="button">Comments</button></li>
            <li>
              <button type="button" onClick={handleDelete}>
                Remove
              </button>
            </li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>

        <div className="bookCompletion">
          <h2>{completed}</h2>
          <h3>Completed</h3>
        </div>
      </article>

      <hr className="card-hr" />

      <div className="bookChapter">
        <h4>Current Chapter</h4>
        <h4>{currentChapter}</h4>
        <button type="button" className="progressBtn">Update Progress</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
