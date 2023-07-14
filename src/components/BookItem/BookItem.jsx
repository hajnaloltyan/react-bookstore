import './BookItem.css';

const BookItem = () => {
  const book = {
    id: 0,
    title: 'title',
    author: 'author',
    category: 'Action',
    currentChapter: 'Chapter 3',
    completed: '10%',
  };

  return (
    <li className="bookCard">
      <article className="bookDetails">
        <div>
          <h4 className="bookInfo">{book.category}</h4>
          <h3 className="bookInfo">{book.title}</h3>
          <p className="bookInfo">{book.author}</p>

          <ul className="actionButtons">
            <li><button type="button">Comments</button></li>
            <li><button type="button">Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>

        <div className="bookCompletion">
          <h2>{book.completed}</h2>
          <h3>Completed</h3>
        </div>
      </article>

      <hr className="card-hr" />

      <div className="bookChapter">
        <h4>Current Chapter</h4>
        <h4>{book.currentChapter}</h4>
        <button type="button" className="progressBtn">Update Progress</button>
      </div>
    </li>
  );
};

export default BookItem;
