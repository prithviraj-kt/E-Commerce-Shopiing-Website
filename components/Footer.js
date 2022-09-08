import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-divnecap="round"
                stroke-divnejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>

              <div>
                <p className="ml-3 text-xl">CoderShop</p>
              </div>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Shop based on your choice
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Address
              </h2>
              <nav className="divst-none mb-10">
                <div>
                  <a className="text-gray-600 hover:text-gray-800">
                    Bhavani nagar
                  </a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">
                    Royal arch apartment
                  </a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">H.no 10</a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">
                    3rd floor, hubdiv
                  </a>
                </div>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="divst-none mb-10">
                <div>
                  <a className="text-gray-600 hover:text-gray-800">Tshirts</a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">Hoodies</a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">Shirts</a>
                </div>
                <div>
                  <a className="text-gray-600 hover:text-gray-800">Mugs</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;