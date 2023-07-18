import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
  books: [
    {
      id: 0,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 21',
      completed: '80%',
    },
    {
      id: 1,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 2',
      completed: '10%',
    },
    {
      id: 2,
      title: 'title',
      author: 'author',
      category: 'Action',
      currentChapter: 'Chapter 1',
      completed: '60%',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    deleteBook: (state, { payload }) => {
      const bookId = payload.id;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== bookId),
      };
    },
    addNewBook: (state, { payload }) => {
      const { title, author } = payload;
      const newBook = {
        id: state.books.length,
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
