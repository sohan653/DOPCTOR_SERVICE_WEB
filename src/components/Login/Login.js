import React, { useState } from 'react';
import { useSignInWithEmailAndPassword,useSignInWithGoogle,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [agree,setAgree]=useState(false);
    const location=useLocation();
    const navigate=useNavigate()
    const from=location?.state?.from?.pathname || "/"
    // sign in emaail password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    // sign in google
    const [signInWithGoogle, user2, ]=useSignInWithGoogle(auth)
    const handleLogin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    // password reset 
    const [sendPasswordResetEmail, sending, error3]=useSendPasswordResetEmail(auth)
    if(user || user2){
        navigate(from,{replace:true})
    }
    const handleResetPassword=()=>{
        if(email){
         sendPasswordResetEmail(email)
         toast('please check your email')
        }
   }

    return (
        <div>
            <ToastContainer/>
             <div className='w-full h-[574px] mb-6  box-border'>

<div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>Already Signed Please Login</h1>
   <form onSubmit={handleLogin} className='flex flex-col items-center w-full '>

   <input onBlur={e=>setEmail(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email' type="email" required name="" id="" />
        <p className="text-center">{error?.message}</p>
   <input onBlur={e=>setPassword(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Password' type="password" required name="" id="" />
  {loading && <p>loading....</p>} 
<p  className='flex items-center '>  <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" /> <span className={`font-bold ${agree ? 'text-blue-700': 'text-red-700'}`}> agree with terms and condition</span></p>

   <input disabled={!agree} className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="Log in" />
   </form>
   <button onClick={ handleResetPassword} className='text-blue-600'>forgot password</button>
   <p className='text-center py-2'>Not Sign Up please <Link className='text-blue-600' to='/signup'>sign up</Link></p>
   <div className='flex justify-center items-center'>
       <div className='w-28 border-2 border-b-slate-700'></div>
       <p className='p-2'>or</p>
       <div className='w-28 border-2 border-b-slate-700'></div>
   </div>
   <div className='flex flex-col justify-center '>
       <button onClick={()=>signInWithGoogle()} className='bg-blue-600  hover:bg-blue-800 rounded-md p-2'>sign with google</button>
      
   </div>
 
  
</div>


</div>

        </div>
    );
};

export default Login;