import ProductsList from "./ProductsList";
import uniqBy from "lodash/uniqBy"
import { useState, useEffect } from "react";
import axios from "axios";
const ProductsItems = () => {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState([]);
    const [dataPending, setDataPending] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                if (res.status === 200){
                    const products = res.data;
                    setProducts(res.data);
                    const newCategories = uniqBy(products, "category")
                        .map((prod,index) => {
                            return {
                                category: prod.category, 
                                key: index+1
                            };
                        });
                    setCategories([{category: "all", key: newCategories.length+1} ,...newCategories, ]);
                    setDataPending(false);
                }
                else console.log("data status not ok");
                })
            .catch(err => console.log(err));
    },[])

    return ( 
        <div className="productsItems">
            {dataPending && <div className="loading">Getting data ...</div>}
            {products && <ProductsList products={products} categories={categories} setProducts={setProducts} setCategories={setCategories}/>}
        </div>
     );
}
 
export default ProductsItems;