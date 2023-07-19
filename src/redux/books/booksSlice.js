import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const apiKey = import.meta.env.VITE_API_KEY;
const fullURL = `${baseURL}/${apiKey}/books`;

const initialBooks = {
  books: [],
  status: 'idle', // loading, succeeded, failed
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(fullURL);
      const data = Object.values(response.data);
      const booksResult = data.flat();
      return booksResult;
    } catch (err) {
      return err.message;
    }
  },
);

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
        itemID: nanoid(),
        title,
        author,
        category: 'Action',
        currentChapter: 'Chapter 1',
        completed: '0%',
      };
      state.books.push(newBook);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload.map((book) => ({
          ...book,
          itemID: nanoid(),
          currentChapter: 'Chapter 1',
          completed: '0%',
        })),
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const AllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export const { deleteBook, addNewBook } = booksSlice.actions;

export default booksSlice.reducer;
