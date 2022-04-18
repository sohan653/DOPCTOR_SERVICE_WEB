import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo-removebg-preview.png'

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
      
        <div className='relative'>
           
          <div className='flex justify-between sm:items-center bg-blue-500'>
         
              <div className=' lg:w-1/3 text-white flex items-center text-2xl'>
                  <img className='object-cover w-28' src={logo} alt="logo" /> <span className='font-bold'>TASNIM JARA</span>
              </div>
              <ul className={`md:flex bg-blue-500  w-full justify-end items-center absolute md:static ${open ? 'top-6': 'top-[-120px]'}`}>
               <CustomLink className='mr-2 p-3' to="">Home</CustomLink>
            <CustomLink className='mr-2 p-3' to="Login">Login</CustomLink>
            <CustomLink className='mr-2 p-3' to="Huku">Chart</CustomLink>
            <CustomLink className='mr-2 p-3' to="information">About</CustomLink>
            <CustomLink className='mr-2 p-3' to="post">Post</CustomLink>

         </ul>
         <div className='flex justify-end items-center  w-1/3 md:hidden'>
         <nav onClick={()=> setOpen(!open)} className='w-12 h-12 sm:mr-20 '>
           {open? <XIcon></XIcon>:<MenuIcon ></MenuIcon>} 
            </nav>
         </div>
          </div>
        </div>
    );
};

export default Header;