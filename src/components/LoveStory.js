import React from "react";

import { BsFillHeartFill } from "react-icons/bs";

const LoveStory = () => {
  return (
    <div className="flex flex-col  p-2 max-w-md m-auto">
      <h4
        data-aos="fade-up"
        className="font-sacramento text-5xl text-center text-red-500"
      >
        Love Story
      </h4>

      <div data-aos="fade-up" className=" p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3">
            <BsFillHeartFill color="red" size="10px" className="animate-ping" />
          </div>
          <h5 className="text-xl">2014</h5>
        </div>

        <p className="ml-11">
          Awal pertemuan kami di mulai pada saat bertamu di rumah saudara pada
          akhir tahun 2014, kemudian lost contack karena kesibukan
          masing-masing. Nike bekerja di luar negeri dan saya (Aji) berangkat
          pendidikan kepolisian ke lampung
        </p>
      </div>

      <div data-aos="fade-up" className=" p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3">
            <BsFillHeartFill color="red" size="10px" className="animate-ping" />
          </div>
          <h5 className="text-xl">2020</h5>
        </div>

        <p className="ml-11">
          Dan pada tahun ini kami dipertemukan kembali di bandara Soekarno Hatta
          saat kepulangan Nike ke Indonesia. Setelah itu kami melanjutkan
          komunikasi untuk pendekatan dan memutuskan untuk lebih mengenal satu
          sama lain
        </p>
      </div>

      <div data-aos="fade-up" className=" p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3">
            <BsFillHeartFill color="red" size="10px" className="animate-ping" />
          </div>
          <h5 className="text-xl">2021</h5>
        </div>

        <p className="ml-11">
          Di tahun ini adalah salah satu moment yang kami rencanakan akhirnya
          terwujud. Saya Aji untuk melamar Nike dengan langsung menyatakan nniat
          baik dan keinginan menuju yang lebih serius kepada Ayah & Ibu Nike,
          lalu membawa keluarga besar untuk turut menjadi saksi lamaran kami
        </p>
      </div>

      <div data-aos="fade-up" className=" p-3">
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full mr-3">
            <BsFillHeartFill color="red" size="10px" className="animate-ping" />
          </div>
          <h5 className="text-xl">2022</h5>
        </div>

        <p className="ml-11">
          Di tahun ini moment yang sangat special bagi kami dan moment
          kebahagiaan kami bersama yang akan menyempurnakan separuh agama dengan
          ridho Allah untuk membangun keluarga kecil. Semoga Allah SWT memberi
          keberkahan untuk pernikahan kami
        </p>
      </div>
    </div>
  );
};

export default LoveStory;
