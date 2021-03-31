import React from 'react';
function Navbar({ open, handleChange }) {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen w-full bg-no-repeat bg-green-200 bg-opacity-50"
        style={{
          backgroundImage: `url("cow1.png")`,
        }}
      >
          <nav className="flex justify-between items-center  pt-10 lg:max-w-7xl md:max-w-3xl sm:max-w-2xl  mx-auto px-8 md:px-0">
            <div>
              <img
                className="h-6 w-auto md:h-8 md:w-auto lg:h-10 lg:w-auto"
                src="/logo.png"
                alt="logo"
              ></img>
            </div>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => {
                handleChange(!open);
              }}
            >
              <svg
                className="h-6 w-6 text-white shadow-md"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div className=" hidden md:block">
              <ul className="flex flex-row space-x-4 items-center">
                <li className="font-semibold text-lg text-green-400 cursor-pointer  hover:text-green-200 border-b-2 border-transparent hover:border-green-900">
                  Home
                </li>
                <li className="font-semibold text-lg text-green-400 cursor-pointer hover:text-green-200 border-b-2 border-transparent hover:border-black">
                  Features
                </li>
                <li className="font-semibold text-lg text-green-400 cursor-pointer hover:text-green-200 border-b-2 border-transparent hover:border-black">
                  Contact Us
                </li>
                <button className="flex flex-row py-2 px-2 bg-green-600 rounded-md shadow-md">
                  <span className="text-white font-semibold text-md">Download App</span>
                  <img className="h-6 w-6 ml-2" src="/play-store.png" alt="playStore-icon"></img>
                </button>
              </ul>
            </div>
          </nav>
          
        {open ? (
          <div className=" bg-transparent">
            <ul className="flex flex-col space-y-4 text-center rounded py-10  w-auto">
              <li className="py-1  rounded-md hover:bg-green-400 text-white font-semibold text-lg opacity-80">
                Home
              </li>
              <li className="py-1  rounded-md hover:bg-green-400 text-white font-semibold text-lg opacity-80">
                Features
              </li>
              <li className="py-1  rounded-md hover:bg-green-400 text-white font-semibold text-lg opacity-80">
                Contact Us
              </li>
              <button className="flex flex-row py-2 px-4 bg-green-600 rounded-md shadow-md justify-center items-center opacity-80">
                <span className="text-white font-semibold text-lg">Download App</span>
                <img className="h-6 w-6 ml-4" src="/play-store.png" alt="playStore-icon"></img>
              </button>
            </ul>
          </div>
        ) : (
          ''
        )}
        <div className="text-center mt-24 sm:mt-0 sm:text-left md:block sm:max-w-2xl md:max-w-3xl lg:max-w-7xl mx-auto md:mt-40 lg:mt-60 space-y-4">
            <h1 className="text-5xl text-black font-semibold">Cattle-Care-Web</h1>
            <p className="text-5xl text-black font-semibold">Cloudfarming</p>
            <p className="text-green-400 text-2xl font-semibold">The best platform for who</p>
            <p className="text-green-400 text-2xl font-semibold">want to start croudfarming</p>
            <button className="py-2 px-12 text-center bg-green-600 text-white">MORE</button>
          </div>
      </div>
    </>
  );
}

export default Navbar;
