import React, { useState } from "react";
import { BarcodeScanner } from "@thewirv/react-barcode-scanner";

const BarcodeReaderA = () => {
  //
  const [data, setData] = useState("No result");

  return (
    <div>
      BarcodeReader
      <div className="w-1/2">
        <BarcodeScanner
          onSuccess={(text) => setData(text)}
          onError={(error) => {
            if (error) {
              console.error(error.message);
            }
          }}
          onLoad={() => console.log("Video feed has loaded!")}
          containerStyle={{ width: "100%" }}
        />
      </div>
      <p>{data}</p>
    </div>
  );
};

export default BarcodeReaderA;
