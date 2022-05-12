import React from "react";
import map from "../assets/map.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FcMoneyTransfer } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";
const Lokasi = () => {
  return (
    <div className="flex flex-col items-center font-sans">
      <img
        data-aos="zoom-in-up"
        className="max-w-lg   w-[80%]   m-auto drop-shadow-2xl"
        src={map}
      />
      <a
        data-aos="zoom-in-up"
        href="https://www.google.com/maps/place/6%C2%B010'48.9%22S+106%C2%B042'04.5%22E/@-6.1801775,106.7014534,19z/data=!4m5!3m4!1s0x0:0x7089b7f496129583!8m2!3d-6.1802602!4d106.7012482?hl=id"
        className="w-[80%] max-w-sm hover:bg-green-700 flex justify-center items-center py-3 px-8 font-bold   bg-green-600 mt-10 rounded-xl text-white text-xl"
      >
        <SiGooglemaps color="white" className="mr-3" size={"1.5rem"} />
        LIHAT LOKASI
      </a>
    </div>
  );
};

export default Lokasi;
