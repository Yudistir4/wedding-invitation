import React from "react";
import Countdown from "react-countdown";
import { FcMoneyTransfer } from "react-icons/fc";
import { HiGift } from "react-icons/hi";
import ModalAmpau from "./ModalAmpau";
import ModalKado from "./ModalKado";
import useDialog from "../hooks/useDialog";

const Render = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="grid grid-cols-4 gap-3 text-white mt-8 max-w-lg">
      <div className="rounded-xl px-10 py-3 bg-red-400 text-xl flex flex-col items-center">
        <p>{days}</p>
        <p>Hari</p>
      </div>
      <div className="rounded-xl px-10 py-3 bg-red-400 text-xl flex flex-col items-center">
        <p>{hours}</p>
        <p>Jam</p>
      </div>
      <div className="rounded-xl px-10 py-3 bg-red-400 text-xl flex flex-col items-center">
        <p>{minutes}</p>
        <p>Menit</p>
      </div>
      <div className="rounded-xl px-10 py-3 bg-red-400 text-xl flex flex-col items-center">
        <p>{seconds}</p>
        <p>Detik</p>
      </div>
    </div>
  );
};

const Time = () => {
  const { createDialog } = useDialog();

  return (
    <div className="text-center font-sans p-3 sm:p-10 flex flex-col items-center">
      <h5 className="text-3xl font-raleway">WAKTU MENUJU ACARA</h5>
      <h5 data-aos="fade-up" className="text-5xl font-sacramento text-red-500">
        Pernikahan Kami
      </h5>
      <Countdown date={new Date("jun 4, 2022 11:00:00")} renderer={Render} />

      <p className="text-xl mt-10">
        UNTUK YANG BERHALANGAN HADIR, KAMI TAMBAHKAN FITUR DIBAWAH INI
      </p>

      <div className="flex flex-col items-center">
        <button
          onClick={() => createDialog({ fullContent: <ModalAmpau /> })}
          className="w-full flex justify-center items-center py-3 px-8 bg-red-400 mt-10 rounded-xl text-white text-xl"
        >
          <FcMoneyTransfer className="mr-3 animate-bounce mt-1" size="1.5rem" />{" "}
          Angpau Digital
        </button>
        <button
          onClick={() => createDialog({ fullContent: <ModalKado /> })}
          className="w-full   flex justify-center items-center py-3 px-8 bg-red-400 mt-10 rounded-xl text-white text-xl"
        >
          <HiGift size="1.5rem" className="animate-bounce mr-3 mt-1" />
          Kirim Kado
        </button>
      </div>
      {/* <ModalAmpau /> */}
    </div>
  );
};

export default Time;
