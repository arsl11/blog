import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Type for our state
export interface Post {
  id: number;
  message: string;
  likesCount: number;
}

// Initial state
const initialState: Post[] = [
  {
    id: 1,
    message: "First post",
    likesCount: 1
  },
  {
    id: 2,
    message: "Second post",
    likesCount: 2
  }
]

// Actual slice
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // Actions
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload)
      },
      prepare: (message: string) => {
        return { payload: { id: 3, message: message, likesCount: 0 }}
      }
    }
  }
})

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;