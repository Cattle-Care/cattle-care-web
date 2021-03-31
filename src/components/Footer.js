import React from 'react';

function Footer() {
  return (
    <div>
      <div className="bg-green-600">
        <div className="flex justify-between text-center sm:text-left sm:mx-auto  flex-col items-center md:flex md:flex-row mx-auto w-full lg:mx-auto lg:max-w-7xl pt-48 pb-24 border-b-2 border-gray-20 md:max-w-4xl md:mx-auto ">
          {/* left container */}
          <div className="w-1/2 space-y-8">
            <div className="text-3xl text-white font-bold"> Contact Us</div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100">Address</h2>
              <h3 className="text-green-200 text-xl font-semibold">707 Trymore Road</h3>
              <h3 className="text-green-200 text-xl font-semibold">Mohali Punjab 848505</h3>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100">Phone</h2>
              <h3 className="text-green-200 text-xl font-semibold">+(91) 8284064781</h3>
              <h3 className="text-green-200 text-xl font-semibold">+(91) 7044578219</h3>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-100">Email</h2>
              <h3 className="text-green-200 text-xl font-semibold">hello@cattlecare.com</h3>
              <h3 className="text-green-200 text-xl font-semibold">support@cattlecare.com</h3>
            </div>
          </div>
          {/* right container */}
          <div className="flex flex-col w-1/2 space-y-8 mt-24 sm:mt-0">
            <h2 className="text-3xl text-white font-bold">Send Us Message</h2>
            <label className="text-2xl font-semibold text-gray-100">Name</label>
            <input className="bg-green-600 border-b-2 border-green-300 focus:outline-none h-8 text-lg text-gray-300"></input>
            <label className="text-2xl font-semibold text-gray-100">Email</label>
            <input className="bg-green-600 border-b-2 border-green-300 focus:outline-none h-8 text-lg text-gray-300"></input>
            <label className="text-2xl font-semibold text-gray-100">Message</label>
            <input className="bg-green-600 border-b-2 border-green-300 focus:outline-none h-8 text-lg text-gray-300"></input>
            <button className="bg-yellow-500 py-2 text-md font-semibold rounded-md shadow-2xl">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="flex justify-between text-center sm:text-left   flex-col items-center sm:flex sm:flex-row pt-16 pb-48 sm:max-w-4xl sm:mx-auto   lg:max-w-7xl lg:mx-auto space-y-8">
          <div className="space-y-4 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-100">About us</h2>
            <a href="#" className="text-green-200 text-xl font-semibold">
              How it works
            </a>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Blog
            </a>
          </div>
          <div className="space-y-4 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-100">Information</h2>
            <a href="#" className="text-green-200 text-xl font-semibold">
              FAQs
            </a>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Terms & Conditions
            </a>
          </div>
          <div className="space-y-4 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-100">Policy</h2>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Warranty Policy
            </a>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Shipping Policy
            </a>
          </div>
          <div className="space-y-4 flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-100">Connect with Us</h2>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Facebook
            </a>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Instagram
            </a>
            <a href="#" className="text-green-200 text-xl font-semibold">
              Twitter
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-md font-semibold text-gray-200 pb-24 ">
          © 2021-Cattle-care | All Right Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
