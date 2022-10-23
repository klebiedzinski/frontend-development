import { useState } from "react";
import ToDoForm from "./ToDoForm";
const ToDoItems = () => {
    const [todolist, setTodolist] = useState([
        {task: "clean", date: "20-10-2002", key: 1},
        {task: "clean", date: "20-10-2002", key: 2},
        {task: "clean", date: "20-10-2002", key: 3}
    ])

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const handleClick = () => {
        const newList = [...todolist,{task: task, date: date, key: todolist.length+1}]
        setTodolist(newList)
    }
    
    return ( 
        <div className="container">
            <div className="tasksList">
                {todolist.map(todo => {
                    return (
                    <div className="task" key={todo.key}>
                        <h2>{todo.task}</h2>
                        <p>{todo.date}</p>
                    </div>
                    );
                })}
            </div>


            <ToDoForm handleClick={handleClick} setTask={setTask} setDate = {setDate}/>
        </div>    
     );
}
 
export default ToDoItems;