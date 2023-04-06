import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import listSlice from "./slices/listSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    list:listSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = typeof store.dispatch;
