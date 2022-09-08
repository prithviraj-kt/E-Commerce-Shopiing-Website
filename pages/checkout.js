import React, { useRef } from "react";
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
function Checkout({ cart, subTotal, clearCart, addToCart, removeFromCart }) {
  const ref = useRef();

  console.log(cart);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                1. Address
              </h1>
              {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p> */}
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {/* <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              2. Checkout
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Object.keys(cart).length === 0 && (
              <div>
                <p className="color-red-500">Your cart is empty</p>
              </div>
            )}
            {/* {Object.keys(cart).map((k) => {
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
            })} */}

            {Object.keys(cart).map((k) => {
              return (
                <section className=" w-[100vw] text-gray-600 body-font overflow-hidden">
                  <div className="container p-5 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="font-semibold title-font text-gray-700">
                            {cart[k].category}
                          </span>
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                            {cart[k].name} ({cart[k].size}/{cart[k].varient})
                          </h2>
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
                            className="mx-3 text-l"
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
                            className="mx-3 text-l"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}

            <div className="w-[100vw] text-center text-2xl text-bold">
              Your total is : ₹{subTotal}
            </div>

            {/* 
            
            {Object.keys(cart).map((k) => {
              return (
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      {cart[k].name} ({cart[k].size}/{cart[k].varient})
                    </h2>
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
                </div>
              );
            })} */}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Buy now
          </button>
        </div>
      </section>

      {/* <div>
        <div ref={ref} className="">
          <h2 className="font-bold text-xl">This is my shopping cart</h2>
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
            <button className="flex m-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="flex m-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Checkout;
