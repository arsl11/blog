import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { authSlice } from "./store/authSlice";
import { postsSlice } from "./store/postsSlice";
import { createWrapper } from "next-redux-wrapper";

const reducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [postsSlice.name]: postsSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

