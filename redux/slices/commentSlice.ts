import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayerState = any[]; // 배열 타입으로 변경

const initialState: PlayerState = [];

const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {
		reset: (state) => {
			// 초기 상태로 리셋
			return initialState;
		},
		comment: (state, action: PayloadAction<PlayerState>) => {
			// 전달된 액션 페이로드로 상태 업데이트
			return [...action.payload]; // 전달된 페이로드로 상태를 업데이트하고자 할 때
		},
	},
});

export const { reset, comment } = commentSlice.actions;
export default commentSlice.reducer;
