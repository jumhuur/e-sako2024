import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  loading: false,
};

const Coutup = () => {};

export const NotificationsSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Coutup notice
    builder.addCase(Coutup.ful, (state, actions) => {
      state.count + 1;
    });
  },
});

export const {} = NotificationsSlice.actions;
export default NotificationsSlice.reducer;
