import { useState } from "react";
import ToDoForm from "./ToDoForm";
import bin from "../Images/rubbish-bin.svg"
import check from "../Images/check.svg"
import { now_string, is_today_or_later } from "../Utilities/time";

const ToDoItems = () => {
    const [todolist, setTodolist] = useState([])
    const [msgs, setMsgs] = useState([]);
    const [task, setTask] = useState('');
    const [date, setDate] = useState(now_string());
    const handleSubmitNewTask = () => {
        if (task !== ""){
            if (is_today_or_later(date,now_string())){
                 const newList = [...todolist,{task: task, date: date,checked: false, key: todolist.length+1}]
                 setTodolist(newList)
                 setMsgs([])
            }
            else{
                const newmsgs = [...msgs,{msg: "Please plan your future :)", key: msgs.length+1}];
                setMsgs(newmsgs);
            }
        }
        else{
            const newmsgs = [...msgs,{msg: "You cannot leave task field empty", key: msgs.length+1}];
            setMsgs(newmsgs);
        }
    }

    const handleDelete = (key) => {
        setTodolist(todolist.filter(todo => todo.key !== key))
    }
    
    const handleChecked = (key) => {
        const newtodolist = todolist.map(todo => (todo.key === key) ? {task: todo.task,date: todo.date,checked: !todo.checked,key: todo.key} : todo)
            .sort(el => el.checked)
        setTodolist(newtodolist);
    }
    
    
    return ( 
        <div className="container">
            <ToDoForm handleSubmitNewTask={handleSubmitNewTask} setTask={setTask} setDate = {setDate} msgs = {msgs} now={date}/>
            <div className="tasksList">
                {todolist.map(todo => (
                    <div className={todo.checked ? "checked_task" : "unchecked_task"}  key={todo.key}>
                        <div className="task_content">
                        <h2>{todo.task}</h2>
                        <p>{todo.date}</p>
                        </div>
                    <div className="btns">
                    <button onClick={() => handleChecked(todo.key)}> <img src={check} alt="check" /> </button>
                    <button onClick={() => handleDelete(todo.key)}> <img src={bin} alt = "bin"/> </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>    
     );
}
 
export default ToDoItems;