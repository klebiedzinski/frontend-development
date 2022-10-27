import axios from 'axios';
import {useEffect, useState} from 'react';
const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/')
            .then(res => {
                const products_with_id = res.data
                setProducts(products_with_id);
                console.log(products)
            })
        
    },[])
    return ( 
        <div className="productsList">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <h3>{product.title}</h3>
                    <h5>{product.category}</h5>
                    <h5>{product.price}</h5>
                    <img src={product.image} alt="image"></img>
                </div>
            ))}
        </div> 
        );
}
 
export default ProductsList;