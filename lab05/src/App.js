import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [newCommentFromForm, setNewCommentFromForm] = useState(null)
  const [shouldCommentsUpdate, setShouldCommentsUpdate] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        if (res.statusText==="OK") { 
          setComments(res.data); 
          if (newCommentFromForm){
            const newComments = [newCommentFromForm, ...comments]
            setComments(newComments)
            setNewCommentFromForm(null)
          }
        }
        else console.log("data status no ok")
      })
      .catch(err => console.log(err))
  },[shouldCommentsUpdate])

  return (
    <div className="App">
      <CommentForm 
        setShouldCommentsUpdate={setShouldCommentsUpdate} 
        shouldCommentsUpdate={shouldCommentsUpdate} 
        newComment={newCommentFromForm} 
        setNewComment={setNewCommentFromForm}
      />
      {comments.length && <CommentsList comments={comments} />}
    </div>
  );
}

export default App;

