import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

function getApiUrl(params) {
    return axios.create({
        baseURL: `${apiUrl}?key=${apiKey}`,
    });
}

export default getApiUrl