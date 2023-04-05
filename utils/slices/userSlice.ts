import { createSlice } from "@reduxjs/toolkit";

type IniitalState = {
  name: string;
  email: string;
  password: string;
};

const initialState: IniitalState = {
  name: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      (state.name = action.payload),
        (state.email = action.payload),
        (state.password = action.payload);
    },
  },
});

export default userSlice.reducer;
export const { signUp } = userSlice.actions;
