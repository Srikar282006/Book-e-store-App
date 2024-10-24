import React from 'react';
 import Navbar from "../Navbar"
 import { Freebook } from '../Freebook';
 import { Footer } from '../Footer';
 import {Banner} from "../Banner"

function Home() {
    return ( 
        <>
        <Navbar/>
     <Banner/>
     <Freebook/>
     <Footer/>
        </>
     );
}

export default Home;