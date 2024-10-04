import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import { default as weatherSlice } from "./weather/slice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false, getDefaultMiddleware: true }).concat(thunk);
    },
    devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
