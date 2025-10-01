import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'
import Cards from './pages/Cards'
import Catagories from './pages/Catagories'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
// import NewPage from './pages/NewPage'
import AppProperty from './pages/AppProperty'  


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Cards/>}/>
        <Route path='/categories' element={<Catagories/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newpage' element={<AppProperty/>}/>
      </Routes>
    </BrowserRouter>

    {/* 
    <Catagories/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <div className="container mt-4">
        <h1>Welcome to Wanderlust Clone</h1>
      </div>
    <Home/> */}
    </>
  )
}

export default App
