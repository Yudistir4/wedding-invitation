import React from "react";
import himbauan1 from "../assets/himbauan1.png";
import himbauan2 from "../assets/himbauan2.png";
import himbauan3 from "../assets/himbauan3.png";
import himbauan4 from "../assets/himbauan4.png";

const Himbauan = () => {
  return (
    <div className="text-center p-10 font-raleway max-w-lg m-auto">
      <h4 className="text-lg">
        Jangan ragu untuk datang, kami sudah berkoordinasi dengan semua pihak
        terkait pencegahan penularan COVID-19. Acara kami akan mengikuti segala
        prosedur protokol kesehatan untuk mencegah penularan COVID-19. So, don't
        be panic, we look forward to seeing you there!
      </h4>
      <div className="grid grid-cols-2 gap-10 mt-24">
        <div
          data-aos="zoom-in-up"
          className="aspect-square flex flex-col items-center justify-center"
        >
          <img className="w-[70%] mb-3" src={himbauan1} alt="" />
          <h5 className="text-lg">Tamu undangan wajib menggunakan masker.</h5>
        </div>
        <div
          data-aos="zoom-in-up"
          className="aspect-square flex flex-col items-center justify-center"
        >
          <img className="w-[70%] mb-3" src={himbauan2} alt="" />
          <h5 className="text-lg">Suhu tubuh normal (dibawah 37,5°C)</h5>
        </div>
        <div
          data-aos="zoom-in-up"
          className="aspect-square flex flex-col items-center justify-center"
        >
          <img className="w-[70%] mb-3" src={himbauan3} alt="" />
          <h5 className="text-lg">Tamu undangan wajib menggunakan masker.</h5>
        </div>
        <div
          data-aos="zoom-in-up"
          className="aspect-square flex flex-col items-center justify-center"
        >
          <img className="w-[70%] mb-3" src={himbauan4} alt="" />
          <h5 className="text-lg">Tamu undangan wajib menggunakan masker.</h5>
        </div>
      </div>
      <p className="text-lg mt-16">
        Bagi para tamu undangan diharapkan mengikuti protokol pencegahan
        COVID-19.
      </p>
    </div>
  );
};

export default Himbauan;
