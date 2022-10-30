import axios from "axios";
import { useState } from "react";
import includes  from "lodash/includes";
const AddProductForm = ({setProducts,products, setCategories, categories}) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg");
    const [category, setCategory] = useState('');

    const handleSubmitNewProduct = () => {
        const product = {
                title: title,
                price: price,
                description: description,
                image: image,
                category: category
            };

        axios.post('https://fakestoreapi.com/products',product)
                .then(data => {
                    console.log(data); 
                    if (data.status === 200){
                        setProducts([...products, data.data]) 
                        const categoriesValues = categories.map(cat => cat.category)
                        if(!includes(categoriesValues,category)) setCategories([...categories,{category: category, key:categories.lenght+1}])
                    }
                    else console.log("Error data status");
                })
                .catch(err => console.log(err));
        // image.current.value='';
        // category.current.value='';
        // description.current.value='';
        // title.current.value='';
        // price.current.value=0;
        // setTitle('');
        // setPrice('');
        // setDescription('');
        // setCategory('');
        // setImage('');

        
    }
    return ( 
        <div className="add_form">

            <form>
                <input
                    type="text"
                    placeholder="Title"
                    required
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="price"
                    required
                    onChange = {(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    required
                    onChange = {(e) => setDescription(e.target.value)}
                />
                <input
                    type="url"
                    placeholder="image"
                    required
                    value={image}
                    onChange = {(e) => setImage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="category"
                    required
                    onChange = {(e) => setCategory(e.target.value)}
                />

            </form>

            <button onClick={() => handleSubmitNewProduct()}> Submit </button> 

        </div>
     );
}
 
export default AddProductForm;