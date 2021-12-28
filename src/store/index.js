import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialConuterstate = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

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

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: conuterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = conuterSlice.actions;
export const authActions = authSlice.actions;
export default store;
