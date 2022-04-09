import React, {useRef} from 'react';
import moment from "moment";
import {taskDeadlineOverdueDetector} from "../logic/taskDeadlineOverdueDetector";
import classes from "./mainPage.module.css";

const TaskCard = ({task}) => {

    const {current: isOverdue} = useRef(taskDeadlineOverdueDetector(task.deadline))

    return (
        <div className={classes.taskCard}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div className={isOverdue ? classes.overdue : classes.commonDeadline}>
                {moment(task.deadline).format('LLL')}
            </div>
        </div>
    );
};

export default TaskCard;