import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us-section py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            We are passionate about offering high-quality, pre-loved products for the modern shopper. Our platform allows you to shop sustainably while finding top-tier items at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="about-card bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Our mission is simple: to create a sustainable shopping experience where pre-loved items find a new life. We believe in reducing waste while offering quality products that make a difference.
            </p>
          </div>

          <div className="about-card bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              We aim to be the go-to marketplace for people looking for affordable and sustainable options. Our vision is to make the world a better place by promoting a circular economy with each purchase.
            </p>
          </div>

          <div className="about-card bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-lg text-gray-600">
              We handpick each product with care, ensuring the best quality and value. Our easy-to-navigate platform and customer-first approach make shopping a breeze, while our community-driven model ensures trust and transparency.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contactus"
            className="inline-block bg-purple-600 text-white text-lg py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
