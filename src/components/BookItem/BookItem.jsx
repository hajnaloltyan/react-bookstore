import './BookItem.css';

const BookItem = ({ bookProp, deleteBook }) => {
  const {
    id,
    title,
    author,
    category,
    currentChapter,
    completed,
  } = bookProp;

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
              <button type="button" onClick={() => deleteBook(id)}>
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

export default BookItem;
