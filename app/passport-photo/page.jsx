"use client"
import React from 'react'
import Paper from './Paper'
import { useState } from 'react'
import dynamic from 'next/dynamic'



const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const PassportPhoto = () => {
  const [count,setCount] = useState(4);
  const [image,setImage] = useState(null);

  return (
    
    <div className='bg-gray-200 print:bg-white w-full min-h-dvh md:flex box-border'>
      <Sidebar setCount={setCount} setImage={setImage} />
      <div className='print:p-0 hidden print:block pl-[400px] w-full md:flex justify-center py-4'>
        <Paper count={count} image={image} />
      </div>
    </div>
  )
}

export default PassportPhoto