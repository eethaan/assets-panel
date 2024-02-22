"use client";

import React, { use, useEffect, useState, useRef } from "react";
import Imagebutton from "./Imagebutton";

// hooks
import useHover from "@/app/hooks/useHover";
import useTwoFingerSwipe from "@/app/hooks/useTwoFingerSwipe";

interface LibraryProps {
  id: string;
  title: string;
  img1: string;
  img2: string;
  img3: string;
  secondary: string;
  onClick: () => void; 
  handleLibrarySwitch: (value: string) => void;
}

const LibraryCard: React.FC<LibraryProps> = ({
  id,
  img1,
  img2,
  img3,
  title,
  secondary,
  onClick,
  handleLibrarySwitch,
}) => {

  // hovering hooks
  const [hoverDetected, handleHover, handleLeave] = useHover()


  // onClick hook to access 
  const handleClick = () => {
    onClick();
  };

  // TwoFingerSwipe hook 
  useTwoFingerSwipe((direction) => {
    if (hoverDetected && direction == "right") {
      handleLibrarySwitch(id)
      console.log("this swiped right")
    }
  });

  return (
    <>
      <div
        className=" mt-[12px] border rounded-[13px] border-[#383838] hover:bg-[#383838] cursor-pointer"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="flex p-[12px] place-content-evenly">
          <Imagebutton img={img1} state={2} hasDropdown={false} type="large" />
          <Imagebutton img={img2} state={2} hasDropdown={false} type="large" />
          <Imagebutton img={img3} state={2} hasDropdown={false} type="large" />
        </div>

        <div className="flex px-[16px] pb-[12px] place-content-between">
          <div>
            <div className="text-white text-[13px] font-normal font-['Inter'] leading-snug h-[16px]">
              {title}
            </div>
            <div className="text-white opacity-70 text-[10px] font-light font-['Inter'] leading-snug pt-[4px]">
              {secondary}
            </div>
          </div>
          <img src="/images/icon.24.chevron.right.svg" alt="no chevron" />
        </div>
      </div>
    </>
  );
};

export default LibraryCard;
