import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const player = createSlice({
    name: 'player',
    initialState: { name: '', number: 0, pace: 0, dribble: 0, shot: 0, pass: 0, physical: 0, defence: 0 },//초기 값
    reducers: {
        
    }
})

export let {  } = player.actions

