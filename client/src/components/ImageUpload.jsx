import React, { useState } from "react";
import { storage } from "../db/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const ImageUpload = (props) => {
  const [imageUrl, setImageUrl] = useState(null);

  const uploadOnFirebase = async (upload) => {
    const imageRef = ref(storage, "profile-image.png");

    uploadBytes(imageRef, upload)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setImageUrl(url);
            props.onImageUpload(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //
  function handleImageChange(e) {
    const upload = e.target.files[0];
    uploadOnFirebase(upload);
  }

  return (
    <div className="">
      {imageUrl && (
        <div className="border p-3 mx-auto w-fit rounded-lg bg-white shadow-lg">
          <img
            class="h-auto max-h-64 rounded-lg shadow-md dark:shadow-gray-800 w-40 mx-auto"
            src={imageUrl || "/docs/images/examples/image-2@2x.jpg"}
            alt="image description"
          />
        </div>
      )}

      {!imageUrl && (
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              name="dropzone-file"
              type="file"
              class="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
