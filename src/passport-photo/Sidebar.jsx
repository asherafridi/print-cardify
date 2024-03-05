import React from 'react'
import 'boxicons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <div className='sidebar print:hidden w-full md:w-[400px] min-h-dvh md:min-h-full lg:fixed flex flex-col p-4'>
            <div className="bg-slate-300 w-100 flex-grow shadow-lg rounded p-3  flex flex-col justify-between   ">
                <div>
                    <Link to="/" className='text-xl font-semibold flex items-center gap-2 mt-1'><box-icon name='printer' color="blue"></box-icon> Print Cardify</Link>
                    <div className='mt-32'>
                        <div className="form-block">
                            <label className='font-medium'>Photo</label>
                            <input type="file" className='bg-slate-200 border border-slate-600 mt-1 w-full rounded p-2 file:rounded file:border-0 file:mr-2 file:px-5 file:py-1 file:bg-slate-500 file:text-white cursor-pointer file:font-light hover:file:bg-slate-600' />
                        </div>
                        <div className="form-block mt-3">
                            <label className='font-medium'># of Copies</label>
                            <select type="number" min="1" max="10" className='outline-none border py-2 border-slate-600 mt-1 w-full rounded p-2 bg-slate-200' >
                                <option>4 Pictures</option>
                                <option>8 Pictures</option>
                                <option>12 Pictures</option>
                                <option>16 Pictures</option>
                                <option>20 Pictures</option>
                            </select>
                        </div>
                        <div className="flex justify-between gap-2 mt-5">
                            <button className='flex-grow bg-green-700 py-2 hover:bg-green-600 rounded text-white  flex items-center justify-center gap-3' ><box-icon name='printer' color="white"></box-icon>Print</button>
                        </div>
                    </div>
                </div>

                <button className='bg-red-500 hover:bg-red-400  rounded text-white p-3 flex justify-center items-center gap-2'><box-icon name='rotate-right' color="white"></box-icon>Reset</button>
            </div>
        </div>
    )
}

export default Sidebar