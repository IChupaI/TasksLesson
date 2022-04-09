import {makeAutoObservable} from "mobx";

class Tasks {
    constructor() {
        makeAutoObservable(this)
    }
    tasks = [
        {
            id: 1,
            title: 'Task 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            deadline: new Date(),
        } ,
        {
            id: 2,
            title: 'Task 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            deadline: new Date(),
        } ,
        {
            id: 3,
            title: 'Task 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            deadline: new Date(),
        },
    ]
    setTasks(tasksArr) {
        this.tasks = tasksArr
    }
}

export const TaskState = new Tasks()