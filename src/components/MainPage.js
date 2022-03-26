import React, {memo} from "react";
import classes from "./mainPage.module.css";

const MainPage = (props) => {
    return (
        <div className={classes.mainPageWrapper}>
            {props.tasks.map(task => (
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
export default memo(MainPage);