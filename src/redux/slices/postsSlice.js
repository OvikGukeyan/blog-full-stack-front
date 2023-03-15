import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";



export const fetchPosts = createAsyncThunk('posts/fetchPosts', async() => {
    const {data} = await axios.get('/posts');
    return data
});

export const fetchTags = createAsyncThunk('tags/fetchTags', async() => {
    const {data} = await axios.get('/tags');
    return data
});

export const fetchPostRemove = createAsyncThunk('remove/fetchPostsRemove', async(id) => {
    axios.delete(`/posts/${id}`);
    return id;
})


const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        //Posts
        [fetchPosts.pending]: (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.status = 'loaded';
            state.posts.items = action.payload;
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
        //Tags
        [fetchTags.pending]: (state) => {
            state.tags.items = [];
            state.tags.status = 'loading';
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags.status = 'loaded';
            state.tags.items = action.payload;
        },
        [fetchTags.rejected]: (state) => {
            state.tags.items = [];
            state.tags.status = 'error';
        },
        //Remove
        [fetchPostRemove.pending]: (state, action) => {
            state.posts.items = state.posts.items.filter(obj => obj._id !== action.payload);
        },
        
        
    }
});


export const selectPosts = (state) => state.posts;
export const postsReducer = postsSlice.reducer;