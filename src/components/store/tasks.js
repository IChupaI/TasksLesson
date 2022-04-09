import {makeAutoObservable} from "mobx";

class Tasks {
    constructor() {
        makeAutoObservable(this)
    }

    tasks = [{
        id: 1, title: 'Task', description: 'testTask', deadline: new Date(),
    }, {
        id: 2, title: 'Task2', description: 'test Task 2', deadline: new Date(),
    }, {
        id: 3, title: 'Task3', description: 'test Task 3', deadline: ("2023-11-08T17:44:56.144"),
    }];

    addTask = ({title, description}) => {
        const newTask = {
            id: this.tasks.length + 1, title, description, deadline: new Date(),
        }
        this.tasks.push(newTask);
    }

}

export default new Tasks()