import React from 'react'

const ImageCard = ({info}) => {

    const {side,frontImage,backImage,count} = info;
  return (
    <div className='w-[85mm] h-[53.9mm]'>{side === "front" ? <Image src={frontImage} className="w-full h-full"/> : <Image src={backImage} className="w-full h-full"/>}</div>
  )
}

const Image = ({src})=>{
    return (
        <>{src !=null ?  <img src={src} className='w-full h-full'/> : ''}</>
    );
}

export default ImageCard