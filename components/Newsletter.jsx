import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[60vh] flex justify-center items-center w-[100%] mb-10">
      <div className="border-2 border-slate-300 p-10 h-[60%] w-[80%] flex flex-col items-center justify-between rounded-3xl">
        <h2 className="text-3xl font-semibold text-slate-900">
          Subscribe to our Newsletter
        </h2>
        <input
          type="text"
          className="border border-slate-300 py-2 px-3 rounded-lg w-[80%] outline-slate-300"
          placeholder="Enter your email"
        />
        <button className="bg-slate-900 px-10 py-2 rounded-lg w-[fit-content] text-white hover:bg-transparent hover:text-slate-900 border border-slate-900 hover:cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
