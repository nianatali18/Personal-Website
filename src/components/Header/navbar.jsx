'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import {  FaFolder } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

import '../../index.css';

function Nav() {

const [isOpen, setIsOpen] = useState(false);
return (
<motion.div
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className='sticky top-0 z-50'
>
<nav className="bg-black sticky ">
<div className="w-full px-2 sm:px-6 lg:px-8">
  <div className="relative flex items-center justify-between h-16 w-full">
    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() =>
               setIsOpen(!isOpen)} className="inline-flex items-center justify-end p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
               <span className="sr-only">Open main menu</span>
               <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
         </div>
         <div className="flex sm:justify-between items-center justify-end w-full">
  <div className="flex-shrink-0 ">
    <div className=' rounded-md items-center justify-center flex h-[2.5rem] w-[10rem]  sm:h-[3.5rem] sm:w-[12rem] '>
      <span className='text-4xl text-white'>{ "Nia" }</span>
    </div>
  </div>
      <div className="hidden sm:block sm:ml-6">
               
               <div className="flex space-x-4 text-white text-xl">
                  <Link to="/About" className="flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 gap-2  rounded-md font-medium">
                     <IoPersonSharp/>
                     <span>About</span>
                  </Link >
                  <Link to="/projects" className="flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 gap-2  rounded-md font-medium">
                     <FaFolder/>
                     <span>Projects</span>
                  </Link >
                  
                  <Link to="/contact" className="flex items-center hover:bg-gray-700 hover:text-white px-3 py-2  gap-2 rounded-md font-medium">
                     <MdEmail/>
                     <span>Contact</span>
                  </Link >
                  
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden flex flex-col px-2 pt-8 pb-3 space-y-1  text-white`}>
   <Link to="/Home" className=" hover:bg-blue-800 hover:text-black px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><FaUserGear/>Home</Link >
  <Link to="/About" className=" hover:bg-blue-800 hover:text-black px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><IoPersonSharp/>About</Link >
  <Link to="/projects" className=" hover:bg-blue-800 hover:text-black px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><FaFolder/>Projects</Link >
  <Link to="/contact" className=" hover:bg-blue-800 hover:text-black px-3 py-2 rounded-md text-md font-medium flex items-center gap-2"><MdEmail/>Contact</Link >
</div>
</nav>
</motion.div>
);
}

export default Nav;