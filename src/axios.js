import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-f79e3.cloudfunctions.net/api' 
    // THE API (cloud function) URL
});

export default instance;

//
//http://127.0.0.1:5001/challenge-f79e3/us-central1/api