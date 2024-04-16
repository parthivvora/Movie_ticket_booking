import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBlogs } from "../../global/apiCall";

export const getAllBlogsSlice = createAsyncThunk(
  "blog/getAllBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllBlogs();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isLoading: false,
    errorMessage: null,
    blogData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogsSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogsSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogData = action.payload;
      })
      .addCase(getAllBlogsSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default blogSlice.reducer;
