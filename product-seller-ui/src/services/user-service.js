import axios from "axios";
import { BASE_API_URL } from "../commons/constants";
import { authorizationHeader } from "./base-service";

const USER_API_URL = `${BASE_API_URL}/api/user`;

class UserService {

    changeRole(role) {
        return axios.put(`${USER_API_URL}/change/${role}`, {}, { headers: authorizationHeader() });
    };
}

const userService = new UserService();

export default userService;