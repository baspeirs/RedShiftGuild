import { configureStore } from '@reduxjs/toolkit';
// import reducers next
import rosterSlice from './reducers/rosterSlice';
import accomplishementsSlice from './reducers/accomplishmentsSlice';

const store = configureStore({
    reducer: {
        roster: rosterSlice.reducer,
        accomplishments: accomplishementsSlice.reducer
    }
});

export default store;