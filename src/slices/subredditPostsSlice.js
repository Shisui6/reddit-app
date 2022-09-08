import { createSlice } from "@reduxjs/toolkit";


export const subredditPostsSlice = createSlice({
    name: 'subredditPosts',
    initialState: {
        selectedSubreddit: '/r/popular/',
        subredditInfo: {
            name: '',
            subName: '',
            image: '',
            background: '',
            description: ''
        }

    },
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        
        setSubredditInfo(state, action) {
            state.subredditInfo = action.payload;
        }
    }
});

export const {
    setSelectedSubreddit,
    setSubredditInfo
 } = subredditPostsSlice.actions;
export const selectSelectedSubreddit = (state) => state.subredditPosts.selectedSubreddit;
export const selectSubredditInfo = (state) => state.subredditPosts.subredditInfo;

export default subredditPostsSlice.reducer;