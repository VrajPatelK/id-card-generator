import React from "react";
import Heading from "../components/Heading";
import CreateUserForm from "../components/CreateUserForm";

const CreateUserPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="shadow-md bg-slate-100 p-5 rounded-md h-fit w-10/12">
        <Heading className="text-center border-blue-400 text-blue-700 text-2xl p-3 font-bold">
          Create User
        </Heading>
        <CreateUserForm />
      </div>
    </div>
  );
};

export default CreateUserPage;
