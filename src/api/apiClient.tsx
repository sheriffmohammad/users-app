import axios from "axios";
export default axios.create({
    baseURL: "https://enable-tech-users-app-server.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});