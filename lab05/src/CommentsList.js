const CommentsList = ({comments}) => {
    return ( 
        <ul className="comments-list">
            {comments.reverse().map(el => {
                return(
                    <li className="comment" key={el.id}>
                        <p className="name">Name: {el.name}</p>
                        <p className="email">Email: {el.email}</p>
                        </li>
                )
            })}
        </ul>
     );
}
 
export default CommentsList;