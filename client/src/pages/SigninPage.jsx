import React from "react";
import SignIn from "../components/SignIn";
import Heading from "../components/Heading";

const SigninPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="shadow-md bg-slate-100 p-5 rounded-md h-fit w-1/3">
        <Heading className="text-center border-blue-400 text-blue-700 text-2xl p-3 font-bold">
          Sign In
        </Heading>
        <SignIn />
      </div>
    </div>
  );
};

export default SigninPage;
