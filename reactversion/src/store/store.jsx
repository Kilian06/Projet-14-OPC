import { configureStore, createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: [],
  reducers: {
    storeForm: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { storeForm } = formDataSlice.actions;

export default formDataSlice.reducer;

export const store = configureStore({
  reducer: {
    formData: formDataSlice.reducer,
  },
});
