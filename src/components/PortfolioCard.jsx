import React from "react";
import SearchBar from "./SearchBar";
import image from "../assets/image.png";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const PortfolioCard = (props) => {
  return (
    <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <SearchBar onSearch={(q) => props.onSearch(q)} />
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700 grid gap-y-4"
        >
          {/* /profile/${user.id} */}
          {props?.users.map((user, i) => {
            return (
              <Link to={`/profile/${user.id}`} key={i}>
                <li className="py-3 sm:py-4 shadow-md px-5 rounded-lg bg-slate-50">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={image}
                        alt="user"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4 rounded-md bg-slate-50">
                      <div className="text-center grid gap-y-1 p-3">
                        <Heading className="capitalize text-left font-semibold text-blue-500 tracking-wide">
                          {user?.name || "Patel Vraj Kumar Kamleshkumar"}
                        </Heading>
                        <Heading className="uppercase text-left font-semibold tracking-wider text-gray-500 text-xs">
                          {user?.degree?.value || "b.tech"}-
                          {user?.branch?.value || "informtion technology"}
                        </Heading>
                      </div>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
