import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [agree,setAgree]=useState(false)
    
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
    return (
        <div>
             <div className='w-full h-[574px] mb-6  box-border'>

<div className='w-96 rounded-md  flex flex-col border-2 mx-auto mt-4  outline-none'>
    <h1 className='text-3xl p-4 text-center'>Already Signed Please Login</h1>
   <form onSubmit={handleLogin} className='flex flex-col items-center w-full '>

   <input onBlur={e=>setEmail(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Valid Email' type="email" required name="" id="" />
        {/* <p className="text-center">{error?.message}</p> */}
   <input onBlur={e=>setPassword(e.target.value)} className='border-2 my-4 p-2 border-blue-600 rounded-md w-3/4 outline-none focus:border-green-700' placeholder='Enter Your Password' type="password" required name="" id="" />
  {/* {loading && <p>loading....</p>}  */}
<p  className='flex items-center '>  <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" /> <span className={`font-bold ${agree ? 'text-blue-700': 'text-red-700'}`}> agree with terms and condition</span></p>
{/* <button onClick={ handleResetPassword} className='text-blue-600'>forgot password</button> */}
   <input disabled={!agree} className='bg-blue-600  hover:bg-blue-800 my-4 focus:bg-yellow-700 font-semibold p-2 rounded-md w-3/4 cursor-pointer' type="submit" value="Log in" />
   </form>
   <p className='text-center py-2'>Not Sign Up please <Link className='text-blue-600' to='/signup'>sign up</Link></p>
   <div className='flex justify-center items-center'>
       <div className='w-28 border-2 border-b-slate-700'></div>
       <p className='p-2'>or</p>
       <div className='w-28 border-2 border-b-slate-700'></div>
   </div>
   <div className='flex flex-col justify-center '>
       <button className='bg-blue-600  hover:bg-blue-800 rounded-md p-2'>sign with google</button>
       <button className='bg-blue-600  hover:bg-blue-800 rounded-md p-2 mt-2'> sign in with facebook</button>
       <button className='bg-blue-600  hover:bg-blue-800 rounded-md p-2 mt-2'>sign in with github</button>
   </div>
 
  
</div>


</div>
        </div>
    );
};

export default Login;