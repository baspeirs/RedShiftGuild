import { createSlice } from "@reduxjs/toolkit";

const initialRosterState = {
    roster: {},
    schedule: {},
    bench: {}
};

const rosterReducers = {
    getRoster(state, action) {
        const payload = action.payload.data.group1
        state.roster = payload.roster
        state.schedule = {
            days: payload.schedule.days,
            raidStart: payload.schedule.times[0],
            raidEnd: payload.schedule.times[1],
            inviteTime: payload.schedule.times[2]
        }
    }
};

const rosterSlice = createSlice({
    name: 'roster',
    initialState: initialRosterState,
    reducers: rosterReducers
});

export const rosterActions = rosterSlice.actions;
export default rosterSlice;
