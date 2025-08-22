import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 md:px-24 py-10 bg-slate-100'>
        <a href="/" className='flex items-center gap-2 font-semibold'>Print Cardify</a>
        <a href="contact-us" className='px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-500'>Contact Us</a>
    </div>
  )
}

export default Navbar