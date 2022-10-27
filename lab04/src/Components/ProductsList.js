import axios from 'axios';
import {useEffect, useState} from 'react';
const _ = require("lodash")

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/')
            .then(res => {
                const products_with_id = res.data
                setProducts(products_with_id);
                const newCategories = _uniqBy(products, "category")
                console.log(newCategories)
            })
        
    },[])
    return ( 
        <div className="productsContainer">
            <div className="productsCategories">
                {products.map(product => (
                    <div className="category">
                        <h3>{product.category}</h3>
                    </div>
                ))}
            </div>
        <div className="productsList">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <img src={product.image} alt="product-img"></img>
                    <div className="productInfo">
                    <h1>{product.title}</h1>
                    <h2>{product.category}</h2>
                    <h5>{product.price}</h5>
                    </div>
                </div>
            ))}
        </div> 
        </div>
        );
}
 
export default ProductsList;