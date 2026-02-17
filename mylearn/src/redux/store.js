
import { configureStore } from '@reduxjs/toolkit';
import skillReducer from './skillSlice';

export const store = configureStore({
    reducer: {
        skill: skillReducer,
    },
});
