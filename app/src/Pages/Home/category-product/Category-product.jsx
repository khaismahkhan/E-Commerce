import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {categoryProducts, clearProducts} from './../../../Redux/products/productActions'
import ProductCard from './../../../Components/ProductCard/ProductCard'

const CategoryProduct = ({match:{params:{category}},categoryProducts,products,clearProducts}) => {

    useEffect(()=>{
        //CDM
        categoryProducts(category)
        return ()=>{
            clearProducts()
        }
    },[])
    return (
        <div>
            <h1>{category}-Category Product</h1>
            {products.map((product)=> <ProductCard key={product.title} {...product}/> )}
        </div>
    )
}

var actions ={
    categoryProducts,
    clearProducts
}
var mapState = (state)=>({
    products : state.products
})

export default connect(mapState,actions)(CategoryProduct)
