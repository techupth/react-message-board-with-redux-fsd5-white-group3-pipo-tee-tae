import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  textList: [],
};

export const stateText = createSlice({
  name: "stateText",
  initialState: initialState,
  reducers: {
    getText: (state, action) => {
      state.text = action.payload;
    },
    addList: (state, action) => {
      state.textList.push(state.text);
      state.text = "";
    },
    deleteList: (state, action) => {
      state.textList.splice(action.payload, 1);
    },
  },
});

export const { getText, addList, deleteList } = stateText.actions;
export default stateText.reducer;
