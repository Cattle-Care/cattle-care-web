import React from 'react';

function BestFarmer() {
  return (
    <div>
      <div className=" mt-16 flex flex-col justify-center items-center max-w-sm space-y-8 mx-auto md:flex-row md:justify-between md:items-center md:max-w-2xl md:mx-auto md:space-x-8 lg:max-w-4xl lg:mx-auto lg:flex lg:justify-between lg:items-center xl:max-w-6xl xl:mx-auto 2xl:max-w-7xl 2xl:mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-4xl py-8 font-bold">The Best Farmer</h2>
          <p className="text-gray-400 leading-loose">
            Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
            customize, adapts to any design, and the build size is tiny.
          </p>
        </div>
        <div className="">
          <img className="w-full h-full" src="/bestFarmer.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default BestFarmer;
