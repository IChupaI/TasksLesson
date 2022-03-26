import React, {memo, useState} from "react";
import classes from './mainPage.module.css'
import {TASK_TEST_LIST} from "../constans";


const MainPage = () => {

    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(TASK_TEST_LIST)


    const handleChangeControlled = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleClickControlled = () => {
        const taskNumber = tasks.length + 1
        const newTasks = {
            id: tasks.length + 1,
            title: value,
            description: 'test Task' + ' ' + taskNumber,
            deadline: new Date(),
        }
        setTasks([...tasks, newTasks])
    }

    return (
        <div className={classes.mainPageWrapper}>

            <div>
                <input placeholder="Controlled" value={value} onChange={handleChangeControlled}/>
                <button onClick={handleClickControlled}>Create Task</button>
            </div>

            {tasks.map(task => (
                    <div className={classes.taskCard} key={task.id}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <div>
                            {task.deadline.getFullYear() + '.' + (task.deadline.getMonth() + 1) + '.'
                            + task.deadline.getDate() + ' ' + task.deadline.getHours() + ':'
                            + task.deadline.getMinutes() + ':' + task.deadline.getSeconds()}
                        </div>
                    </div>
                )
            )}

        </div>
    )
}

export default memo(MainPage)