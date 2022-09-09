import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubredditPosts = createAsyncThunk(
    'subredditPosts/getSubredditPosts',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com${subreddit}.json`);
        const jsonResponse = await response.json();

        return jsonResponse.data.children.map(post => post.data)
    }
)


export const subredditPostsSlice = createSlice({
    name: 'subredditPosts',
    initialState: {
        selectedSubreddit: '/r/popular/',
        subredditInfo: {
            name: 'Popular',
            image: require('../images/popular.png'),
            background: require('../images/banner.png'),
            description: 'Reddit Home Page'
        },
        posts: [],
        isLoading: false,
        hasError: false

    },
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        
        setSubredditInfo(state, action) {
            state.subredditInfo = action.payload;
        }
    },
    extraReducers: {
        [loadSubredditPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubredditPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubredditPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

export const {
    setSelectedSubreddit,
    setSubredditInfo
 } = subredditPostsSlice.actions;
export const selectSelectedSubreddit = (state) => state.subredditPosts.selectedSubreddit;
export const selectSubredditInfo = (state) => state.subredditPosts.subredditInfo;
export const selectPosts = (state) => state.subredditPosts.posts;

export default subredditPostsSlice.reducer;