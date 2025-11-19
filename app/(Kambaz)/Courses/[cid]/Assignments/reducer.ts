/* eslint-disable @typescript-eslint/no-explicit-any */


import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../../Database";


const initialState = {
  assignments: <any[]>[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
                                                 a._id === assignment._id ? assignment : a) as any;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});
export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;