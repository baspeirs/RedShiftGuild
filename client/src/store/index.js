import { configureStore } from '@reduxjs/toolkit';
// import reducers next
import rosterSlice from './reducers/rosterSlice';

const store = configureStore({
    reducer: {
        roster: rosterSlice.reducer
    }
});

export default store;