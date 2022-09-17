import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadSubredditPosts = createAsyncThunk(
    'subredditPosts/getSubredditPosts',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com${subreddit}.json`);
        const jsonResponse = await response.json();

        return jsonResponse.data.children.map(post => post.data);
    }
);

export const loadComments = createAsyncThunk(
    'subredditPosts/getComments',
    async(permalink) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`);
        const jsonResponse = await response.json();

        return jsonResponse[1].data.children.map(comment => comment.data);
    }
);


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
        comments: [],
        loadingComments: false,
        errorComments: false,
        showComments: false,
        loadingPosts: false,
        errorPosts: false,
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
        },
        toggleShowComments(state, action) {
            state.showComments = action.payload;
        },
        resetComments(state, action) {
            state.comments = [];
        }
    },
    extraReducers: {
        [loadSubredditPosts.pending]: (state, action) => {
            state.loadingPosts = true;
            state.errorPosts = false;
        },
        [loadSubredditPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.loadingPosts = false;
            state.errorPosts = false;
        },
        [loadSubredditPosts.rejected]: (state, action) => {
            state.loadingPosts = false;
            state.errorPosts = true;
        },
        [loadComments.pending]: (state, action) => {
            state.loadingComments = true;
            state.errorComments = false;
        },
        [loadComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.loadingComments = false;
            state.errorComments = false;
        },
        [loadComments.rejected]: (state, action) => {
            state.loadingComments = false;
            state.errorComments = true;
        }
    }
});

export const {
    setSelectedSubreddit,
    setSubredditInfo,
    setSearchTerm,
    toggleShowComments,
    resetComments
 } = subredditPostsSlice.actions;

export const selectSelectedSubreddit = (state) => state.subredditPosts.selectedSubreddit;
export const selectSubredditInfo = (state) => state.subredditPosts.subredditInfo;
export const selectPosts = (state) => state.subredditPosts.posts;
export const selectLoadingPosts = (state) => state.subredditPosts.loadingPosts;
export const selectErrorPosts = (state) => state.subredditPosts.errorPosts;
export const selectSearchTerm = (state) => state.subredditPosts.searchTerm;
export const selectShowComments = (state) => state.subredditPosts.showComments;
export const selectComments = (state) => state.subredditPosts.comments;
export const selectLoadingComments = (state) => state.subredditPosts.loadingComments;

export const selectFilteredPosts = (state) => {
    const posts = selectPosts(state);
    const searchTerm = selectSearchTerm(state);
  
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

export default subredditPostsSlice.reducer;
