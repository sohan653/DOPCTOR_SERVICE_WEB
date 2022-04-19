import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo-removebg-preview.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [open,setOpen]=useState(false);
    const navigate=useNavigate();
    const [user, loading, error]=useAuthState(auth)
    return (
      
        <div className='relative'>
           <div className='flex md:py-3 justify-between sm:items-center bg-blue-500'>
          <button onClick={()=>navigate('/')} className=' justify-center    lg:w-1/3 text-white flex items-center text-2xl'>
                  <img className='object-cover w-28' src={logo} alt="logo" /> <span className='font-bold'>TASNIM JARA</span>
              </button>
              <ul className={`md:flex font-bold  w-full justify-end items-center absolute md:static ${open ? 'top-6': 'top-[-120px]'}`}>
               <CustomLink className='mr-2 p-3 ' to="">Home</CustomLink>
            
            <CustomLink className='mr-2 p-3' to="about">About me</CustomLink>
            <CustomLink className='mr-2 p-3' to="blogs">Blogs</CustomLink>
            {user? <button onClick={()=> signOut(auth)} className='mr-2 p-2 font-bold'>sign out</button> : <CustomLink className='mr-2 p-3' to="login">Login</CustomLink>}

         </ul>
         <div className='flex justify-end items-center z-10  w-1/3 md:hidden'>
         <nav onClick={()=> setOpen(!open)} className='w-12   sm:mr-20 '>
           {open? <XIcon></XIcon>:<MenuIcon ></MenuIcon>} 
            </nav>
         </div>
          </div>
        </div>
    );
};

export default Header;