import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-[url('/bible-study.webp')] bg-cover bg-top h-[70vh] flex flex-col items-center justify-center w-[100%] p-5">
      <div className=" px-10 flex flex-col items-start justify-center">
        <div className="mb-10">
          <h2 className="text-7xl text-white font-bold">Learn Theology </h2>
          <h2 className="font-light text-slate-200 text-4xl">
            at your own pace, at no cost
          </h2>
          <p className="font-light text-slate-50 text-lg w-[75%] mt-5">
            Explore deep theological concepts and biblical studies through our
            flexible online courses designed to fit your schedule and learning
            style
          </p>
        </div>
        <button className="bg-white text-slate-700 px-8 py-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer hover:text-white">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
