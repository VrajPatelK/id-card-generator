import React, { useState } from "react";
//

import * as htmlToImage from "html-to-image";

import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage();
const storageRef = ref(storage, "some-child.png");

const BarcodeInput = (props) => {
  const [isUploaded, setIsUploaded] = useState(false);
  //

  //
  const uploadBarCode = async () => {
    const barcodeRef = props.barcodeRef;

    if (barcodeRef.current) {
      const dataUrl = await htmlToImage.toPng(barcodeRef.current);

      uploadString(storageRef, dataUrl, "data_url").then((snapshot) => {
        getDownloadURL(storageRef)
          .then((url) => props.onClick(url))
          .catch((error) =>
            console.log(error.message, "error getting the image url")
          );
      });
    }
  };

  //
  function uploadHandler() {
    if (!isUploaded) {
      uploadBarCode();
      setIsUploaded(true);
    } else {
      setIsUploaded(false);
      props.onClick("reset");
    }
  }

  //
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <div className="flex items-center">
        <div class="relative w-full">
          <input
            type={props.type}
            id={props.id}
            name={props.id}
            class="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange || null}
            //   disabled={props.disabled}
            readOnly={props.readOnly}
            required
          />
        </div>
        <button
          type="button"
          class={
            "p-2.5 ms-2 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none " +
            props.btnBgColor
          }
          onClick={uploadHandler}
        >
          {props.btnLabel}
        </button>
      </div>
    </>
  );
};

export default BarcodeInput;
