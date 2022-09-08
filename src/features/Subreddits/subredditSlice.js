import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getSubreddits } from "../../api/reddit";


export const loadSubreddits = createAsyncThunk(
    'subreddits/getSubreddits',
    async () => {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const jsonResponse = await response.json();
    
        return jsonResponse.data.children.map(subreddit => subreddit.data)
    }
);


// Slice Object
///////////////////////////////////////
export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});


// Selectors
///////////////////////////////////////
export const selectSubreddits = (state) =>state.subreddits.subreddits;


// Exports
///////////////////////////////////////
export default subredditsSlice.reducer;