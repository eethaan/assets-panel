"use client"

import React from 'react'
import Header from './Header'
import Librarylist from './Librarylist'


function AssetPanelFull() {
  return (
   <>
   <div className='flex flex-col h-svh max-h-[97vh] p-3 m-[12px] w-[240px] bg-[#2C2C2C] rounded-[13px] text-white'>
        <Header />
        <Librarylist />
    </div>
   </>
  )
}

export default AssetPanelFull