"use client"
import React from 'react'
import 'boxicons'

const Sidebar = ({side,setSide,count,setCount,setFrontImage,setBackImage}) => {
    function toggleSide(){
        side==="front" ? setSide('back'): setSide('front');
    }
    function print() {
  if (typeof window !== "undefined") {
    window.print();
  }
}
    
    function handleCountChange(event) {
        
        setCount(event.target.value);
    }
    function handleFrontFileChange(e){
        const file = e.target.files[0]; // Get the first file from the selected files
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
            setFrontImage(imageUrl); // Set the selected image URL
        }
    }
    function handleBackFileChange(e){
        const file = e.target.files[0]; // Get the first file from the selected files
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
            setBackImage(imageUrl); // Set the selected image URL
        }
    }
    function reset(){
        setSide("front");
        setFrontImage(null);
        setBackImage(null);
        setCount(1);
    }
    return (

        <div className='sidebar print:hidden w-full md:w-[400px] min-h-dvh md:min-h-full lg:fixed flex flex-col p-4'>
            <div className="bg-slate-300 w-100 flex-grow shadow-lg rounded p-3  flex flex-col justify-between   ">
                <div>
                    <a href="/" className='text-xl font-semibold flex items-center gap-2 mt-1'> Print Cardify</a>
                    <div className='mt-32'>
                        <div className="form-block">
                            <label className='font-medium'>Front Side</label>
                            <input type="file" onChange={handleFrontFileChange} className='bg-slate-200 border border-slate-600 mt-1 w-full rounded p-2 file:rounded file:border-0 file:mr-2 file:px-5 file:py-1 file:bg-slate-500 file:text-white cursor-pointer file:font-light hover:file:bg-slate-600' />
                        </div>
                        <div className="form-block mt-3">
                            <label className='font-medium'>Back Side</label>
                            <input type="file" onChange={handleBackFileChange} className='bg-slate-200 border border-slate-600 mt-1 w-full rounded p-2 file:rounded file:border-0 file:mr-2 file:px-5 file:py-1 file:bg-slate-500 file:text-white cursor-pointer file:font-light hover:file:bg-slate-600' />
                        </div>
                        <div className="form-block mt-3">
                            <label className='font-medium'># of Copies</label>
                            <select onChange={handleCountChange} className='outline-none border py-2 border-slate-600 mt-1 w-full rounded p-2 bg-slate-200' >
                                <option value={2}>2</option>
                                <option value={4}>4</option>
                                <option value={6}>6</option>
                                <option value={8}>8</option>
                                <option value={10}>10</option>
                            </select>
                        </div>
                        {/* <div className="form-block mt-3">
                            <button className='bg-blue-600 hover:bg-blue-500 w-full py-3 text-white rounded'>Generate</button>
                        </div> */}
                        <div className="flex justify-between gap-2 mt-5">
                            <button className='flex-grow bg-green-700 py-2 hover:bg-green-600 rounded text-white  flex items-center justify-center gap-3' onClick={print}><box-icon name='printer' color="white"></box-icon>Print</button>
                            <button className='flex-grow bg-slate-700 py-2 hover:bg-slate-600  rounded text-white flex items-center justify-center gap-3'  onClick={toggleSide}><box-icon name='reflect-vertical' color="white"></box-icon>Flip</button>
                        </div>
                    </div>
                </div>

                <button onClick={reset} className='bg-red-500 hover:bg-red-400  rounded text-white p-3 flex justify-center items-center gap-2'><box-icon name='rotate-right' color="white"></box-icon>Reset</button>
            </div>
        </div>
    )
}

export default Sidebar