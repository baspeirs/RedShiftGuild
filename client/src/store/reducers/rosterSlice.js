import { createSlice } from "@reduxjs/toolkit";

const initialRosterState = {
    rosters: []
};

const rosterReducers = {
    getRoster(state, action) {
        const payload = action.payload.data.groups
        state.rosters = payload.map(group => {
            return {
                group: group.group,
                roster: group.roster,
                schedule: group.schedule
            }
        })
    }
};

const rosterSlice = createSlice({
    name: 'roster',
    initialState: initialRosterState,
    reducers: rosterReducers
});

export const rosterActions = rosterSlice.actions;
export default rosterSlice;
