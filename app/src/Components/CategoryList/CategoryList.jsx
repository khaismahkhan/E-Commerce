import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { categorizedProducts } from '../../Utility/product'
import CategoryListItem from '../CategoryListItem/CategoryListItem'
import {fetchProducts} from "./../../Redux/products/productActions"


const CategoryList = ({fetchProducts,category}) => {
    useEffect(()=>{
        //CDM
        fetchProducts()
    },[])
    return (
        <div>
            <h1>Category List</h1>
            {category.map((cat)=> <CategoryListItem key={cat.category} {... cat}/>)}
        </div>
    )
}

var action ={
    fetchProducts,
}

var mapState=(state) => ({
    category: categorizedProducts(state.products)
})

export default connect(mapState,action)(CategoryList)
