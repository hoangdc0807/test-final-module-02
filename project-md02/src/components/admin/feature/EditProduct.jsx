import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const param = useParams();
  const { id } = param;
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
  });
  const loadProduct = async () => {
    await axios
      .get(`http://localhost:8000/users/${id}`)
      .then((data) => setFormInput(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProduct();
  }, []);
  const { title, description, price, stock } = formInput;
  const handleChangeInput = (e) => {
    setFormInput({ ...formInput, [e.target.title]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/products/${id}`, formInput);
    navigate("/");
  };
  return (
    <div>
      <div className='w-70 p-5 shadow mx-auto'>
        <button onClick={() => navigate(-1)}>Back</button>
        <h3>Edit Product</h3>
        <form onSubmit={handleSubmit}>
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
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct