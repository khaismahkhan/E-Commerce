import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchSpecificProducts} from '../../../Redux/products/productActions'


const Products = ({fetchSpecificProducts,match:{params:{productId}}}) => {

    useEffect(()=>{
        //CDM
        fetchSpecificProducts(productId)
    },[])

    return (
        <div>
            <h1>Products page</h1>
        </div>
    )
}

var actions = {
    fetchSpecificProducts
}

export default connect(null,actions)(Products)
