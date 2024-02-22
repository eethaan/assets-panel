"use client"

import React, { useEffect } from 'react';

interface ButtonProps {
  img: string;
  state: number;
  hasDropdown: boolean;
  type: string;
}


const Imagebutton: React.FC<ButtonProps> = ({ img, state, hasDropdown, type }) => {

  // define css sizes 
  const buttonSizes: {[key:string]: string} =  {
    small: 'w-[16px] h-[16px]',
    medium: 'w-[24px] h-[24px]',
    large: 'w-[58px] h-[58px] bg-[#383838] rounded-md',
  };

  const imageSize = buttonSizes[type] || '';

    return (
    <>
     <div className='flex hover:bg-[#383838] hover:rounded-lg cursor-pointer items-center'>
        {/* <img className={`w-[${x}] h-[${y}]`} src={`/images/${img}`} alt='no-image' /> */}
        <img className={imageSize} src={`/images/${img}`} alt='no-image' />
  
        {/* only renders if hasDropdown is true. should only render small things */}
        {hasDropdown && (
          <img src='/images/icon.16.chevron.down.svg' alt='no-image' />
        )}

     </div>
    </>
    )
};
export default Imagebutton

