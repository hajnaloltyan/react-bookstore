import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [
    {
      itemID: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      currentChapter: 'Chapter 21',
      completed: '80%',
    },
    {
      itemID: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      currentChapter: 'Chapter 2',
      completed: '10%',
    },
    {
      itemID: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      currentChapter: 'Chapter 15',
      completed: '60%',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    deleteBook: (state, { payload }) => {
      const bookId = payload;
      return {
        ...state,
        books: state.books.filter((book) => book.itemID !== bookId),
      };
    },
    addNewBook: (state, { payload }) => {
      const { title, author } = payload;
      const newBook = {
        itemID: `item${state.books.length + 1}`,
        title,
        author,
        category: 'Action',
        currentChapter: 'Chapter 1',
        completed: '0%',
      };
      state.books.push(newBook);
    },
  },
});

export const { deleteBook, addNewBook } = booksSlice.actions;

export default booksSlice.reducer;
