import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../data";

const initialState = {data:Data};
let i = 3
const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    added: (state, action) => {
      action.payload.active = true
      state.data.push({id:i,...action.payload});
      i +=1
    },
    complted: (state, action) => {
      const index = state.data.findIndex((arrow) => arrow.id === action.payload)
      state.data[index].active = false;
    },
    removed: (state, action) => {
      state.data.splice(state.data.findIndex((arrow) => arrow.id === action.payload), 1);
    },
  },
});

export default listSlice.reducer;
export const { added, complted, removed } = listSlice.actions;
