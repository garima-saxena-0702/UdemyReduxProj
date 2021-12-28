import { createSlice } from "@reduxjs/toolkit";

const initialConuterstate = { counter: 0, showCounter: true };

const conuterSlice = createSlice({
  name: "counter",
  initialState: initialConuterstate,
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

export const counterActions = conuterSlice.actions;
export default conuterSlice.reducer;