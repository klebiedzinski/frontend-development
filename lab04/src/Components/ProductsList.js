import { useState } from 'react';
import AddProductForm from './AddProductForm';
const ProductsList = ({setCategories,categories, products, setProducts}) => {

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [addProductClicked, setAddProductClicked] = useState(false);

    const handleCategorySelector = (category) => setSelectedCategory(category.category);
    
    return ( 
        <div className="productsContainer">

            <div className="productsCategories" >
                    <div className="categories">
                    {categories.map(category => (
                        <div className="category" key={category.key}>
                            <button onClick={() => handleCategorySelector(category)}>{category.category}</button>
                        </div>
                    ))}
                        <div className="add_button">
                            <button onClick={() => setAddProductClicked(!addProductClicked)}>Add product</button>
                        </div>
                        {addProductClicked && <AddProductForm setProducts={setProducts} products={products} categories={categories} setCategories={setCategories}/>}
                    </div>
            </div>

            <div className="productsList">
                {products.filter(product => selectedCategory==="all" ? product : product.category===selectedCategory)
                .map(product => (
                    <div className="product" key={product.id}>

                        <div className="img-outer">
                            <div className="img"><img src={product.image} alt="product-img"></img></div>
                        </div>

                        <div className="productInfo">
                            <div className="title"><p>{product.title}</p></div>
                            <div className="category"><p>{product.category}</p></div>
                            <div className="price"><p>{product.price} zł</p></div>
                        </div>

                    </div>
                ))}
            </div> 

        </div>
        );
}
 
export default ProductsList;