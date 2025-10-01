import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'
import Cards from './pages/Cards'
import Catagories from './pages/Catagories'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
// import NewPage from './pages/NewPage'
import AddListing from './pages/AddListing'  
import Footer from './pages/Footer'
import ListingData from './pages/ListingData'


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Catagories/>
      {/* <Cards/> */}
      
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Cards/>}/>
        <Route path='/listingData' element={<ListingData/>}/>
        <Route path='/categories' element={<Catagories/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newlisting' element={<AddListing/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App
