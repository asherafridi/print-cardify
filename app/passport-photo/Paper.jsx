import React from 'react'

const Paper = ({ count, image }) => {
    return (

        <div className='bg-white h-[297mm] print:h-full p-[10.5mm] print:p-0 w-[210mm] print:border-0 border border-gray-950 shadow-lg print:shadow-none paper grid gap-5 grid-cols-4 grid-rows-5' style={{
            width: '',
            height: '',
            padding: ''
        }}>
            {Array.from({ length: count }, (i) => (

                <img src={image} className='w-[35mm] h-[45mm] object-contain'  / >
))}
        </div>
    )
}

// style={{
//     backgroundImage: `url(${image})`,
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center'
// }}

export default Paper