import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { OrderContext } from '../../App';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const order=useContext(OrderContext)
    const [user, loading, error] = useAuthState(auth);

    // user of athentication
    if(user){
       console.log(user)
      
    }
    const{id}=useParams();
    console.log(id)
    const [singleUSer,setSingleUser]=useState({});
    useEffect(()=>{
        const url=`https://morning-chamber-80231.herokuapp.com/services/${id}`;
        fetch(url).then(res => res.json()).then(data => setSingleUser(data))

    },[]);
    const handleOrder=e=> {
        e.preventDefault()
        const order={
            name:e.target.firstName.value,
            email:e.target.email.value,
            serviceName:e.target.serviceName.value,
            bookingFee:e.target.bookingFee.value
        }

        axios.post('https://morning-chamber-80231.herokuapp.com/order', order)
          .then(function (response) {
              const{data}=response;
              if(data.insertedId){
                  toast('your order booked')
              }
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }

    return (
        <div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-1 pb-4'>
           <div className=' row-span-3  order-2 md:order-1'>
           <div class="flex flex-col pl-4  px-0  md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 md:text-4xl text-heading text-center py-5 ">Shipping Address
                    </h2>
                    <form onSubmit={handleOrder} class="justify-center w-full mx-auto"  action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" value={user?.displayName.split(" ")[0]} type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="lastName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" value={user?.displayName.split(" ")[1]} type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="ServiceName" class="block mb-3 text-sm font-semibold text-gray-500">Service
                                        Name</label>
                                    <input name="serviceName" value={singleUSer.serviceName} type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="lastName" class="block mb-3 text-sm font-semibold text-gray-500">Booking Fee
                                       </label>
                                    <input name="bookingFee" value={singleUSer.bookingFee} type="number" 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="email" readOnly onBlur={e => console.log(e.target.value)} type="email" value={user.email} placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea  onBlur={e => console.log(e.target.value)}
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="city"
                                        class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                                    <span class="ml-2">Save this information for next time</span></label>
                            </div>
                            <div class="relative pt-3 xl:pt-6"><label for="note"
                                    class="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                    class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"></textarea>
                            </div>
                            <div class="mt-4">
                                <input   class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" type='submit'
                                   Process/>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
           </div>
           <div className='md:order-2 row-span-1 pl-12' >
           <ToastContainer></ToastContainer>
               <h1 className='text-center text-4xl py-4'>Order Summary</h1>
               <h1 className='text-2xl pr-5 py-10 text-sky-400'>Service Name: <span className='text-lime-700'>{singleUSer.serviceName}</span></h1>
               <p className='text-2xl pr-5 py-10 text-sky-400'>Booking Fee: <span className='text-lime-700'>{singleUSer.bookingFee}</span></p>
               
                
           </div>
      
        </div>
    );
};

export default Checkout;