import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 md:px-24 py-10 bg-slate-100'>
        <Link to="/" className='flex items-center gap-2 font-semibold'><box-icon name='printer' color="blue"></box-icon> Print Cardify</Link>
        <Link to="contact-us" className='px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-500'>Contact Us</Link>
    </div>
  )
}

export default Navbar