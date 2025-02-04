import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";




//private route
import PrivateRoute from "./components/PrivateRoute";


//auth
import  Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Profile from "./pages/User/Profile";

import AdminRoute from "./pages/Admin/AdminRoute";

import UserList from "./pages/Admin/UserList";


import CategoryList from "./pages/Admin/CategoryList";
 
import ProductList from "./pages/Admin/ProductList";
import ProductUpdate from "./pages/Admin/ProductUpdate";
import AllProducts from "./pages/Admin/AllProducts.jsx";


import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";



import Cart from "./pages/Cart.jsx";

import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      <Route path='/login' element={<Login />} />   
      <Route path='/register' element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
       
       
       
       
       
       
       
       {/* Registered users */}
       <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
       </Route>


        {/* Admin  routes*/}
       <Route path="/admin" element={<AdminRoute />}>
          <Route path="userlist" element={<UserList />} />
          <Route path="categorylist" element={<CategoryList />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="allproductslist" element={<AllProducts />} />
          <Route path="product/update/:_id" element={<ProductUpdate />} />
     
       </Route>



    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>  
);
