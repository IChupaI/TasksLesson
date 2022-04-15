import React, {memo, useState} from "react";
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";
import {TaskState} from "./store/tasks";
import {apiGateaway} from "../API/api";
import moment from "moment";


const MainPage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleChangeTitle = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
    }

    const addNewTask = async () => {
        const res = await apiGateaway.tasks.createTask({title: title, description: description, deadline: moment()} /*Tasks.tasks*/)
        if (res.status !== 201) {
            console.log('Something wrong')
            console.log(res)
            return null
        }
        const allTasksRes = await apiGateaway.tasks.getTasks()
        TaskState.setTasks(allTasksRes.data)
    }

    return (
        <div className={classes.mainPageWrapper}>
            <div>
                <input placeholder="Title"
                       value={title}
                       onChange={handleChangeTitle}/>
                <input placeholder="Description"
                       value={description}
                       onChange={handleChangeDescription}/>
                <button onClick={addNewTask}>Create Task</button>
            </div>
            {TaskState.tasks.map(task => <TaskCard task={task} key={task.id}/>)}
        </div>
    )
}

export default memo(MainPage)