import axios from 'axios';

export const API = {
    getRoster: function() {
        return axios.get('/api/getRoster')
    }
}