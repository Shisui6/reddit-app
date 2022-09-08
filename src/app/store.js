import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../slices/subredditsSlice'
import subredditPostsReducer from '../slices/subredditPostsSlice'

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    subredditPosts: subredditPostsReducer
  },
});
