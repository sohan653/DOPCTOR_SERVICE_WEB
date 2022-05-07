import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const[user]=useAuthState(auth);
    const{email}=user;
    const navigate=useNavigate()
    const[order,setOrder]=useState([]);
    useEffect(()=>{
        const getOrder=async()=>{
            const url=`https://morning-chamber-80231.herokuapp.com/order?email=${email}`;
           try{
            const{data}=await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('token')}`
                }
            });
            setOrder(data)
           }
           catch(err){
            console.log(err);
            if(err.response.status===403 || err.response.status===401){
                navigate('/login')
                signOut(auth)
            }
           }}
        getOrder()
    },[])
    console.log(order)
    return (
        <div>
          order{order.length}
        </div>
    );
};

export default Order;