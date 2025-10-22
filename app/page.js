"use client";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex items-center flex-col  ">
      <Hero />
      <Courses />
    </div>
  );
}
