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
            background: require('../images/banner1.jpg'),
            description: 'Reddit Home Page'
        },
        posts: [],
        isLoading: false,
        hasError: false,
        searchTerm: ''
    },
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSubredditInfo(state, action) {
            state.subredditInfo = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
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
    setSubredditInfo,
    setSearchTerm
 } = subredditPostsSlice.actions;

export const selectSelectedSubreddit = (state) => state.subredditPosts.selectedSubreddit;
export const selectSubredditInfo = (state) => state.subredditPosts.subredditInfo;
export const selectPosts = (state) => state.subredditPosts.posts;
export const selectIsLoading = (state) => state.subredditPosts.isLoading;
export const selectHasError = (state) => state.subredditPosts.hasError;
export const selectSearchTerm = (state) => state.subredditPosts.searchTerm;

export const selectFilteredPosts = (state) => {
    const posts = selectPosts(state);
    const searchTerm = selectSearchTerm(state);
  
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

export default subredditPostsSlice.reducer;
