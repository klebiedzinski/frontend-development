import { createSlice } from "@reduxjs/toolkit";


export const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        teams: []
    },
    reducers: {
        addTeam: (state,action) => {
            state.push(action.payload)
        }
    }
})