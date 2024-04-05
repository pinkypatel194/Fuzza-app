
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

const store = configureStore({
    reducer: {
        posts: counterReducer
    }
});

export default store;