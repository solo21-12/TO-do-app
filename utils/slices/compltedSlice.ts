import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../data";
import {complted as ListRemoved} from './listSlice'
const initialState = { data: Data.filter((item) => (item.active == false)) };
let i = 3;
const compltedSlice = createSlice({
  name: "completed",
  initialState,
  reducers: {
    removed: (state, action) => {
      state.data.splice(
        state.data.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(ListRemoved,(state,action)=>{
      state.data.push(action.payload)
    })
  }
});

export default compltedSlice.reducer;
export const {  removed } = compltedSlice.actions;
