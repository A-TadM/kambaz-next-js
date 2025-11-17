/* eslint-disable @typescript-eslint/no-explicit-any */


import { createSlice } from "@reduxjs/toolkit";
//import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";


const initialState = {
 enrollments: <any[]>[],
};
const enrollmentsSlice = createSlice({
 name: "enrollments",
 initialState,
 reducers: {
   addNewEnrollment: (state, { payload: enrollment }) => {
     const newEnrollment = { ...enrollment, _id: uuidv4() };
     state.enrollments = [...state.enrollments, newEnrollment] as any;
   },
   deleteEnrollment: (state, { payload: enrollmentId }) => {
     state.enrollments = state.enrollments.filter((enrollment: any) => enrollment._id !== enrollmentId);
   },
   setEnrollments: (state, action) => {
      state.enrollments = action.payload;
   },
 },
});
export const { addNewEnrollment, deleteEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;