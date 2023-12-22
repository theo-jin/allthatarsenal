import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlayerState = {
    name: string;
    number: number;
    pace: number;
    dribble: number;
    shot: number;
    pass: number;
    physical: number;
    defence: number;
    role: string;
    pic: string;
    nation: string;
};

const initialState: PlayerState = {
    name: "",
    number: 0,
    pace: 0,
    dribble: 0,
    shot: 0,
    pass: 0,
    physical: 0,
    defence: 0,
    role: "",
    pic: "https://i.pinimg.com/originals/21/5b/24/215b24eee713a7a2796467ff2adae1a5.png",
    nation: "KR",
};

const playerSlice = createSlice({
    name: 'playerA',
    initialState,
    reducers: {
        reset: (state) => {
            // 초기 상태로 리셋
            return initialState;
        },
        player1: (state, action: PayloadAction<PlayerState>) => {
            // 전달된 액션 페이로드로 상태 업데이트
            return { ...state, ...action.payload };
        },
    },
});

export const { reset, player1 } = playerSlice.actions;
export default playerSlice.reducer;