const FormToDoDate = ({setDate, now}) => ( 
        <div className="formToDoDate">
            <form>
                <input 
                type="date"
                className="date"
                value={now}
                onChange = {(e) => setDate(e.target.value)}
                
                />
                
            </form>
        </div>
     );

 
export default FormToDoDate;