import { API } from "../../utils/API";
import { accomplishmentsActions } from "../reducers/accomplishmentsSlice";

export const fetchAccomplishmentsData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await API.getAccomplishments();

            if (!response.statusText === 'OK') {
                throw new Error('Fetching Accomplishments data failed')
            };
            
            return response;
        }

        try {
            const accomplishmentsData = await fetchData();
            dispatch(accomplishmentsActions.getAccomplishments(accomplishmentsData))
        } catch (error) {
            console.error(error)
        };
    };
};
