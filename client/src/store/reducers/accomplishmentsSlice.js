import { createSlice } from "@reduxjs/toolkit";

const initialAccomplishmentState = {
    accomplishments: []
}

const accomplishmentsReducers = {
    getAccomplishments(state, action) {
        state.accomplishments = action.payload.data
    }
};

const accomplishementsSlice = createSlice({
    name: 'accomplishments',
    initialState: initialAccomplishmentState,
    reducers: accomplishmentsReducers
});

export const accomplishmentsActions = accomplishementsSlice.actions;
export default accomplishementsSlice;