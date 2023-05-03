import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi/authApi";
import { userDataReducer } from "./userData/userData";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        userDataReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;