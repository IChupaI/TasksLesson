import './App.css';
import MainPage from "./components/MainPage";
import {TASK_TEST_LIST} from "./constans";
import {useEffect, useState} from "react";

function App() {
    // tasks list
    // deadline
    // assign to user
    // task info
    // is task completed
    // edit create delete tasks

    const [tasks, setTasks] = useState([])

    useEffect( () => {

        setTasks(TASK_TEST_LIST)

    }, [])


    return (
        <div className="App">
            <MainPage tasks = {tasks}/>
        </div>
    );
}

export default App;
