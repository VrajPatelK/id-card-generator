import React from "react";
import { useBarcode } from "@createnextapp/react-barcode";

const BarcodeGenerator = (props) => {
  //
  const { inputRef } = useBarcode({
    value: props.txt,
    options: {
      background: "#f7f7fa",
    },
  });
  return <img ref={inputRef} className="shadow-lg rounded-lg border" />;
};

export default BarcodeGenerator;
