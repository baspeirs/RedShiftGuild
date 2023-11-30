import { createSlice } from "@reduxjs/toolkit";

const initialRosterState = {};

const rosterReducers = {
    getRoster(state, action) {

    }
};

const rosterSlice = createSlice({
    name: 'roster',
    initialState: initialRosterState,
    reducers: rosterReducers
});

export const rosterActions = rosterSlice.actions;
export default rosterSlice;