import React from 'react';
import image from '../../images/ovi.jpg'

const About = () => {
    return (
        <div className='relative md:static md:grid md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center md:static absolute top-12'>
                <h1 className='text-4xl font-bold text-center text-blue-600 opacity-60 md:opacity-100 md:text-blue-900 py-4'>MD SOHANUR RAHMAN</h1>
                <p className='md:text-xl font-bold text-xl md:text-center opacity-60 md:opacity-100 lg:text-2xl p-3'>I am Sohanur Rahman.Now i am student of Pregramming Hero.I learned html, css, tailwind css,javascript ,react and firebase.i want to be Front end developer.Inshallah one Day i will reach my goal.</p>
                <button className='bg-blue-600 py-2 px-2 font-bold text-white rounded hover:bg-blue-900'>read more</button>
            </div>
            <div>
                <img className='object-fill w-full h-full' src={image} alt="" />
            </div>
        </div>
    );
};

export default About;