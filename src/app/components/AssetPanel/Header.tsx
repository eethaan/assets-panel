"use client"
import React, { useState } from 'react'
import Buttons from '../Atoms/Buttons'
import Imagebutton from '../Atoms/Imagebutton'

function Header() {

  // this controls the tabs states
  const [selectedTab, setSelectedTab] = useState('assets');

  const handleButtonClick = (buttonName: string) =>{
    setSelectedTab(buttonName);
  }
  
  return (
    <>
    <div className='flex place-content-between h-[40px]'>
        <div className='pl-[4px] flex items-center'>
        <Imagebutton img='icon-figma-logo.svg' state={2} hasDropdown={true} type="small" />
        </div>
        <Imagebutton img='icon.24.sidebar.closed.svg' state={2} hasDropdown={false} type="medium" />
    </div>

    <div className='p-[8px]'>
      <div className="text-white text-[13px] font-medium font-['Inter'] leading-snug h-[24px]">UI3 Library 2023 (WIP)</div>
      <div className="text-white text-opacity-70 text-[12px] font-['Inter'] leading-none tracking-tight h-[16px]">feat-ui3</div>
    </div>

    <div className='space-x-2 py-2 flex place-content-between border-t border-b border-y-[#444444] place-items-center'>
      <div>
      <Buttons
      title='File'
      state={selectedTab === 'file' ? 2 : 0} // Set state based on selectedTab
      onClick={() => handleButtonClick('file')} // Pass button name to handleButtonClick
      />
      <Buttons
        title='Assets'
        state={selectedTab === 'assets' ? 2 : 0} // Set state based on selectedTab
        onClick={() => handleButtonClick('assets')} // Pass button name to handleButtonClick
      />
      </div>
      <Imagebutton img='icon.24.library.svg' state={2} hasDropdown={false} type="medium" />
    </div>
  
    </>
  )
}

export default Header