import React, { useEffect, useState } from 'react';
import serviceData from '../../ServicesData/ServicesData';
import Card from '../Card/Card';

const Services = () => {
    const [services,setService]=useState([])
    useEffect(()=>{
        const data=serviceData;
        setService(data)
    },[services])
    return (
        <div className='bg-white'>
            <h1 className='text-center font-bold text-sky-700 py-5 md:py-10 text-4xl'>Services</h1>
           <div className='flex flex-col items-center gap-y-8 md:flex-col md:justify-around lg:flex-row lg:justify-around  pb-5'>
           {services.map(service=> <Card key={service.id} service={service}></Card>)}
           </div>
        </div>
    );
};

export default Services;