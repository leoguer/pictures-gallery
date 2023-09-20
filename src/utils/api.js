import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

export default function ApiConf() {
    return axios.create({
        baseURL: `${apiUrl}?key=${apiKey}&pretty=true&image_type=photo`,
    });
}
