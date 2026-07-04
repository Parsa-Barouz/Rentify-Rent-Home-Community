import React from "react";
import Select from "react-select";
import { cities } from "../Data";
import { Contracttype } from "../Data";
import { propertyTypes } from "../Data";

const selectStyles = {
  container: (base) => ({
    ...base,
    width: "100%",
  }),

  control: (base) => ({
    ...base,
    minHeight: 90,
    height: 90,
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
  }),

  valueContainer: (base) => ({
    ...base,
    height: 90,
    padding: "0 16px",
  }),

  indicatorsContainer: (base) => ({
    ...base,
    height: 90,
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};

export default function Selector() {
  return (


    <div className="w-[40%] h-[90px] mx-auto mt-10 bg-white rounded-full flex overflow-hidden">
      <button className="px-12 bg-[#0D6EFD] text-white font-bold hover:bg-blue-700 transition cursor-pointer flex items-center gap-2">
        <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  fillRule="evenodd" clipRule="evenodd"  d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="white"/>
          <path   fillRule="evenodd"   clipRule="evenodd"   d="M13.5 10C13.5 8.067 11.933 6.5 10 6.5V4.5C13.0376 4.5 15.5 6.96243 15.5 10H13.5Z"   fill="white" />
          <path  fillRule="evenodd"  clipRule="evenodd"  d="M15.7072 14.293L21.7072 20.293L20.293 21.7072L14.293 15.7072L15.7072 14.293Z"  fill="white"  />
        </svg>

        <span>جستجو</span>
      </button>



      <div className="flex-1">
        <Select
          styles={selectStyles}
          options={Contracttype}
          placeholder="نوع قرارداد"
          menuPortalTarget={document.body}
          menuPosition="fixed"
           />
      </div>


      <div className="flex-1">
        <Select
          styles={selectStyles}
          options={propertyTypes}
          placeholder="نوع ملک"
          menuPortalTarget={document.body}
          menuPosition="fixed"
        />
      </div>
      <div className="flex-1">
        <Select
          styles={selectStyles}
          options={cities}
          placeholder="موقعیت مکانی"
          menuPortalTarget={document.body}
          menuPosition="fixed"
        />
      </div>

    </div>
  );
}

