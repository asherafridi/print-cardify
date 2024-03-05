import React from 'react'
import Sidebar from './Sidebar'
import Paper from './Paper'

const PassportPhoto = () => {
  return (
    
    <div className='bg-gray-200 w-100 min-h-dvh md:flex box-border'>
      <Sidebar />
      <div className='print:p-0 hidden pl-[400px] w-full md:flex justify-center py-4'>
        <Paper />
      </div>
    </div>
  )
}

export default PassportPhoto