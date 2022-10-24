const FormToDoItem = ({setTask}) => {
    return ( 
        <div className="formToDoItem">
            <form>
                <input
                type="text"
                placeholder="Add a task"
                required
                onChange = {(e) => setTask(e.target.value)}
                className = "item"
                />
                
            </form>
        </div>
     );
}
 
export default FormToDoItem;