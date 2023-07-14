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
    <li>
      <article>
        <div>
          <h4>{book.category}</h4>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button">Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>

        <div>
          <h2>{book.completed}</h2>
          <h3>Completed</h3>
        </div>

        <hr />

        <div>
          <h4>Current Chapter</h4>
          <h4>{book.currentChapter}</h4>
          <button type="button">Update Progress</button>
        </div>
      </article>
    </li>
  );
};

export default BookItem;
