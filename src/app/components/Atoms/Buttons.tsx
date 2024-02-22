"use client"

import React, { useEffect } from 'react';

interface ButtonProps {
  title: string;
  state: number;
  onClick: () => void; // Change the prop name to onClick
  // width: number;
}

const Buttons: React.FC<ButtonProps> = ({ title, state, onClick }) => {

const handleClick = () => {
  onClick();
  console.log("clicked");
};

return (
  <button 
  className={`h-[24px] py-[4px] px-[8px] ${state ? 'bg-[#383838] rounded-md' : 'hover:bg-[#383838] hover:rounded-sm'} text-white text-[11px] font-['Inter']`}
  onClick={handleClick}>
    {title}
  </button>
)
};

export default Buttons;