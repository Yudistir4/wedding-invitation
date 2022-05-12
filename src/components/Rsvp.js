import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const Rsvp = () => {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [alamat, setAlamat] = useState("");

  console.log(selected);
  console.log(name);
  console.log(alamat);
  return (
    <div className="p-10 pt-10 text-center font-sans max-w-lg m-auto">
      <h5 className="text-xl">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai. Atas kehadiran serta doa restu, kami ucapkan terima
        kasih.
      </h5>
      <div
        data-aos="zoom-in-up"
        className="mt-10 rounded-xl drop-shadow-2xl bg-gray-200 p-5 space-y-3 flex flex-col"
      >
        <h5 className="text-4xl">RSVP</h5>
        <input
          className="rounded-lg w-full h-10 px-4"
          type="text"
          placeholder="Nama"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-lg w-full h-10 px-4"
          type="text"
          placeholder="Alamat"
          onChange={(e) => setAlamat(e.target.value)}
        />
        <p className="text-left text-xl font-bold">Konfirmasi</p>
        {/* <div> */}
        <div
          className="flex"
          onClick={() => setSelected("Iya, saya akan datang")}
        >
          <input
            className="  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className=" inline-block text-gray-800"
            htmlFor="flexRadioDefault1"
          >
            Iya, saya akan datang
          </label>
        </div>
        <div className=" flex" onClick={() => setSelected("Saya Masih Ragu")}>
          <input
            className="  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className=" inline-block text-gray-800"
            htmlFor="flexRadioDefault2"
          >
            Saya Masih Ragu
          </label>
        </div>
        <div
          className=" flex "
          onClick={() => setSelected("Maaf, Saya Tidak Bisa Datang")}
        >
          <input
            className="  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label className="  text-gray-800" htmlFor="flexRadioDefault3">
            Maaf, Saya Tidak Bisa Datang
          </label>
          {/* </div> */}
        </div>

        <a
          href={`https://api.whatsapp.com/send?phone=6281290540789&text=Halo Aji dan Nike, saya *${name}* dari *${alamat}* ingin konfirmasi kehadiran undangan pernikahan kalian bahwa *${selected}* Terimakasih.`}
          className="bg-green-600 hover:bg-green-700  rounded-lg text-white px-6 py-3 flex items-center justify-center"
        >
          <SiWhatsapp className="mr-3 " color="white" size="1.5rem" />
          Reservation via Whatsapp
        </a>
      </div>
    </div>
  );
};

export default Rsvp;
