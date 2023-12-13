import { createSlice } from "@reduxjs/toolkit";

const initialAdminsState = {
    admins: []
};

const adminsReducers = {
    getAdmins(state, action) {
        state.admins = action.payload.data
    }
};

const adminsSlice = createSlice({
    name: 'admins',
    initialState: initialAdminsState,
    reducers: adminsReducers
});

export const adminsActions = adminsSlice.actions;
export default adminsSlice;