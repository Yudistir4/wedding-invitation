import React, { useState } from "react";
import img from "../assets/cici (6).jpg";
import useQuery from "../hooks/useQuery";

const Cover = ({ setSlide, slide }) => {
  const query = useQuery();
  const to = query.get("to") || "";

  console.log(to);

  return (
    <div
      //  style={{ backgroundImage: "url(/img/cover.jpg)" }}
      className={`${
        slide && "-translate-y-full"
      }  h-[100vh] w-full bg-cover fixed z-30 transition-all duration-300 `}
    >
      <img src={img} className="object-cover absolute h-full w-full" alt="" />
      <div className="space-y-5 flex flex-col font-sans items-center w-full h-full justify-center absolute z-30 bg-black bg-opacity-50 text-white">
        <h1 className="font-sacramento text-5xl">Aji & Nike</h1>
        <p>Undangan special untuk :</p>
        <h5 className="font-bold text-2xl">{to}</h5>
        <button
          onClick={() => setSlide(true)}
          className=" rounded-md px-5 py-2 border-white border-solid border-[1px]"
        >
          OPEN INVITATION
        </button>
      </div>
    </div>
  );
};

export default Cover;
