import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../data";
import { removed as CompltedRemoved } from "./compltedSlice";
const initialState = { data: Data.filter((item) => item.active == true) };
let i = 3;
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    added: (state, action) => {
      action.payload.active = true;
      state.data.push({ id: i, ...action.payload });
      i += 1;
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
export const { added, complted, removed, edidted } = listSlice.actions;
