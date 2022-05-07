import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const SignUp = () => {
   
    const [createUserWithEmailAndPassword,user,loading]=useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error ,setError]=useState('');
    const navigate=useNavigate();
    
    const handleCreateUser=event=>{
       
        event.preventDefault()
        if(password !== confirmPassword){
            setError('password not matched')
            return
        }
        if(password.length<6){
            setError('password should be at least 6 character')
            return
        }
        if(loading || loading2){
            return <p>Loading...</p>;
        }
    createUserWithEmailAndPassword(email,password)
   

    }
   
    if(user || user2){
       
        navigate('/')
    }
    return (
        <div className='w-full'>

        <div className='w-96 rounded-md h-[554px] flex flex-col border-2 mx-auto mt-4  outline-none'>
            <h1 className='text-3xl p-4 text-center'>Please Sign Up</h1>
            <p className='text-2xl text-red-900'>{error}</p>
           <form onSubmit={handleCreateUser} className='flex flex-col items-center w-full '>
          
           <input onBlur={e=> setEmail(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email' required type="email" name="" id="email" />
           <input onBlur={e=> setPassword(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Password' required type="password" name="" id="password" />
           <input onBlur={e=> setConfirmPassword(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Confirm Password' required type="password" name="" id="confirmPAssword" />
           <input className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-blue-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="submit" />
           </form>
           <p className='text-center py-2'>Already signUp please  <Link className='text-blue-600' to='/login'>Login</Link></p>
           <div className='flex justify-center items-center'>
               <div className='w-28 border-2 border-b-slate-700'></div>
               <p className='p-2'>or</p>
               <div className='w-28 border-2 border-b-slate-700'></div>
           </div>
           <div className='flex flex-col justify-center '>
               <button onClick={()=>signInWithGoogle()} className='bg-blue-600  hover:bg-blue-800 rounded-md p-2'>sign with google</button>
               <button className='bg-blue-600  hover:bg-blue-800 rounded-md p-2 mt-2'> sign in with facebook</button>
               
           </div>
         
          
        </div>
       
    </div>
    );
};

export default SignUp;