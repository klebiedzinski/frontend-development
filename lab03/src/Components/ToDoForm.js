import FormToDoDate from "./FormToDoDate";
import FormToDoItem from "./FormToDoItem";
import FormToDoMesseges from "./FormToDoMesseges";

const ToDoForm = ({handleClick, setDate, setTask}) => {

    return ( 
        <div className="toDoForm">
            <FormToDoItem setTask={setTask} />
            <FormToDoDate setDate={setDate}/>
            <div className="button">
            <button onClick={handleClick}>OK</button>

            </div>
            <FormToDoMesseges/>
        </div>
     );
}
 
export default ToDoForm;