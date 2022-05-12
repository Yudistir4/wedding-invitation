import React, { useEffect } from "react";
import image from "../assets/removebgcici (4).png";

const TentangKami = () => {
  return (
    <div className="mt-10 text-center flex flex-col justify-center items-center space-y-10 font-sans p-5">
      <h5
        data-aos="fade-up"
        className="text-6xl font-sacramento text-color1 mt-20 sm:mt-32"
      >
        Tentang Kami
      </h5>
      <img src={image} className="w-[80%] object-cover max-w-lg" alt="" />
      <p className="text-2xl font-sans text-gray-500 max-w-lg">
        Maha suci Allah SWT yang menciptakan makhluk-Nya berpasang - pasangan
      </p>
      <div
        data-aos="slide-left"
        className="flex flex-col justify-center items-center"
      >
        <p className="text-6xl text-color1 font-euphoria font-bold">
          Briptu Aji Susanto
        </p>
        <div className="max-w-[70%] space-y-3 text-gray-500">
          <p className="text-xl font-bold">Putra dari</p>
          <p className="text-xl">Bapak Aiptu Budi Marwanto (Alm)</p>
          <p className="text-xl">& Ibu Sumiyati</p>
        </div>
      </div>

      <p className="text-xl font-bold my-5 text-gray-500">dengan</p>

      <div
        data-aos="slide-right"
        className="flex flex-col justify-center items-center"
      >
        <p className="text-6xl text-color1 font-euphoria font-bold">
          Nike Indrawati
        </p>
        <div className="max-w-[70%] space-y-3 text-gray-500">
          <p className="text-xl font-bold">Putri dari</p>
          <p className="text-xl">Bapak Iwan Lesmana</p>
          <p className="text-xl">& Ibu Dianah Haerani</p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
