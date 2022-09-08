import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/Subreddits/subredditSlice'

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer
  },
});
