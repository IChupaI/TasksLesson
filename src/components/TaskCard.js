import React, {useRef, useState} from 'react';
import moment from "moment";
import {taskDeadlineOverdueDetector} from "../logic/taskDeadlineOverdueDetector";
import classes from "./mainPage.module.css";
import {apiGateaway} from "../API/api";
import MyModal from "./MyModal";
import {TaskState} from "./store/tasks";

const TaskCard = ({task}) => {

    const {current: isOverdue} = useRef(taskDeadlineOverdueDetector(task.deadline))

    const [value, setValue] = useState({title: '', description: ''})

    const [modal, setModal] = useState(false)

    const handleTitleChange = (e) => {
        setValue({...value, title: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        setValue({...value, description: e.target.value})
    }

    const deleteTask = async () => {
        const res = await apiGateaway.tasks.deleteTasks({id: task.id})
        if (res.status !== 201) {
            console.log('Something wrong')
            console.log(res)
            return null
        }
        console.log(res)
    }

    const editTask = async () => {
        const res = await apiGateaway.tasks.editTask({id: task.id, title: value.title, description: value.description, deadline: moment()})
        if (res.status !== 201) {
            console.log('Something wrong')
            console.log(res)
            return null
        }
        const allTasksRes = await apiGateaway.tasks.getTasks()
        TaskState.setTasks(allTasksRes.data)
    }

    return (
        <div className={classes.taskCard}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div className={isOverdue ? classes.overdue : classes.commonDeadline}>
                {moment(task.deadline).format('LLL')}
            </div>
            <button onClick={deleteTask}>X</button>
            <button onClick={() => setModal(true)}>pencil.png</button>
            <MyModal visible={modal}  setVisible={setModal}>
                <input
                    type="text"
                    placeholder="Название"
                    onChange = {handleTitleChange}
                    value={value.title}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    onChange = {handleDescriptionChange}
                    value={value.description}
                />
                <button onClick={editTask}>Добавить</button>
            </MyModal>
        </div>
    );
};

export default TaskCard;