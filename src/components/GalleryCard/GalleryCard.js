import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <div className='max-w-[400px] md:max-w-md h-[200px] px-2 border-4 border-sky-500 bg-red-700 rounded-lg  shadow-md dark:bg-gray-800 '>
            <img className='object-cover h-full w-full' src={img} alt="" />
        </div>
    );
};

export default GalleryCard;