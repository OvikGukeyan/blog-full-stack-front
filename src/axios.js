import  axios  from "axios";

const instansse = axios.create({
    baseURL: 'http://localhost:777'
});

export default instansse;