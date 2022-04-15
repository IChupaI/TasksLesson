import axios from "axios";
import {SERVER_API} from "./api";

const tasksApi = {
    getTasks: () => axios.get(`${SERVER_API}/tasks`),
    createTask: (task) => axios.post(`${SERVER_API}/tasks/create-task`, task),
    deleteTasks: (task) => axios.delete(`${SERVER_API}/tasks/${task.id}`, task),
    editTask: (task) => axios.put(`${SERVER_API}/tasks/${task.id}`, task)
}

export default tasksApi