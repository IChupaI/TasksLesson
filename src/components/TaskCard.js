import React, {useRef, useState} from 'react';
import moment from "moment";
import {taskDeadlineOverdueDetector} from "../logic/taskDeadlineOverdueDetector";
import classes from "./mainPage.module.css";
import MyModal from "./MyModal";


const TaskCard = ({task, deleteTask, editTask}) => {

    const {current: isOverdue} = useRef(taskDeadlineOverdueDetector(task.deadline))

    const [value, setValue] = useState({title: '', description: ''})

    const [modal, setModal] = useState(false)

    const handleTitleChange = (e) => {
        setValue({...value, title: e.target.value})
    }

    const handleDescriptionChange = (e) => {
        setValue({...value, description: e.target.value})
    }


    return (
        <div className={classes.taskCard}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div className={isOverdue ? classes.overdue : classes.commonDeadline}>
                {moment(task.deadline).format('LLL')}
            </div>
            <button onClick={() => deleteTask(task)} >X</button>
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
                <button onClick={() => editTask(task, value)}>Добавить</button>
            </MyModal>
        </div>
    );
};

export default TaskCard;