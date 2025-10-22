import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col max-w-md p-4 mx-auto">
      <div>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-slate-900 text-center hover:cursor-pointer ">
            BS
          </h1>
        </Link>
        <h2 className="text-xl text-slate-900 text-center my-6">
          Sign Up for a BS account
        </h2>
      </div>
      <form action="">
        <label htmlFor="" className="flex flex-col mb-2">
          <span className="text-slate-600 p-1">Username</span>
          <input
            type=""
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            requislate
          />
        </label>
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
        <label htmlFor="" className="flex flex-col mb-4">
          <span className="text-slate-600 p-1">Confirm password</span>
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
          Sign Up
        </button>
      </form>
      <p className="text-center font-bold text-slate-600">OR</p>
      <div>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Sign Up in with Google
        </button>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Sign Up with Facebook
        </button>
        <button className="border border-slate-600 text-slate-900 w-[100%] p-2 rounded-md hover:bg-slate-800 mb-4 hover:cursor-pointer hover:text-white">
          Sign Up with Apple
        </button>
      </div>
      <Link
        href={"/auth/login"}
        className="text-center text-slate-500 text-[0.8rem] hover:underline hover:cursor-pointer"
      >
        Already have an account? Log In
      </Link>
    </div>
  );
};

export default page;
