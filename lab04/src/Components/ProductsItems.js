import ProductsList from "./ProductsList";
import uniqBy from "lodash/uniqBy"
import { useState, useEffect } from "react";
import axios from "axios";
import AddProductForm from "./AddProductForm";
const ProductsItems = () => {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState([])
    const [dataPending, setDataPending] = useState(true)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                if (res.status === 200){
                    const products = res.data
                    setProducts(products);

                    const newCategories = uniqBy(products, "category")
                        .map((prod,index) => {
                            return {
                                category: prod.category, 
                                key: index+1
                            }
                        })
                    setCategories([{category: "all", key: newCategories.length+1},...newCategories, ]);
                    setDataPending(false)
                }
                else console.log("data status not ok")
                })
            .catch( (err) => console.log("invalid url raczej"))
    },[])

    return ( 
        <div className="productsItems">
            {dataPending && <div>Getting some data ...</div>}
            {products && <ProductsList products={products} categories={categories}/>}
        </div>
     );
}
 
export default ProductsItems;