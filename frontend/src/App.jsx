// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter,Routes, Route}  from  'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HomePage from './pages/UserHomePage';
import Profile from './pages/Profile';
import Favorite from './pages/favorite';



export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path='/userPage' element={<HomePage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/favorites' element={<Favorite/>}/>

        

      </Routes>
    </BrowserRouter>
  );
}
    
