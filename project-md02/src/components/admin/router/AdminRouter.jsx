import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Customer from "../pages/Customer";

function AdminRouter() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/manager-product' element={<Products />}></Route>
      <Route path='/manager-order' element={<Orders />}></Route>
      <Route path='/manager-customers' element={<Customer />}></Route>
    </Routes>
  );
}

export default AdminRouter;
