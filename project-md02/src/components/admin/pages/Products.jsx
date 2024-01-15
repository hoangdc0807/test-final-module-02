import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pagination from 'react-bootstrap/Pagination';

function Products() {
  const [goods, setGoods] = useState([]);
  const [searchInput, setSearchInput] = useState ("");
  const [sortType, setSortType] = useState ("asc");
  const [sortTitle, setSortTitle] = useState("");
  const handleSort = (title) => {
    setSortTitle(sortTitle === "asc" ? "desc" : "asc");
  }
  const [curPage, setCurPage] = useState(1);
  const [limitItem, setLimitItem] = useState(5);
  const [totalItem, setTotalItem] = useState(0);
  const loadGoods = async () => {
    let url = `http://localhost:8000/products`;
    if (searchInput) {
      url += `?q=${searchInput}&_page=${curPage}&_limit=${limitItem}`;
    } else if (sortTitle) {
      if (sortType === "desc") {
        url += `?_sort=${sortTitle}&_order=desc&_page=${curPage}&_limit=${limitItem}`;
      } else {
        url += `?_sort=${sortTitle}&_order=asc&_page=${curPage}&_limit=${limitItem}`;
      }
    } else {
      url += `?_page=${curPage}&_limit=${limitItem}`;
    }
    const result = await axios.get(url);
    const countRes = result.headers["x-total-count"];
    const pageItem = Math.ceil(countRes / limitItem);
    setTotalItem(pageItem);
    setGoods(result.data);
  };
  let paginationItem = [];
  for (let i = 1; i <= totalItem; i++) {
    paginationItem.push(
      <Pagination.Item 
      key={i} 
      onClick={() => setCurPage(i)} 
      active={i === curPage}
      >
        {i}
      </Pagination.Item>
    )
  }
  const handleDeleteGoods = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    loadGoods();
  };
  useEffect(() => {
    loadGoods();
  }, [searchInput, sortTitle, sortType, curPage]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Products</h3>

      <div
        style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#faf8f8",
        }}
      >
        <Link to={"/add-products"}>
        <button type='button' className='btn btn-outline-success'>
        AddItem
        </button>
        </Link>

      <form className='d-flex' role='search'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className='btn btn-outline-success' type='submit'>
        Search
        </button>
      </form>
      </div>
      <table className='table table-striped text-center mt-5'>
        <thead className='table-info'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount (%)</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail</th>
            <th>Images</th>
          </tr>
        </thead>

        <tbody>
          {goods.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.title}</td>
              <td>{element.description}</td>
              <td>{element.price}</td>
              <td>{element.discount}</td>
              <td>
                <Button variant='primary' onClick={handleShow}>
                  Show
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you are reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Link to={`/edit-products/${element.id}`}>
                  <button type='button' className='btn btn-outline-warning'>
                    Edit
                  </button>
                </Link>

                <button
                  type='button'
                  className='btn btn-outline-danger'
                  onClick={() => handleDeleteGoods(element.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        <Pagination.Prev 
          onClick={() => setCurPage(curPage - 1)} 
          disabled = {curPage === 1}
        />
          {paginationItem}
        <Pagination.Next 
          onClick={() => setCurPage(curPage + 1)} 
          disabled = {curPage === totalItem}
        />
      </Pagination>
    </div>
  )
}
export default Products