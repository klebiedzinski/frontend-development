

const FormToDoMesseges = ({msgs}) => ( 
        <div className="formToDoMesseges">
            {msgs.map(msg => {
                return (
                    <div className="msg" key={msg.key}>
                        {msg.msg}
                    </div>
                );
            })}
        </div>
     );

 
export default FormToDoMesseges;