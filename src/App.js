import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import RegisterCoaching from './component/RegisterCoaching';
import RegisterRecretional from './component/RegisterRecretional';
import RegisterCoach from './component/RegisterCoach';
import Dashboard from './component/Dashboard';
import CoachData from './component/Coachdatas';
import Receipt from './component/Receipt';
import Receiptr from './component/Receiptr';
import ViewRecretional from './component/ViewRecretional';
import ViewCoaching from './component/viewCoaching';

import {  
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [dbpath, setdbpath] = useState('http://test.royalswebtech.com/test/');

  return (
    <>    
      <Router>
        <Header />
  
        <Routes>
          <Route exact path="/" element={
              <>
                <Home dbpath={dbpath}/>
              </>
          }>
          </Route>
          <Route exact path="/RegisterCoaching" element={
              <RegisterCoaching dbpath={dbpath}/>
          }>
          </Route> 
          <Route exact path="/RegisterRecretional" element={
              <RegisterRecretional dbpath={dbpath}/>
          }>
          </Route> 
          <Route exact path="/RegisterCoach" element={
              <RegisterCoach dbpath={dbpath}/>
          }>
          </Route> 
          <Route exact path="/Dashboard" element={
              <Dashboard dbpath={dbpath}/>
          }>
            </Route> 
          <Route exact path="/ViewRecretional" element={
              <ViewRecretional dbpath={dbpath}/>
          }></Route>
           <Route exact path="/ViewCoaching" element={
              <ViewCoaching dbpath={dbpath}/>
          }></Route>
          
          <Route exact path="/Receipt" element={
              <Receipt dbpath={dbpath}/>
          }></Route>
          <Route exact path="/Receiptr" element={
              <Receiptr dbpath={dbpath}/>
          }></Route>
         
          <Route exact path="/CoachData" element={
              <CoachData dbpath={dbpath} />
          }></Route>
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
