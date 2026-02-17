
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'C#' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'ReactJS' },
    { id: 6, name: 'Next' },
    { id: 7, name: 'Asp.Net MVC' },
  ],
};

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
  },
});

export const { addSkill } = skillSlice.actions;

export const selectSkills = (state) => state.skill.skills;

export default skillSlice.reducer;
