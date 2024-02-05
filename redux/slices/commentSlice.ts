import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayerState = {

};

const initialState: PlayerState = {
    []
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        reset: (state) => {
            // 초기 상태로 리셋
            return initialState;
        },
        comment: (state, action: PayloadAction<PlayerState>) => {
            // 전달된 액션 페이로드로 상태 업데이트
            return { ...state, ...action.payload };
        },
    },
});

export const { reset, comment } = commentSlice.actions;
export default commentSlice.reducer;