import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-9fd3f.firebaseio.com/"
})

export default instance;