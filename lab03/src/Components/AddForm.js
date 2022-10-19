
import { useState } from "react";
const Form = () => {
    const [task,setTask] = useState('');
    const [date, setDate] = useState('')
    const handleSubmit = () => {
        const task = { task, date}
        // tasks.push(task)
    }
    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
            <input type="text"
            required
            value={task} />
            <button>Add task</button>
            </form>
        </div>
     );
}
 
export default Form;
