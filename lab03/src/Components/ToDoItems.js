import { useState } from "react";
import ToDoForm from "./ToDoForm";
const ToDoItems = () => {
    const [todolist, setTodolist] = useState([
        {task: "clean", date: "20-10-2002", key: 1},
        {task: "clean", date: "20-10-2002", key: 2},
        {task: "clean", date: "20-10-2002", key: 3}
    ])



    const [msgs, setMsgs] = useState([]);
    
    const now_string = () => {
        const now = new Date()
        const nowyear = now.getFullYear().toString();
        const nowmonth = Number(now.getMonth()+1).toString();
        const nowday = now.getDate().toString();
        const nowDate = nowyear.concat('-',nowmonth).concat('-',nowday);
        return nowDate;
    }
    const is_today_or_later = (date,now) => {
        return new Date(date)>=new Date(now);
    }
    const [task, setTask] = useState('');
    const [date, setDate] = useState(now_string());
    const handleClick = () => {
        if (task !== ""){
            if (is_today_or_later(date,now_string())){
                 const newList = [...todolist,{task: task, date: date, key: todolist.length+1}]
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


            <ToDoForm handleClick={handleClick} setTask={setTask} setDate = {setDate} msgs = {msgs} now={date}/>
        </div>    
     );
}
 
export default ToDoItems;