import axios from 'axios';

export const API = {
    getRoster: function() {
        return axios.get('/api/getRoster')
    },
    getAccomplishments: function() {
        return axios.get('/api/getAccomplishments')
    },
    getAdmins: function() {
        return axios.get('/api/getAdmins')
    }
}