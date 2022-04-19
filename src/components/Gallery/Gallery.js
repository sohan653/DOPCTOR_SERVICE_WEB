import React from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
const image1='https://media.istockphoto.com/photos/modern-hospital-building-picture-id1312706504?b=1&k=20&m=1312706504&s=170667a&w=0&h=IcYI9Pm-s-JyeCOgul1DfSQAqY3hVte4uXnStOXbkaw='
const image2='https://thumbs.dreamstime.com/b/hospital-surgery-corridor-25068453.jpg'
const image3='https://media.istockphoto.com/photos/unknown-young-woman-patient-discuss-the-results-of-her-medical-tests-picture-id1295964655?b=1&k=20&m=1295964655&s=170667a&w=0&h=eTu7xyZkX1z-UfAhGU9Ls0htbAgfIVxcEc4kGgfS0Mw='
const image4='https://us.123rf.com/450wm/vichie81/vichie811812/vichie81181200117/113910043-medical-doctor-touch-on-patient-s-shoulder-to-cheer-up-patient.jpg?ver=6'
const image5='https://media.istockphoto.com/photos/m-glad-to-see-you-doing-well-picture-id1152844782?k=20&m=1152844782&s=612x612&w=0&h=myHM6mGGAdUZU_EJEMU0dlLJ-ENF0BCJ26WD3OT0uQ4='
const image6='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvMzQwLXBhaTIzNDMuanBn.jpg?s=bI7ihkFCBdPOt2YuyCTgOJx9UBDCcIjsQqyZ737UD64'
const Gallery = () => {
    const imgs=[image1,image2,image3,image4,image5,image6]
    return (
        <div className='pb-3'>
            <h1 className='text-center font-bold text-sky-700 py-5 md:py-10 text-4xl'>Gallery</h1>
            <div className='grid md:grid-cols-3 md:pl-4'>
                {imgs.map(img => <GalleryCard img={img}></GalleryCard>)}
            </div>
        </div>
    );
};

export default Gallery;