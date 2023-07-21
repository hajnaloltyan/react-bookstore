import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const apiKey = import.meta.env.VITE_API_KEY;
const fullURL = `${baseURL}/${apiKey}/books`;

const initialBooks = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(fullURL);
      const { data } = response;
      const booksResult = Object.keys(data).map((key) => ({
        item_id: key,
        ...data[key][0],
      }));
      return booksResult;
    } catch (err) {
      return err.message;
    }
  },
);

export const sendNewBook = createAsyncThunk(
  'books/sendNewBook',
  async (newBook) => {
    try {
      const allDetails = {
        ...newBook,
        item_id: nanoid(),
        category: 'Fiction',
      };

      const response = await axios.post(fullURL, allDetails);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookID) => {
    try {
      const response = await axios.delete(`${fullURL}/${bookID}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
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
          currentChapter: 'Chapter 1',
          completed: '20%',
        })),
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(sendNewBook.fulfilled, (state, action) => {
        if (action.payload === 'created') {
          return {
            ...state,
            status: 'succeeded',
          };
        }
        return state;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if (action.payload === 'The book was deleted successfully!') {
          return {
            ...state,
            status: 'succeeded',
          };
        }
        return state;
      });
  },
});

export const AllBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export default booksSlice.reducer;
