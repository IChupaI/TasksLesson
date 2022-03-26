import React, {memo, useCallback, useEffect, useState} from "react";
import classes from './mainPage.module.css'
import {TASK_TEST_LIST} from "../constans";


const MainPage = (props) => {

    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(TASK_TEST_LIST)


    const handleChangeControlled = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleClickControlled = (event) => {
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




// import React, {memo} from "react";
// import classes from "./mainPage.module.css";
//
// const MainPage = (props) => {
//     return (
//         <div className={classes.mainPageWrapper}>
//             {props.tasks.map(task => (
//                     <div className={classes.taskCard} key={task.id}>
//                         <div> {task.title} </div>
//                         <div> {task.description} </div>
//                         <div>
//                             {task.deadline.getFullYear() + '.' + (task.deadline.getMonth() + 1) + '.'
//                             + task.deadline.getDate() + ' ' + task.deadline.getHours() + ':'
//                             + task.deadline.getMinutes() + ':' + task.deadline.getSeconds()}
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     )
// }
// export default memo(MainPage);