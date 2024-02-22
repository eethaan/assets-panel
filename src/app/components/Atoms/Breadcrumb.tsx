"use client ";

import React from "react";
import Imagebutton from "./Imagebutton";

interface BreadcumbProps {
  title: string;
  onClick: () => void;
}

const Breadcrumb: React.FC<BreadcumbProps> = ({ title, onClick }) => {

const handleClick = () =>{
    onClick();
    console.log("clicked")
}

  return (
    <>
      <div className="flex place-content-between py-[4px] ">
        <div className="flex items-center py-[4px] pr-[10px] rounded-md cursor-pointer" onClick={handleClick}>
          <img
            className="rotate-180"
            src="images/icon.24.navigate.forward.svg"
            alt="chevron"
          />
          <div className="text-xs font-Inter"> {title} </div>
        </div>

        <div className="flex py-[8px]">
          <Imagebutton
            img="icon.24.library.svg"
            state={0}
            hasDropdown={false}
            type="medium"
          />
          <Imagebutton
            img="icon.24.library.svg"
            state={0}
            hasDropdown={false}
            type="medium"
          />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
