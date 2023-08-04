import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Actions
    setAuthState(state, action: PayloadAction<boolean>) {
      state.authState = action.payload;
    }
  },
});

export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;

