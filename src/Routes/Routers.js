import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { AboutUs } from '../Pages/AboutUs/AboutUs';
import { ContactUs } from '../Pages/ContactUs/ContactUs';
import { Hompage } from '../Pages/Hompage/Hompage';


export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Hompage/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="akuganteng" element={<ContactUs/>} />
    </Routes>
  )
}
