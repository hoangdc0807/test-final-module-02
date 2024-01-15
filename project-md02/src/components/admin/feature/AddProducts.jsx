import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
  });
  const { name, age, email, phone } = formInput;
  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.title]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/products", formInput);
    navigate("/");
  };
  return (
    <div>
      <div className='w-70 p-5 shadow mx-auto'>
        <button onClick={() => navigate(-1)}>Back</button>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
          <label>Title </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChangeInput}
          />
          <br />
          <label>Descriptiom: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChangeInput}
          />
          <br />
          <label>Price: </label>
          <input
            type='number'
            name='price'
            value={price}
            onChange={handleChangeInput}
          />
          <br />
          <label>Stock: </label>
          <input
            type='number'
            name='stock'
            value={stock}
            onChange={handleChangeInput}
          />
          <br />
          <button type='submit' className='btn btn-success'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;