import React ,{useState} from 'react';
import Navbar from "../components/Navbar"
import MonitorFarm from '../components/MonitorFarm';
import BestFarmer from '../components/BestFarmer';
import BestFields from '../components/BestFields';
import BestYields from '../components/BestYields';
import Footer from '../components/Footer';
function Sanjeet() {
  const [open ,Isopen] =useState(false)
  const handleChange =(value) => {
    Isopen(value)
  }
  return (
    <>
    <Navbar open={open} handleChange={handleChange}/>
    <MonitorFarm/>
    <BestFarmer/>
    <BestFields/>
    <BestYields/>
    <Footer/>  
    </>
  );
}

export default Sanjeet;
