import FormToDoDate from "./FormToDoDate";
import FormToDoItem from "./FormToDoItem";
import FormToDoMesseges from "./FormToDoMesseges";

const ToDoForm = ({handleClick, setDate, setTask, msgs, now}) => {

    return ( 
        <div className="toDoForm">
            <div className="grid">
            <FormToDoItem setTask={setTask} />
            <FormToDoDate setDate={setDate} now={now}/>
            <div className="button">
            <button onClick={handleClick}>OK</button>
            </div>
            </div>
            <FormToDoMesseges msgs={msgs}/>
        </div>
     );
}
 
export default ToDoForm;