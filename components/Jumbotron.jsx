import React from "react";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="h-[60vh] grid grid-cols-2 bg-amber-300 w-[100%] p-5 mb-20">
      <div className="col-start-1 col-end-2 px-10 flex flex-col items-start justify-center">
        <div className="mb-10">
          <h2 className="text-7xl font-bold">Learn Theology </h2>
          <h2 className="font-light text-5xl">at your own pace</h2>
          <p className="mt-3 font-light text-lg">
            Explore deep theological concepts and biblical studies through our
            flexible online courses designed to fit your schedule and learning
            style
          </p>
        </div>
        <button className="bg-black text-white px-8 py-2 rounded-lg">
          Start Now
        </button>
      </div>
      <div className="col-start-2 col-end-3 flex items-center justify-center rounded-sm">
        {/* <Image
          src="/theology.webp"
          alt="theology image"
          width="400"
          height="400"
          className="rounded-full"
        /> */}
      </div>
    </div>
  );
};

export default Jumbotron;
