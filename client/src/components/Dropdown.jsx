import React from "react";

const Dropdown = (props) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
      >
        Select {props.id}
      </label>
      <select
        id={props.id}
        name={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize outline-none"
        required
      >
        <option value={""} className="capitalize">
          ---Select---
        </option>
        {props?.items.map((item) => {
          return (
            <option value={item.value} key={item.key} className="capitalize">
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
