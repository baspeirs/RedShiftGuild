import { API } from "../../utils/API";
import { rosterActions } from "../reducers/rosterSlice";

export const fetchRosterData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await API.getRoster();

            if (!response.statusText === 'OK') {
                throw new Error('Fetching roster data failed')
            };
            
            return response;
        };

        try {
            const rosterData = await fetchData();
            dispatch(rosterActions.getRoster(rosterData))
        } catch (error) {
            console.error(error)
        };
    };
};
