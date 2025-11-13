"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setSuccess(data.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Signup error:", error);
    }
  };

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
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}
        <label htmlFor="username" className="flex flex-col mb-2">
          <span className="text-slate-600 p-1">Username</span>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col mb-2">
          <span className="text-slate-600 p-1">Email</span>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col mb-4">
          <span className="text-slate-600 p-1">Password</span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            required
          />
        </label>
        <label htmlFor="confirmPassword" className="flex flex-col mb-4">
          <span className="text-slate-600 p-1">Confirm password</span>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 text-s text-slate-600 rounded-md border border-slate-300 bg-slate-100 outline-slate-400"
            required
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

export default Page;

