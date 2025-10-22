import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col max-w-md p-4 mx-auto mt-10 ">
      <div>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-slate-900 text-center ">BS</h1>
        </Link>
        <h2 className="text-xl text-slate-900 text-center my-6">
          Log in into your BS account
        </h2>
      </div>
      <form action="">
        <label htmlFor="" className="flex flex-col mb-2">
          <span className="text-slate-600 p-1">Email</span>
          <input
            type="email"
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            requislate
          />
        </label>
        <label htmlFor="" className="flex flex-col mb-4">
          <span className="text-slate-600 p-1">Password</span>
          <input
            type="password"
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            requislate
          />
        </label>
        <button
          type="submit"
          className="bg-slate-900 text-white w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer"
        >
          Log In
        </button>
      </form>
      <p className="text-center font-bold text-slate-600">OR</p>
      <div>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Log in with Google
        </button>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Log in with Facebook
        </button>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Log in with Apple
        </button>
      </div>
      <Link
        href={"/auth/signup"}
        className="text-center text-slate-500 text-[0.8rem] hover:underline hover:cursor-pointer"
      >
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default page;
