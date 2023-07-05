import axios from 'axios';

function login(values: { email: string; password: string }) {
    return axios.post(
        'http://127.0.0.1:5000/api/v1/login',
        values
    );
}
export {login};