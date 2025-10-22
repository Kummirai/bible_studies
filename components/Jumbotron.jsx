import React from "react";

const Jumbotron = () => {
  return (
    <div className="h-[70vh] grid grid-cols-2 bg-red-500 w-[100%] p-5">
      <div className="col-start-1 col-end-2 px-10 flex flex-col items-start justify-center">
        <div className="mb-10">
          <h2 className="text-7xl text-white font-bold">Learn Theology </h2>
          <h2 className="font-light text-gray-200 text-5xl">at your own pace</h2>
          <p className="font-light text-gray-50 text-lg mt-5">
            Explore deep theological concepts and biblical studies through our
            flexible online courses designed to fit your schedule and learning
            style
          </p>
        </div>
        <button className="bg-white text-red-700 px-8 py-2 rounded-lg hover:bg-gray-800 hover:cursor-pointer">
          Start Now
        </button>
      </div>
      <div className="col-start-2 col-end-3 flex items-center justify-center rounded-sm"></div>
    </div>
  );
};

export default Jumbotron;
