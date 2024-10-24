import React from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Course from '../components/Course';


function Courses() {
    return ( 
        <>
 <Navbar/>
 <div className='min h-screen'>
    <Course/>
    <Footer/>
 </div>
 
        </>
     );
}

export default Courses;