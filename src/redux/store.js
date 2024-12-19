"use client";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});


export default store;
