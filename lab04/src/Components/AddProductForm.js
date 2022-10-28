import axios from "axios"
import { useState } from "react"
const AddProductForm = () => {
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmitNewProduct = () => {
        const product = {
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            }
        axios.post('https://fakestoreapi.com/products',product)
        
    }
    return ( 
        <div className="add_form">
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    required
                    onChange = {(e) => setTitle(e.target.value)}
                    className = "item"
                />
                <input
                    type="text"
                    placeholder="price"
                    required
                    onChange = {(e) => setPrice(e.target.value)}
                    className = "item"
                />
                <input
                    type="text"
                    placeholder="description"
                    required
                    onChange = {(e) => setDescription(e.target.value)}
                    className = "item"
                />
                <input
                    type="text"
                    placeholder="image"
                    required
                    onChange = {(e) => setImage(e.target.value)}
                    className = "item"
                />
                <input
                    type="text"
                    placeholder="category"
                    required
                    onChange = {(e) => setCategory(e.target.value)}
                    className = "item"
                />

                <input type="submit" value="Submit" onClick={handleSubmitNewProduct}/>
            </form>
        </div>
     );
}
 
export default AddProductForm;