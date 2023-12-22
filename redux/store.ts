import { configureStore } from "@reduxjs/toolkit";

import playerSlice from "./slices/playerSlice"
import playerSlice2 from "./slices/playerSlice2";
export const store = configureStore({
    reducer: {

        playerA: playerSlice,
        playerB: playerSlice2,

    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;