import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = ({ cartItems = [] }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [showSidebar, setShowSidebar] = useState(false);

  const dispatch = useDispatch(); //this is used to send actions to the store
  const navigate = useNavigate();//this is used to navigate to different pages

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      } xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-[#000] w-[4%] hover:w-[15%] h-[100vh] fixed`}
      id="navigation-container"
    >
      <div className="flex flex-col justify-center space-y-4">
        <Link to="/" className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineHome className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">HOME</span>
        </Link>

        <Link to="/shop" className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShopping className="mr-2 mt-[3rem]" size={26} />
          <span className="hidden nav-item-name mt-[3rem]">SHOP</span>
        </Link>

        <Link to="/cart" className="relative flex">
          <div className="flex items-center transition-transform transform hover:translate-x-2">
            <AiOutlineShoppingCart className="mt-[3rem] mr-2" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">Cart</span>
          </div>

          <div className="absolute top-9">
            {cartItems.length > 0 && (
              <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </div>
        </Link>

        <Link to="/favorite" className="relative flex">
          <div className="flex items-center justify-center transition-transform transform hover:translate-x-2">
            <FaHeart className="mt-[3rem] mr-2" size={20} />
            <span className="hidden nav-item-name mt-[3rem]">Favorites</span>
          </div>
        </Link>
      </div>
      
      <div className="relative">
        <button
          onClick={logoutHandler} className="flex items-center text-gray-800 focus:outline-none">
          {userInfo ? <span className="text-white">{userInfo.username}</span> : (<></>)}
        </button>
      </div>

      <ul>
        <li>
          <Link to="/login" className="flex items-center mt-5 transition-transform transform hover:translate-x-2">
            <AiOutlineLogin className="mr-2 mt-[4px]" size={26} />
            <span className="hidden nav-item-name">LOGIN</span>
          </Link>
        </li>
        <li>
          <Link to="/register" className="flex items-center mt-5 transition-transform transform hover:translate-x-2">
            <AiOutlineUserAdd size={26} />
            <span className="hidden nav-item-name">REGISTER</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;