import React from 'react'
import 'boxicons'

const Sidebar = ({setCount, setImage}) => {
    function imageCount(e){
        setCount(e.target.value)
    }
    function fileChange(e){
        const file = e.target.files[0]; // Get the first file from the selected files
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
            setImage(imageUrl); // Set the selected image URL
        }
    }
    function print(){
        window.print();
    }
    function reset(){
        setImage(null);
    }
    return (

        <div className='sidebar print:hidden w-full md:w-[400px] min-h-dvh md:min-h-full lg:fixed flex flex-col p-4'>
            <div className="bg-slate-300 w-100 flex-grow shadow-lg rounded p-3  flex flex-col justify-between   ">
                <div>
                    <a href="/" className='text-xl font-semibold flex items-center gap-2 mt-1'><box-icon name='printer' color="blue"></box-icon> Print Cardify</a>
                    <div className='mt-32'>
                        <div className="form-block">
                            <label className='font-medium'>Photo</label>
                            <input type="file" onChange={fileChange} className='bg-slate-200 border border-slate-600 mt-1 w-full rounded p-2 file:rounded file:border-0 file:mr-2 file:px-5 file:py-1 file:bg-slate-500 file:text-white cursor-pointer file:font-light hover:file:bg-slate-600' />
                        </div>
                        <div className="form-block mt-3">
                            <label className='font-medium'># of Copies</label>
                            <select onChange={imageCount} className='outline-none border py-2 border-slate-600 mt-1 w-full rounded p-2 bg-slate-200' >
                                <option value={4}>4 Pictures</option>
                                <option value={8}>8 Pictures</option>
                                <option value={12}>12 Pictures</option>
                                <option value={16}>16 Pictures</option>
                                <option value={20}>20 Pictures</option>
                            </select>
                        </div>
                        
                        <div className="flex justify-between gap-2 mt-5">
                            <button className='flex-grow bg-green-700 py-2 hover:bg-green-600 rounded text-white  flex items-center justify-center gap-3' onClick={print}><box-icon name='printer' color="white"></box-icon>Print</button>
                        </div>
                    </div>
                </div>

                <button onClick={reset} className='bg-red-500 hover:bg-red-400  rounded text-white p-3 flex justify-center items-center gap-2'><box-icon name='rotate-right' color="white"></box-icon>Reset</button>
            </div>
        </div>
    )
}

export default Sidebar