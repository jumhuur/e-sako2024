import { configureStore } from "@reduxjs/toolkit";
import { NotificationsSlice } from "./AllSlices/Xisaabslice";

export const store = configureStore({
  reducer: {
    Notifications: NotificationsSlice,
  },
});
