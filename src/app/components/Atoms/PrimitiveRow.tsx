"use client";

import React, {useEffect, useState} from "react";


interface PrimitiveRowProps {
  img: string;
  title: string;
  state: string;
}

const PrimitiveRow: React.FC<PrimitiveRowProps> = ({ img, title, state }) => {

const [menuOpen, setMenuOpen] = useState(true)

  const rotatedArrowState: { [key: string]: string } = {
    open: "",
    closed: "-rotate-90",
  };
  const imageSize = rotatedArrowState[state] || "";

  const toggleMenu = () =>{
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className="flex items-center py-[12px]">
        <img
          src="/images/icon.16.chevron.down.svg"
          alt="chevron down"
          className={imageSize}
        ></img>
        <img src={img} alt="primitive-button" />
        <div className="text-xs font-Inter">{title}</div>
      </div>

      <div className="flex py-[8px] cursor-pointer" onClick={toggleMenu}>
        <img src="/images/icon.16.chevron.down.svg" alt="hi" className="pl-[4px]"/>
        <div className="text-xs font-Inter">Folder</div>
      </div>

      {menuOpen && (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src="/images/lib-vimeo/Template.svg" alt="trust" />
          <div className="text-[11px] font-Inter font-light pt-[4px]">Checkout</div>
        </div>
        <div>
        <img src="/images/lib-vimeo/Template-1.svg" alt="trust" />

          <div className="text-[11px] font-Inter font-light pt-[4px]">Video Sharing</div>
        </div>
        <div>
        <img src="/images/lib-vimeo/Template-2.svg" alt="trust" />

          <div className="text-[11px] font-Inter font-light pt-[4px]">Logged out</div>
        </div>
        <div>
        <img src="/images/lib-vimeo/Template-3.svg" alt="trust" />
        <div className="text-[11px] font-Inter font-light pt-[4px]">Video script</div>
        </div>
      </div>
    )}
    </>
  );
};

export default PrimitiveRow;
