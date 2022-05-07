import React from 'react';
import { useForm } from "react-hook-form";
const SetService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url='https://morning-chamber-80231.herokuapp.com/services';
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data)
        }).then(res => res.json()).then(data => console.log(data))
    }
    return (
        <div>
            <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <p>Service Name:  <input className='border-4 border-green-900 mb-2' placeholder='servicename' {...register("serviceName", { required: true, maxLength: 20 })} /> </p>
           
     <p className='items-center'>description: <textarea className='border-4 mb-2 border-green-900 w-56' placeholder='description' {...register("description", )} />  </p>
      <input className='border-4 mb-2 border-green-900' placeholder='bookingfee' type="number" {...register("bookingFee", )} />
      <input className='border-4 mb-2 border-green-900' placeholder='photourl' type="text" {...register("img", )} />
      <input className='border-4 border-green-900 cursor-pointer' type="submit" />
      
      
    </form>
        </div>
    );
};

export default SetService;