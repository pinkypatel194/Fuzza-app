import axios from 'axios';

export function UserData() {
    return axios.get('https://dummyjson.com/users');
}