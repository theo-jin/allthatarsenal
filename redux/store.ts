import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./slices/playerSlice";
import commentSlice from "./slices/commentSlice";

export const store = configureStore({
	reducer: {
		playerA: playerSlice,
		// comment:commentSlice
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
