import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import HomePage from './HomePage';


const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <main className='flex-1 mt-10'>
        <Routes>
          <Route path='/' element = {<HomePage></HomePage>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;