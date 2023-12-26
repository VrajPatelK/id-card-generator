import React, { useRef, useState } from "react";
import { branches, departments, userTypes } from "../data";
import Dropdown from "./Dropdown";
import Input from "./Input";
import ImageUpload from "./ImageUpload";
import toast, { Toaster } from "react-hot-toast";
import BarcodeInput from "./BarcodeInput";
import BarcodeGenerator from "./BarcodeGenerator";
import barcode2 from "../assets/barcode-2.png";

const CreateUserForm = () => {
  //
  const [loader, setLoader] = useState(false);
  const [imageUrl, setImageUrl] = useState(undefined);
  const formRef = useRef(null);

  //
  const [txt, setTxt] = useState("");
  const [bcUrl, setBcUrl] = useState(undefined);
  const [isBcUploaded, setIsBcUploaded] = useState(false);
  const barcodeRef = useRef(null);

  const verifyBg =
    "bg-blue-700 border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:ring-blue-300";
  const resetBg =
    "bg-red-700 border-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 focus:ring-red-300";

  //
  function clickHandler(v) {
    if (v === "reset") {
      setIsBcUploaded(false);
      setBcUrl(false);
      setTxt("");
    } else {
      toast.success("barcode verified!");
      setIsBcUploaded(true);
      setBcUrl(v);
    }
  }

  //
  async function submitHandler(e) {
    //
    e.preventDefault();
    if (!isBcUploaded) {
      console.log("h1");
      toast.error("barcode not verified!");
      return;
    }
    if (!imageUrl) {
      console.log("h2");
      toast.error("image not uploaded!");
      return;
    }

    setLoader(true);

    const formData = new FormData(formRef.current);
    const student_id = formData.get("student_id");
    const branch = formData.get("branches");
    const department = formData.get("departments");
    const userType = formData.get("userTypes");

    console.log({ student_id, branch, department, userType, imageUrl, bcUrl });

    setTimeout(() => {
      setLoader(false);
      toast.success("user created !");
      formRef.current.reset();
      setTxt("");
      setBcUrl("");
      setImageUrl("");
      setIsBcUploaded(false);
    }, 2000);
  }

  //
  return (
    <form ref={formRef} className="mx-auto h-fit p-1" onSubmit={submitHandler}>
      <Toaster />

      <div className="grid grid-cols-2">
        <div className="grid grid-rows-2">
          <div className=" max-h-64 flex">
            <div className="w-10/12 m-auto">
              <ImageUpload onImageUpload={(u) => setImageUrl(u)} />
            </div>
          </div>
          <div className=" flex justify-center items-center">
            {txt && (
              <div ref={barcodeRef} className="w-64 h-fit">
                <BarcodeGenerator txt={txt} />
              </div>
            )}

            {!txt && (
              <>
                <img
                  src={barcode2}
                  className="w-72 filter drop-shadow-xl"
                  alt="barcode"
                />
              </>
            )}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-2">
            <BarcodeInput
              id="student_id"
              label="Student Id"
              type="text"
              placeholder="XXXYYYZZZZ (10 characters)"
              value={txt}
              readOnly={isBcUploaded}
              barcodeRef={barcodeRef}
              btnLabel={!isBcUploaded ? "verify" : "reset"}
              btnBgColor={!isBcUploaded ? verifyBg : resetBg}
              onClick={clickHandler}
              onChange={(e) => setTxt(e.target.value?.toLocaleUpperCase())}
            />

            <Input
              id="email"
              type="email"
              label="Student Email"
              placeholder="abc@123xxx.com"
            />
          </div>

          <Input
            id="name"
            type="text"
            label="Student Name"
            placeholder="first middle last"
          />

          <div className="grid grid-cols-3 gap-2">
            <Dropdown id="branches" items={branches} />
            <Dropdown id="departments" items={departments} />
            <Dropdown id="userTypes" items={userTypes} />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-3 text-lg"
            disabled={loader}
          >
            {!loader && (
              <svg
                className="w-4 h-4 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            )}{" "}
            Create
            {loader && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateUserForm;
