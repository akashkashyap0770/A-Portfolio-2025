import React, { createContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { NAVBARList } from '../utils/Data';

export const Data = createContext();

function DashBoard() {

  const GoToHomePage = NAVBARList; 

  return (
    <>
    <Data.Provider value={GoToHomePage}>
     <Navbar />
     <Outlet />
     <Footer />
    </Data.Provider>
    </>
  )
}

export default DashBoard
