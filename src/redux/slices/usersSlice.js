import { createSlice } from "@reduxjs/toolkit";

const initState = {
  data: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: initState,
  reducers: {},
});

export default usersSlice.reducer;
