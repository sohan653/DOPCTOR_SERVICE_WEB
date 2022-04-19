import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <div className='max-w-[400px] md:max-w-md h-[200px] px-2 border-4 border-sky-500  rounded-lg  shadow-md bg-gray-800 '>
            <img className='object-fill h-full w-full' src={img} alt="" />
        </div>
    );
};

export default GalleryCard;