import logo from './logo.svg';
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
  return (
    <>    
      <Router>
        <Header />
  
        <Routes>
          <Route exact path="/" element={
              <>
                <Home/>
              </>
          }>
         
          </Route>
          <Route exact path="/RegisterCoaching" element={
              <RegisterCoaching />
          }>
          </Route> 
          <Route exact path="/RegisterRecretional" element={
              <RegisterRecretional />
          }>
          </Route> 
          <Route exact path="/RegisterCoach" element={
              <RegisterCoach />
          }>
          </Route> 
          <Route exact path="/Dashboard" element={
              <Dashboard />
          }>
            </Route> 
          <Route exact path="/ViewRecretional" element={
              <ViewRecretional />
          }></Route>
           <Route exact path="/ViewCoaching" element={
              <ViewCoaching />
          }></Route>
          
          <Route exact path="/Receipt" element={
              <Receipt />
          }></Route>
          <Route exact path="/Receiptr" element={
              <Receiptr />
          }></Route>
         
          <Route exact path="/CoachData" element={
              <CoachData />
          }></Route>
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
