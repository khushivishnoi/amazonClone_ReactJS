import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-89c82/us-central1/api'  // the cloud function url
    
});

export default instance;