
const ToDoList = ({tasks}) => {

    return ( 
    <div className="toDoList">
        {tasks.map((task) => {
           return (
             <div className="task">
                <div className="text">
                    {task.task}
                </div>
                <div className="date">
                    {task.date}
                </div>
             </div> 
             )
        })}
    </div> 

    );
}
 
export default ToDoList;