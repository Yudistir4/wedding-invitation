import React, { useEffect, useState } from "react";
import qr from "../assets/qr.jpeg";
import { RiFileCopyLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import useDialog from "../hooks/useDialog";
import { CopyToClipboard } from "react-copy-to-clipboard";
import config from "../config";

const ModalAmpau = () => {
  const { handleClose } = useDialog();
  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);

  useEffect(() => {
    const copied = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
      if (isCopied2) {
        setIsCopied2(false);
      }
    }, 3000);

    return () => {
      clearTimeout(copied);
    };
  }, [isCopied, isCopied2]);

  return (
    <div>
      <div className="p-10 flex flex-col items-center space-y-3   bg-[url('https://galipatstory.com/wp-content/uploads/2020/12/bg.jpg')]">
        <h5 className="text-yellow-800 text-4xl font-sacramento">
          Kirim Angpau
        </h5>
        <p className="text-center text-gray-500">
          Bagi yang ingin memberikan angpau sebagai hadiah untuk pernikahan
          kami, silakan transfer ke rekening ya 😊
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="flex flex-col items-center space-y-3 ">
            <div className="bg-yellow-50 flex flex-col items-center justify-center  p-2 rounded-xl  w-full ">
              <p>Aji Susanto (Mandiri) </p>
              <p>1550011332445 </p>
            </div>
            <img className=" w-full   rounded-md" src={qr} alt="" />
            <CopyToClipboard
              text={"1550011332445"}
              onCopy={() => setIsCopied(true)}
            >
              <button
                className={`${
                  isCopied
                    ? "hover:bg-green-600 bg-green-500"
                    : "hover:bg-gray-600 bg-gray-500"
                }  transition-all hover:bg-gray-600 bg-gray-500 rounded-md sm:px-6 py-2 w-full   text-white flex justify-center items-center`}
              >
                {isCopied ? (
                  "DISALIN!"
                ) : (
                  <>
                    <RiFileCopyLine className="mr-3 " color="white" /> SALIN NO
                    REK{" "}
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>
          <div class="flex flex-col items-center space-y-3 ">
            <div className="bg-yellow-50 flex flex-col items-center justify-center  p-2 rounded-xl  w-full ">
              <p>Nike Indrawati (BCA) </p>
              <p>5390581183 </p>
            </div>
            {/* <img
              className=" w-full   rounded-md"
              src={qr}
              alt=""
            /> */}
            <CopyToClipboard
              text={"5390581183"}
              onCopy={() => setIsCopied2(true)}
            >
              <button
                className={`${
                  isCopied2
                    ? "hover:bg-green-600 bg-green-500"
                    : "hover:bg-gray-600 bg-gray-500"
                }  transition-all hover:bg-gray-600 bg-gray-500 rounded-md sm:px-6 py-2 w-full   text-white flex justify-center items-center`}
              >
                {isCopied2 ? (
                  "DISALIN!"
                ) : (
                  <>
                    <RiFileCopyLine className="mr-3 " color="white" /> SALIN NO
                    REK{" "}
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <a
          href={config.waCowo}
          className={`hover:bg-gray-600 bg-gray-500 rounded-md px-6 py-2 w-full sm:w-1/2 text-white flex justify-center items-center`}
        >
          <SiWhatsapp className="mr-3 " color="white" /> Whatsapp
        </a>

        <p className="text-center text-gray-500">
          Untuk konfirmasi pengiriman Angpau boleh ke nomor Whatsapp mempelai.
          Terimakasih 😊🙏
        </p>
        <button
          onClick={handleClose}
          className="hover:bg-red-600 font-bold bg-red-500 rounded-md px-6 py-2 w-full sm:w-1/2 text-white flex justify-center items-center"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ModalAmpau;
