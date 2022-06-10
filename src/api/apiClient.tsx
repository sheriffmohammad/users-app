import axios from "axios";
export default axios.create({
    baseURL: "https://enable-tech-users-app-server.herokuapp.com", // For local run use "http://localhost:5000",
    headers: {
        "Content-type": "application/json"
    }
});