import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Outlet} from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import {Header } from '../../components/Header/Header'




export const MainLayout = () => {
  return (
   <>
   <Navbar/>
   <Header />
   <Outlet/>
   <Footer/>
   </>
  )
}
