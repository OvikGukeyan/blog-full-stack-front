import axios from "axios";

const instansse = axios.create({
    baseURL: 'http://localhost:777'
});

instansse.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;

});


export default instansse;