import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { categorizedProducts } from '../../../Utility/product'
import {fetchProducts} from "./../../../Redux/products/productActions"

const Categories = ({fetchProducts, category}) => {
    console.log(category)
    useEffect(()=>{
        //CDM
        fetchProducts()
    },[])
    return (
        <div>
            <h1>Categories</h1>
        </div>
    )
}

var action ={
    fetchProducts,
}

var mapState=(state) => ({
    category: categorizedProducts(state.products)
})

export default connect(mapState,action)(Categories)
