import React from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
const image1='https://media.istockphoto.com/photos/modern-hospital-building-picture-id1312706504?b=1&k=20&m=1312706504&s=170667a&w=0&h=IcYI9Pm-s-JyeCOgul1DfSQAqY3hVte4uXnStOXbkaw='
const image2='https://thumbs.dreamstime.com/b/hospital-surgery-corridor-25068453.jpg'
const Gallery = () => {
    const imgs=[image1,image2]
    return (
        <div>
            <h1 className='text-center font-bold text-sky-700 py-5 md:py-10 text-4xl'>Gallery</h1>
            <div>
                {imgs.map(img => <GalleryCard img={img}></GalleryCard>)}
            </div>
        </div>
    );
};

export default Gallery;