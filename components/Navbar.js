import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";
const Navbar = ({
  logout,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [loginState, setLoginState] = useState(false);

  const router = useRouter();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  useEffect(() => {
    checkValidation();
  }, [router.asPath]);

  const checkValidation = () => {
    let validate = localStorage.getItem("token");
    if (validate) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  };

  const logOut = () => {
    console.log(router.asPath);
    //alert("Logout clicked")
    localStorage.removeItem("token");
    setLoginState(false);
    router.push("/login");
  };
  const ref = useRef();

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CoderShop</span>
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href={"/tshirts"}>
              <a className="mr-5 hover:text-gray-900">Tshirts</a>
            </Link>
            <Link href={"/hoodies"}>
              <a className="mr-5 hover:text-gray-900">Hoodies</a>
            </Link>
            <Link href={"/stickers"}>
              <a className="mr-5 hover:text-gray-900">Stickers</a>
            </Link>
            <Link href={"/mugs"}>
              <a className="mr-5 hover:text-gray-900">Mugs</a>
            </Link>
          </nav>
          {loginState && (
            <div className="flex cursor-pointer">
              <Link href={"/myaccount"}>
                <a className="mr-5 hover:text-gray-900">My Account</a>
              </Link>
              <Link href={"/orders"}>
                <a className="mr-5 hover:text-gray-900">Orders</a>
              </Link>

              <button onClick={logOut} className="mr-5 hover:text-gray-900">
                Logout
              </button>
            </div>
          )}
          <div className="flex cursor-pointer">
            {!loginState && (
              <Link href={"/login"}>
                {/* <MdAccountCircle /> */}
                Login
              </Link>
            )}
            <AiOutlineShoppingCart onClick={toggleCart} />
          </div>
        </div>
        <div
          ref={ref}
          className="w-75 h=[100vh] overflow-y-scroll z-40 sidecart absolute top-0 right-0 bg-blue-100 p-10 transform transition-transform translate-x-full"
        >
          <h2 className="font-bold text-xl">This is my shopping cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-2 right-2 cursor-pointer text-2xl text-blue-500"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length === 0 && (
              <div>
                <p className="color-red-500">Your cart is empty</p>
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex">
                    <div className="w-2/3 font-bold">
                      {cart[k].name} ({cart[k].size}/{cart[k].varient})
                    </div>
                    <div className="flex font-semibold items-center justify-content w-1/3">
                      <AiOutlineMinusCircle
                        onClick={() =>
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].varient
                          )
                        }
                        className="mx-3 text-5xl"
                      />{" "}
                      {cart[k].qty}
                      <AiOutlinePlusCircle
                        onClick={() =>
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].varient
                          )
                        }
                        className="mx-3 text-5xl"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex">
            <div>Total price is: {subTotal}</div>
            <Link href={"/checkout"}>
              <a>
                <button className="flex m-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Checkout
                </button>
              </a>
            </Link>
            <button
              onClick={clearCart}
              className="flex m-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Clear cart
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
