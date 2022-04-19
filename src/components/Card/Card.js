import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({service,setOrder}) => {
    const navigate=useNavigate()
    const {bookingFee,description,img,serviceName}=service;
    const checkOut=()=>{
        setOrder(service);
        navigate('/checkout')
    }
    return (
        <div>
            
<div class="max-w-[400px] md:max-w-md lg:h-[480px]  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

<img class="rounded-t-lg lg:h-[200px] w-full" src={img} alt=""/>

<div class="p-5">

<h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>

<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
<h4 className='dark:text-white py-5'>Booking fee :{bookingFee}$</h4>
<button onClick={checkOut}  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Booking Now
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>
</div>

        </div>
    );
};

export default Card;