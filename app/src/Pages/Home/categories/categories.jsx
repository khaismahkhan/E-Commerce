import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import CategoryList from '../../../Components/CategoryList/CategoryList'
import {clearProducts} from '../../../Redux/products/productActions'


const Categories = ({clearProducts}) => {
    useEffect(()=>{
        return ()=>{
            clearProducts()
        }
    })
    return (
        <div>
            <CategoryList/>
        </div>
    )
}

var actions ={
    clearProducts
}

export default connect(null,actions)(Categories)
