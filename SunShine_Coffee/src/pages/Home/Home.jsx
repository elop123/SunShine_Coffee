import React from 'react'
import { Header } from '../../components/Header/Header'
import { Shop } from '../../components/Shop/Shop'
import { About } from '../../components/About/About'
import { Testimonies } from '../../components/Testimonies/Testimonies'
import './Home.module.scss'
import { Navbar } from '../../components/Navbar/Navbar'
import { MainLayout } from '../../Layout/MainLayout/MainLayout'


export const Home = () => {
  return (
   <>
   
    <About />
    <Shop />
    <Testimonies />
   </>

  )
}
