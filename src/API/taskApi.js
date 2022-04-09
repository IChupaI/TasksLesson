import axios from "axios";
import {SERVER_API} from "./api";

const tasksApi = {
    getTasks: () => axios.get(`${SERVER_API}/tasks`),
    createTask: (task)=> axios.post(`${SERVER_API}/tasks/create-task`, task)
}

export default tasksApi