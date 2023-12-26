import React, { useEffect, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Heading from "../components/Heading";

import { users as userList } from "../data";
import toast, { Toaster } from "react-hot-toast";

const UsersPage = () => {
  //
  const [users, setUsers] = useState([]);

  //
  useEffect(() => {
    setUsers(userList);
  }, []);

  //
  function searchHandler(query) {
    toast.loading("searching ... ", { duration: 2000 });

    setTimeout(() => {
      toast.success("Id-Card found !");
    }, 2200);

    console.log("query : ", query);
  }

  if (users.length === 0) {
    return <div>loading....</div>;
  }

  return (
    <>
      <Toaster />
      <Heading className="text-xl border-b-2 mb-10 p-3 w-11/12 mx-auto text-blue-500 font-bold uppercase tracking-wider">
        Users
      </Heading>
      <div className="my-5 mx-auto rounded-lg flex justify-center items-center">
        <PortfolioCard users={users} onSearch={searchHandler} />
      </div>
    </>
  );
};

export default UsersPage;
