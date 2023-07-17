import { createSlice } from '@reduxjs/toolkit';

const initialCategories = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategories,
  reducers: {
    checkTheStatus: () => 'Under construction!',
  },
});

export default categoriesSlice.reducer;
