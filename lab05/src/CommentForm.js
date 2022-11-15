import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
import { getRandomInt } from "./Utils.js"
const CommentForm = ({ setShouldCommentsUpdate, shouldCommentsUpdate, setNewComment}) => {
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            body: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(20, "Your name is too long")
                .required("Please fill in this field"),
            email: Yup.string()
                .email("It does not look like an email adress")
                .required("Please fill in this field"),
            
                
        }),
        onSubmit: (values) => {
            window.alert("Dodano!")
            console.log(values)
            setIsSubmitClicked(false)
            //zad5
            const postId = getRandomInt(1,10000)
            const id = getRandomInt(1,10000)
            const comment = {...values, postId: postId, id: id}
            console.log(comment)
            axios.post("https://jsonplaceholder.typicode.com/comments", comment)
                .then(res => {
                    formik.handleReset() 
                    const newComment = res.data
                    setNewComment(newComment)

                    setShouldCommentsUpdate(!shouldCommentsUpdate) //triggeruje do pobrania komentarzy
                })
                .catch(err => console.log(err))
        }
    })
    return ( 
        <div className="CommentForm">
            <form onSubmit={formik.handleSubmit}>
                <div className="input-container">
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    />
                    { isSubmitClicked && <p className="validation-info">{formik.errors.name}</p>}
                </div>
                <div className="input-container">
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                    { isSubmitClicked && <p className="validation-info">{formik.errors.email}</p>}
                </div>
                <div className="input-container">
                    <textarea 
                    name="body" 
                    type="text"
                    placeholder="Body"
                    id="body" 
                    cols="30" 
                    rows="10"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    >
                    </textarea>
                </div>
                {isSubmitClicked && <button className="clear-inputs-btn" type="button" onClick={() => {formik.handleReset(); setIsSubmitClicked(false)}}>Clear</button>}
                <button className="submit-btn" type="submit"onClick={() => setIsSubmitClicked(true)} >Submit</button>
            </form>
        </div>
     );
}
 
export default CommentForm;