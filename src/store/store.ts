import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../slices/uiSlice';
import languajeReducer from '../slices/languajeSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        languaje: languajeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
