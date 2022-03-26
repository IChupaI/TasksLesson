import React, {memo, useCallback, useEffect, useState} from "react";
import classes from './mainPage.module.css'
import {TASK_TEST_LIST} from "../constans";


const MainPage = (props) => {

    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState(TASK_TEST_LIST)

    useEffect(() => {

    }, [tasks])

    const handleChangeControlled = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleClickControlled = useCallback(() => {
        const currentTasks = tasks
        currentTasks.push({
            id: currentTasks.length + 1,
            title: value,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            deadline: new Date(),
        })
        setTasks(currentTasks)
    }, [tasks, setTasks, value])

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