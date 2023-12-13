import { configureStore } from '@reduxjs/toolkit';
// import reducers next
import rosterSlice from './reducers/rosterSlice';
import accomplishementsSlice from './reducers/accomplishmentsSlice';
import adminsSlice from './reducers/adminsSlice';

const store = configureStore({
    reducer: {
        roster: rosterSlice.reducer,
        accomplishments: accomplishementsSlice.reducer,
        admins: adminsSlice.reducer
    }
});

export default store;