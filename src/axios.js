import axios from "axios";

const instansse = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instansse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;

});


export default instansse;