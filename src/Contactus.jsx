import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can integrate with an API here)
    setIsSubmitted(true);
  };

  return (
    <div className="contact-us-container py-12 px-6 bg-gray-100 ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          We would love to hear from you. Whether you have a question or feedback, we're here to help!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-12">
        <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
          <FaPhone className="text-3xl text-blue-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Phone</h3>
          <p className="text-gray-600 mt-2">+8801 713 713 620</p>
        </div>
        <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
          <FaEnvelope className="text-3xl text-blue-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p className="text-gray-600 mt-2">miltonmind1@gmail.com</p>
        </div>
        <div className="info-card bg-white p-6 rounded-lg shadow-lg text-center">
          <FaMapMarkerAlt className="text-3xl text-blue-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Location</h3>
          <p className="text-gray-600 mt-2">Dhaka-1349, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="form-container bg-white p-10 rounded-lg shadow-lg">
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600">
              Thank you for reaching out!
            </h3>
            <p className="mt-4 text-lg text-gray-600">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <label htmlFor="message" className="block text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                rows="5"
                required
              />
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
