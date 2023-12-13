import { API } from "../../utils/API";
import { adminsActions } from "../reducers/adminsSlice";

export const fetchAdminsData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await API.getAdmins();

            if (!response.statusText === 'OK') {
                throw new Error('Fetching Admins data failed');
            }

            return response;
        }

        try {
            const adminsData = await fetchData();
            dispatch(adminsActions.getAdmins(adminsData));
        } catch (error) {
            console.error(error);
        }
    };
};
