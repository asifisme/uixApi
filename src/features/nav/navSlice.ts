import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IsSignedInState {
  isSignedIn: boolean;
}

const initialState: IsSignedInState = {
  isSignedIn: false,
};

const isSignedInSlice = createSlice({
  name: "isSignedIn",
  initialState,
  reducers: {
    setIsSignedIn: (state, action: PayloadAction<boolean>) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const { setIsSignedIn } = isSignedInSlice.actions;
export default isSignedInSlice.reducer;
