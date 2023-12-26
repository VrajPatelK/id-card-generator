import React from "react";
import Card from "../components/Card/Card";
import Heading from "../components/Heading";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const param = useParams();
  //
  return (
    <div className="">
      <Heading className="text-xl border-b-2 mb-10 p-3 w-11/12 mx-auto text-blue-500 font-bold uppercase tracking-wider">
        Profile /{" "}
        <span className="font-medium text-orange-500 text-base">
          ({param?.id})
        </span>
      </Heading>
      <div className="m-3 flex flex-col justify-center items-center">
        <Card className="w-1/2" />
      </div>
    </div>
  );
};

export default ProfilePage;
