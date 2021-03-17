import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../../Components/ProductCard/ProductCard'
import {fetchSpecificProducts} from '../../../Redux/products/productActions'


const Products = ({fetchSpecificProducts,match:{params:{productId}}}) => {

    var [product ,setProduct] = useState({})

    useEffect(async()=>{
        //CDM
       var productData = await fetchSpecificProducts(productId)
       setProduct(productData)
    },[])

    return (
        <div>
            <h1>Products page</h1>
            {product.title && <ProductCard {...product}/>}
        </div>
    )
}

var actions = {
    fetchSpecificProducts
}

export default connect(null,actions)(Products)
