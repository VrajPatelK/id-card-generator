import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import toast, { Toaster } from "react-hot-toast";

import CardLayout from "../../layouts/CardLayout";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import DownloadButton from "../DownloadButton";

import image from "../../assets/image.png";
import barcode from "../../assets/barcode.png";
import Heading from "../Heading";

const Card = (props) => {
  //
  const [loader, setLoader] = useState(false);

  //
  function downloadHandler() {
    const IDCARD = document.querySelector(".id-card");

    setLoader(true);
    //
    html2canvas(IDCARD).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("l", "mm", "a4");

      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();

      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

      setTimeout(() => {
        setLoader(false);
        doc.save("id-card.pdf");
        toast.success("Downloaded !");
      }, 1000);
    });
  }

  //
  return (
    <div className={"grid " + props.className}>
      <Toaster />
      <div className="w-fit id-card">
        <CardLayout
          className={
            "flex flex-col gap-y-4 p-5 border bg-white w-fit " + props.className
          }
        >
          <CardHeader>
            <div className="flex gap-3">
              <div className="w-1/3 h-fit my-auto mx-auto p-1">
                <img src={image} alt="image" className="rounded-lg" />
              </div>
              <div className="headdings text-center">
                <Heading className="text p-1 text-blue-700 capitalize font-medium">
                  {props?.department || "Faculty Of Techonolgy"}
                </Heading>
                <Heading className="text-xl text-orange-500 font-bold uppercase tracking-wider">
                  Dharmsinh Desai University
                </Heading>
                <div className="text-md w-10/12 mx-auto text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit quo animi molestias sit magnam esse.
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex gap-3">
              <div className="w-1/3 h-fit my-auto mx-auto p-1">
                <img src={image} alt="image" className="rounded-lg shadow-md" />
              </div>
              <div className="text-center w-2/3 grid border p-3 rounded-md bg-slate-50">
                <Heading className="capitalize text-left font-semibold text-blue-700 tracking-wide text-lg">
                  {props.name || "Patel Vraj Kumar Kamleshkumar"}
                </Heading>
                <Heading className="uppercase text-left font-semibold tracking-wider">
                  {props.degree || "b.tech"}-
                  {props.branch || "informtion technology"}
                </Heading>
                <Heading className="capitalize text-left">
                  <b>Date Of Issue : </b>
                  {props.date || "dd-mm-yyyy"}
                </Heading>
              </div>
            </div>
          </CardBody>
          <CardFooter className="grid text-center">
            <div>
              <img src={barcode} alt="image" className="h-10 mx-auto" />
            </div>
            <div className="font-bold">{props.id || "YYBBUOSXXX"}</div>
          </CardFooter>
        </CardLayout>
      </div>

      <DownloadButton
        className="mx-auto"
        onDownload={downloadHandler}
        disabled={loader}
      />
    </div>
  );
};

export default Card;
