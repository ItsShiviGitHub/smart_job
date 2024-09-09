import { configureStore } from '@reduxjs/toolkit';
import candidateSlice from '../reduxSlice/candidateSlice'

export const store = configureStore({
    reducer: {
        AUTH: candidateSlice,
    },
});