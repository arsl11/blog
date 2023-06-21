import { 
  configureStore,
  ThunkAction,
  Action,
  AnyAction, 
} from "@reduxjs/toolkit";
import { authSlice } from "./src/store/authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => 
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer
    }
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

