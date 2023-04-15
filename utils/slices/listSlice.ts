import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../data";
import { removed as CompltedRemoved } from "./compltedSlice";

const initialState = { data: Data.filter((item) => item.active == true) };
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    added: (state, action) => {
      action.payload.active = true;
      state.data.push(action.payload);
    },
    complted: (state, action) => {
      const index = state.data.findIndex(
        (arrow) => arrow.id === action.payload.id
      );
      state.data[index].active = false;
    },
    removed: (state, action) => {
      state.data.splice(
        state.data.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
    edidted: (state, action) => {
      const index = state.data.findIndex(
        (arrow) => arrow.id === action.payload.id
      );
      state.data[index].name = action.payload.name;
      state.data[index].details = action.payload.details;
    },
    pinned: (state, action) => {
      const index = state.data.findIndex(
        (arrow) => arrow.id === action.payload.id
      );
      state.data[index].pinned = true;
      const item = state.data[index];
      state.data.splice(index, 1);
      state.data.unshift(item);
    },
    unPinned: (state, action) => {
      const index = state.data.findIndex(
        (arrow) => arrow.id === action.payload.id
      );
      state.data[index].pinned = false;
      const item = state.data[index];
      state.data.splice(index, 1);
      state.data.push(item);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CompltedRemoved, (state, action) => {
      state.data.splice(
        state.data.findIndex((item) => item.id == action.payload.id)
      );
    });
  },
});

export default listSlice.reducer;
export const { added, complted, removed, edidted, pinned, unPinned } =
  listSlice.actions;
