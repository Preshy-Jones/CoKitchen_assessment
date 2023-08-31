import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import fileReducer from "../features/files/fileSlice";

export const store = configureStore({
  reducer: {
    file: fileReducer,
  },

  //  middleware;getDefaultMiddleware => getDefaultMiddleware().concat(),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
