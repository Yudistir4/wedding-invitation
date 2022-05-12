import React from "react";

const Jadwal = () => {
  return (
    <div className="text-center p-10 font-sans flex flex-col items-center">
      <h5 className="text-3xl text-color1">BERGABUNGLAH</h5>
      <h5 className="text-3xl text-color1">DI MOMENT SPESIAL KAMI</h5>
      <div
        data-aos="zoom-in"
        className="max-w-lg rounded-lg bg-gray-100 flex flex-col items-center py-10 space-y-10 mt-12 p-10 drop-shadow-xl"
      >
        <div className="space-y-2">
          <h5 className="text-color1 font-bold text-3xl">Resepsi Nikah</h5>
          <p className="text-gray-400 text-xl">Sabtu, 4 Juni 2022</p>
        </div>

        <div className="w-32 bg-black h-[1px]"></div>
        <div className="space-y-2">
          <h5 className="text-xl font-bold">Pukul</h5>
          <p className="text-gray-400 text-xl">11:00 - Selesai</p>
        </div>
        <div className="space-y-2">
          <h5 className="text-xl font-bold">Lokasi</h5>
          <p className="text-gray-400 text-xl">
            jln. Tanah putih 1 Rt.04 Rw.02, Kel. Ketapang, Kec. Cipondoh, Kota
            Tangerang Prov Banten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
