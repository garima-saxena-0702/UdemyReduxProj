import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialstate = { counter: 0, showCounter: true };

const conuterSlice = createSlice({
  name: "counter",
  initialState: initialstate,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: conuterSlice.reducer });

export const counterActions = conuterSlice.actions
export default store;
