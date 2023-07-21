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
          <h4 className="bookInfo bookCategory">{category}</h4>
          <h3 className="bookInfo bookTitle">{title}</h3>
          <p className="bookInfo bookAuthor">{author}</p>

          <ul className="actionButtons">
            <li>
              <button type="button" className="actionBtn">Comments</button>
            </li>
            <hr className="hr-button" />
            <li>
              <button type="button" onClick={handleDelete} className="actionBtn">
                Remove
              </button>
            </li>
            <hr className="hr-button" />
            <li>
              <button type="button" className="actionBtn">Edit</button>
            </li>
          </ul>
        </div>

        <div className="bookCompletion">
          <div className="circle" />
          <div className="completionTexts">
            <p className="percentageText">{completed}</p>
            <p className="completedText">Completed</p>
          </div>
        </div>
      </article>

      <hr className="card-hr" />

      <div className="bookChapter">
        <p className="curChap-text">Current Chapter</p>
        <p className="curChap-value">{currentChapter}</p>
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
