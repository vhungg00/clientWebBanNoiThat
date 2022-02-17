import axios from "axios";

export const URL = 'http://localhost:3001/v1';

const axiosClient = axios.create(
    {
    baseURL: `${ URL }`,
    timeout: 60000,
    headers: {
        Accept: "application/json","Content-Type": "application/json",
    },
});
export default axiosClient