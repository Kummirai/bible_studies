import Image from "next/image";
import React from "react";

const FooterContactCard = () => {
  return (
    <div className="text-white">
      <h2 className="text-[1rem] font-semibold mb-1">Contact</h2>
      <div className="flex flex-col justify-between h-[80%]">
        <div>
          <p className="text-[0.79rem] text-slate-300">+27 78 267 7436</p>
          <p className="text-[0.79rem] text-slate-300">+27 84 013 0214</p>
          <p className="text-[0.79rem] text-slate-300">user@biblestudy.co.za</p>
        </div>
        <div className="flex items-center justify-start">
          <Image
            src={"/facebook.png"}
            width={"20"}
            height={"20"}
            alt="facebook icon"
          />
          <Image
            src={"/twitter.png"}
            width={"20"}
            height={"20"}
            alt="twitter icon"
            className="mx-4"
          />
          <Image
            src={"/instagram.png"}
            width={"20"}
            height={"20"}
            alt="instagram icon"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterContactCard;
