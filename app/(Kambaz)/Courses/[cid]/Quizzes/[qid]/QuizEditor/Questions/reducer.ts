/* eslint-disable @typescript-eslint/no-explicit-any */


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  questions: <any[]>[],
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});
export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;