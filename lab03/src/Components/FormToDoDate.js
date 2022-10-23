const FormToDoDate = ({setDate}) => {
    return ( 
        <div className="formToDoDate">
            <form>
                <input 
                type="date"
                placeholder="Add a task"
                onChange = {(e) => setDate(e.target.value)}
                required
                className="date"
                />
                
            </form>
        </div>
     );
}
 
export default FormToDoDate;