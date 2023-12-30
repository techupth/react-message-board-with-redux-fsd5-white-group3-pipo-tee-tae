import { configureStore } from "@reduxjs/toolkit";
import stateText from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: {
    stateText: stateText,
  },
});
