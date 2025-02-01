import React, { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa"; // Importing icons for social logins

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginType, setLoginType] = useState("buyer"); // State to toggle between buyer and seller login

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="./original-logo.png" alt="Logo" className="w-12 h-12" />
          <div className="text-xl font-bold">Resale Online | salesinbd.com</div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`w-full md:w-auto flex flex-wrap justify-center md:justify-center space-x-6 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"} md:block`}
        >
          <a href=".#home" className="hover:text-gray-300 transition font-bold">Home</a>
          <a href="store" className="hover:text-gray-300 transition font-bold">Store</a>
          <a href="aboutus" className="hover:text-gray-300 transition font-bold">About Us</a>
          <a href="contactus" className="hover:text-gray-300 transition font-bold">Contact Us</a>
          <a href="blogs" className="hover:text-gray-300 transition font-bold">Blogs</a>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Extra Links */}
        <div className="w-full md:w-auto flex flex-wrap justify-end md:justify-end space-x-6 mt-4 md:mt-0">
          <a href="#add-to-cart" className="hover:text-gray-300 transition flex items-center">
            <ShoppingCart className="w-8 h-8" />
          </a>
          <button onClick={toggleModal} className="hover:text-gray-300 transition font-bold">Login</button>
        </div>
      </div>

      {/* Modal for Login */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 md:w-[500px] transform transition-all duration-300 ease-in-out shadow-xl">
            {/* Login Type Toggle */}
            <div className="flex justify-between mb-6 border-b pb-4">
              <button
                onClick={() => handleLoginTypeChange("buyer")}
                className={`px-6 py-3 ${loginType === "buyer" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} rounded-t-md transition-all duration-200`}
              >
                Buyer Login
              </button>
              <button
                onClick={() => handleLoginTypeChange("seller")}
                className={`px-6 py-3 ${loginType === "seller" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} rounded-t-md transition-all duration-200`}
              >
                Seller Login
              </button>
            </div>

            {/* Login Form */}
            <form>
              <div className="mb-6">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-between space-x-4 mb-6">
                <button className="w-1/3 bg-red-500 text-white px-4 py-3 rounded-lg flex justify-center items-center hover:bg-red-600 transition duration-200">
                  <FaGoogle className="w-5 h-5 mr-2" /> Google
                </button>
                <button className="w-1/3 bg-blue-600 text-white px-4 py-3 rounded-lg flex justify-center items-center hover:bg-blue-700 transition duration-200">
                  <FaFacebook className="w-5 h-5 mr-2" /> Facebook
                </button>
                <button className="w-1/3 bg-gray-800 text-white px-4 py-3 rounded-lg flex justify-center items-center hover:bg-gray-900 transition duration-200">
                  <FaGithub className="w-5 h-5 mr-2" /> GitHub
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition duration-200">Login</button>
                <button
                  type="button"
                  className="text-red-500 ml-4 hover:text-red-600 transition duration-200"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
