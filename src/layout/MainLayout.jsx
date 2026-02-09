import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from './../components/footer/Footer';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className='container'>
    <Navbar />
    <div style={{ paddingTop: "100px" }}>
        <Outlet />
    </div>
    {/* <Outlet /> */}
    <Footer />
    </div>
  )
}
