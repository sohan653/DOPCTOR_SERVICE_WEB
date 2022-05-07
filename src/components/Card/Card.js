import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({service,setOrder,children}) => {
    
    const {bookingFee,description,img,serviceName,_id}=service;
    
    return (
        <div>
            
<div class="max-w-[400px] md:max-w-md lg:h-[480px]  rounded-lg border border-gray-200 shadow-md bg-gray-800 dark:border-gray-700">

<img class="rounded-t-lg lg:h-[200px] w-full" src={img} alt=""/>

<div class="p-5">

<h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>

<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
<h4 className='dark:text-white py-5'>Booking fee :{bookingFee}$</h4>

{children}
</div>
</div>

        </div>
    );
};

export default Card;