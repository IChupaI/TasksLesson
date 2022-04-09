import React, {memo, useState} from "react";
import classes from './mainPage.module.css'
import TaskCard from "./TaskCard";
import Tasks from "./store/tasks";


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

    const addNewTask = () => {
        Tasks.addTask({title, description})
        setTitle('')
        setDescription('')
    }

    return (
        <div className={classes.mainPageWrapper}>
            <div>
                <input placeholder="Title" value={title} onChange={handleChangeTitle}/>
                <input placeholder="Description" value={description} onChange={handleChangeDescription}/>
                <button onClick={addNewTask}>Create Task</button>
            </div>
            {Tasks.tasks.map(task => <TaskCard task={task} key={task.id}/>)}
        </div>
    )
}

export default memo(MainPage)