import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-[url('/bible-study.webp')] bg-cover bg-top h-[80vh] min-sm:h-[70vh] flex flex-col items-center justify-center w-[100%] p-5">
      <div className=" min-sm:px-10 flex flex-col items-start justify-center">
        <div className="mb-10">
          <h2 className="text-4xl min-sm:text-7xl text-white font-bold">Learn Theology </h2>
          <h2 className="font-light text-slate-200 text-lg min-sm:text-4xl">
            at your own pace, at no cost
          </h2>
          <p className="font-light text-slate-50 min-sm:text-lg min-sm:w-[75%] mt-5">
            Explore deep theological concepts and biblical studies through our
            flexible online courses designed to fit your schedule and learning
            style
          </p>
        </div>
        <button className="bg-white font-semibold text-slate-700 px-8 py-2 rounded-lg hover:bg-slate-200 hover:cursor-pointer">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
