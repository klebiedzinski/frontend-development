import FormToDoDate from "./FormToDoDate";
import FormToDoItem from "./FormToDoItem";
import FormToDoMesseges from "./FormToDoMesseges";

const ToDoForm = ({handleSubmitNewTask, setDate, setTask, msgs, now}) => ( 
        <div className="toDoForm">
            <div className="grid">
            <FormToDoItem setTask={setTask} />
            <FormToDoDate setDate={setDate} now={now}/>
            <div className="button">
            <button onClick={handleSubmitNewTask}>OK</button>
            </div>
            </div>
            <FormToDoMesseges msgs={msgs}/>
        </div>
     );

 
export default ToDoForm;