import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { RiFileCopyLine } from "react-icons/ri";
import config from "../config";

import useDialog from "../hooks/useDialog";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ModalKado = () => {
  const { handleClose } = useDialog();

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const copied = setTimeout(() => {
      if (isCopied) {
        setIsCopied(false);
      }
    }, 3000);

    return () => {
      clearTimeout(copied);
    };
  }, [isCopied]);

  const alamat = `Simprug di poris jln delima 1 rt 04 rw 04 blok f2 no 3a kelurahan poris gaga baru kecamatan batu ceper , kota tanggerang banten `;

  return (
    <div>
      <div className="p-10 flex flex-col items-center space-y-3   bg-[url('https://galipatstory.com/wp-content/uploads/2020/12/bg.jpg')]">
        <h5 className="text-yellow-800 text-4xl font-sacramento">Kirim Kado</h5>

        <p className="text-center text-gray-500">
          Bagi yang ingin memberikan kado, harap konfirmasi ke Whatsapp.
          Terimakasih
        </p>
        <p className="text-center text-gray-700 font-bold">
          Alamat Kirim Kado :
        </p>
        <p className="text-center text-gray-500 bg-yellow-50 p-1 rounded-md">
          {alamat}
        </p>
        <CopyToClipboard text={alamat} onCopy={() => setIsCopied(true)}>
          <button
            className={`${
              isCopied
                ? "hover:bg-green-600 bg-green-500"
                : "hover:bg-gray-600 bg-gray-500"
            }  transition-all hover:bg-gray-600 bg-gray-500 rounded-md sm:px-6 py-2 w-full sm:w-1/2 text-white flex justify-center items-center`}
          >
            {isCopied ? (
              "DISALIN!"
            ) : (
              <>
                <RiFileCopyLine className="mr-3 " color="white" /> SALIN ALAMAT
              </>
            )}
          </button>
        </CopyToClipboard>

        <a
          href={config.waCowo}
          className="hover:bg-gray-600 bg-gray-500 rounded-md px-6 py-2 w-full sm:w-1/2 text-white flex justify-center items-center"
        >
          <SiWhatsapp className="mr-3 " color="white" /> Whatsapp
        </a>

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

export default ModalKado;
