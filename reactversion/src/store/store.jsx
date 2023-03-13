import { configureStore, createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState:     localStorage.getItem("formData") || [],
  reducers: {
    storeForm: (state, action) => {
      state.push(action.payload);
      
    },
    saveStore:(state) => {
      window.localStorage.setItem("formData",state)
    }
  },
});

export const { storeForm, saveStore } = formDataSlice.actions;

export default formDataSlice.reducer;

export const store = configureStore({
  reducer: {
    formData: formDataSlice.reducer,
  },
});
