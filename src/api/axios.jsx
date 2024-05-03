import axios from "axios";

const instance = axios.create({
    baseURL: 'https://apidolhack.up.railway.app',
});

export default instance;
