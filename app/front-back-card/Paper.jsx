"use client"
import React from 'react'
import ImageCard from './ImageCard'

const Paper = ({ side, frontImage, backImage, count }) => {
    var info = {
        "side": side,
        "frontImage": frontImage,
        "backImage": backImage,
        "count": count
    };
    return (
        <div className='bg-white h-[297mm] print:h-auto p-[10.5mm] print:p-0 w-[210mm] print:border-0 border border-gray-950 shadow-lg print:shadow-none paper' style={{
            width: '',
            height: '',
            padding: ''
        }}>
        <div className={"plate flex " + (side == "back" && count <=1 ? ' justify-end' : ' justify-between')} >
            {count >=1 ? <ImageCard info={info} /> : ''}
            {count >=2 ? <ImageCard info={info} /> : ''}
        </div>
            <div className={"mt-2 plate flex " + (side == "back" && count <=3 ? ' justify-end' : ' justify-between')} >
                {count >=3 ? <ImageCard info={info} /> : ''}
                {count >=4 ? <ImageCard info={info} /> : ''}
            </div>
            <div className={"mt-2 plate flex " + (side == "back" && count <=5 ? ' justify-end' : ' justify-between')} >
                {count >=5 ? <ImageCard info={info} /> : ''}
                {count >=6 ? <ImageCard info={info} /> : ''}
            </div>
            <div className={"mt-2 plate flex " + (side == "back" && count <=7 ? ' justify-end' : ' justify-between')} >
                {count >=7 ? <ImageCard info={info} /> : ''}
                {count >=8 ? <ImageCard info={info} /> : ''}
            </div>
            <div className={"mt-2 plate flex " + (side == "back" && count <=9 ? ' justify-end' : ' justify-between')} >
                {count >=9 ? <ImageCard info={info} /> : ''}
                {count >=10 ? <ImageCard info={info} /> : ''}
            </div>
        </div>
    )
}

export default Paper