import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Data } from "../../data";
const initialState = {
  data:Data,
  loading:false,
  error:""
};

const fetchData = createAsyncThunk("user/fetchData", async () => {
  const res = await axios
    .get("/Data");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "something when wrong";
    });
  },
});

export default userSlice.reducer;
const _fetchUsers = fetchData;
export { _fetchUsers as fetchData };
