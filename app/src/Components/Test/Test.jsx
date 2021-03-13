import React, { useState } from "react";
import { connect } from "react-redux";
import {setProducts} from './../../Redux/products/productActions'


const Test = ({setProducts}) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [descryption, setDescryption] = useState("");
  var [quantity, setQuantity] = useState("");
  var [coverPhoto, setCoverPhoto] = useState(null)

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var productObj = {
      category,
      title,
      cost,
      descryption,
      quantity,
      coverPhoto,
    };
    setProducts(productObj);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          placeholder="category"
        />
        <br />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <input
          onChange={(e) => setCost(e.target.value)}
          value={cost}
          type="text"
          placeholder="cost"
        />
        <br />
        <textarea
          onChange={(e) => setDescryption(e.target.value)}
          value={descryption}
          cols="30"
          rows="10"
          placeholder="descryption"
        >
          
        </textarea>
        <br />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type="text"
          placeholder="quantity"
        /> <br/>
        <input onChange={(e)=> setCoverPhoto(e.target.files[0])} type="file" placeholder="cover photo"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


var actions ={
    setProducts
}

export default connect(null,actions)(Test);
