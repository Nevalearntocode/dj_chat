import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./features/category-slice";
import { serverSlice } from "./features/server-slice";
import { channelSlice } from "./features/channel-slice";
import { messageSlice } from "./features/message-slice";
import modal from "./features/modal-slice";
import globalVar from "./features/global-var-slice";

export const store = configureStore({
  reducer: {
    modal,
    globalVar,
    category: categorySlice.reducer,
    channel: channelSlice.reducer,
    message: messageSlice.reducer,
    [serverSlice.reducerPath]: serverSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
