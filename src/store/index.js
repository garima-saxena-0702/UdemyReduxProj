import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import conuterSlice from "./conuterSlice";

const store = configureStore({
  reducer: { counter: conuterSlice, auth: authSlice },
});

export default store;
