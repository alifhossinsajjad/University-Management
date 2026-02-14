import { configureStore } from "@reduxjs/toolkit";
import authReducer from './feature/auth/authSlice'
import { baseApi } from "./api/baseApi";
import { persistReducer, persistStore, FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
}

const persistAuthReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistAuthReducer
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE,]
            }
        }).concat(baseApi.middleware)

})


export default store


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)