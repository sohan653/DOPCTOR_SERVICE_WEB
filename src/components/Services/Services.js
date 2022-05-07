import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import serviceData from '../../ServicesData/ServicesData';
import Card from '../Card/Card';

const Services = ({setOrder}) => {
    const [services,setService]=useState([])
    const navigate=useNavigate()
    
    useEffect(()=>{
        fetch('https://morning-chamber-80231.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setService(data))
        
    },[])
   
    return (
        <div className='bg-white'>
            <h1 className='text-center font-bold text-sky-700 py-5 md:py-10 text-4xl'>Services</h1>
           <div className='flex flex-col items-center gap-y-8 md:flex-col md:justify-around lg:flex-row lg:justify-around  pb-5'>
           {services.map(service=> <Card key={service._id} setOrder={setOrder} service={service}>
            
            <button onClick={()=>navigate(`/${service._id}`)}  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Booking Now
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>


           </Card>)}
           </div>
        </div>
    );
};

export default Services;