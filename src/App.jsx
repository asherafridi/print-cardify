
import Paper from './Components/Paper.jsx'
import Sidebar from './Components/Sidebar.jsx'
import { useState } from 'react'

function App() {

  const [side,setSide] = useState("front");
  const [frontImage,setFrontImage] = useState(null);
  const [backImage,setBackImage] = useState(null);
  const [count,setCount] = useState(1);

  return (
    <>
    <div className='bg-gray-200 w-100 min-h-dvh flex box-border'>
      <Sidebar side={side} setSide={setSide} count={count} setCount={setCount} setFrontImage={setFrontImage} setBackImage={setBackImage}/>
      <div className='print:p-0  pl-[400px] w-full flex justify-center py-4'>
      <Paper side={side} frontImage={frontImage} backImage={backImage} count={count} />
      </div>
    
    </div>
    </>
  )
}

export default App
