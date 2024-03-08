// import logo from './logo.svg';
// import React, { useState, useEffect, useContext } from 'react';
// import './App.css';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import Home from './component/Home';
// import RegisterCoaching from './component/RegisterCoaching';
// import RegisterRecretional from './component/RegisterRecretional';
// import RegisterCoach from './component/RegisterCoach';
// import Dashboard from './component/Dashboard';
// import CoachData from './component/Coachdatas';
// import Receipt from './component/Receipt';
// import Receiptr from './component/Receiptr';
// import ViewRecretional from './component/ViewRecretional';
// import ViewCoaching from './component/viewCoaching';
// import AdminLogin from './component/AdminLogin';
// import GenerateReciept from './component/GenerateReciept';
// import Reports from './component/Reports';
// import Search from './component/Search';
// // import Attendance from './component/Attendance'; // Corrected import
// import Attendances from './component/Attendances';
// import Coaching from './component/Coaching';
// import Coach from './component/Coach';
// import Recreational from './component/Recreational';
// import Remark from './component/Remark'; // Corrected import
// import Rcoaching from './component/Rcoaching'; // Importing Rcoaching component
// import RRecreational from './component/RRecreational';
// import Ccontact from './component/Ccontact';
// import Jjoin from './component/Jjoin';


// import Cookies from 'js-cookie';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import Rcoach from './component/Rcoach';
// import ContactUs from './component/ContactUs';
// import JoinUs from './component/JoinUs';


// function App() {

//   const [dbpath, setdbpath] = useState('http://localhost/test/');   //database connection
//   const [btnStatus, setBtnstatus] = useState('Admin Login');
//   const [about,setAbout] = useState(false);

//   const handalaboutclick=()=>{
//  setAbout(!about);
   
//   }


//   return (
//     <>

//       <Router>
//         <Header btnStatus={btnStatus} handalaboutclick={handalaboutclick}/>

//         <Routes>
//           <Route exact path="/" element={
//             <>
//               <Home dbpath={dbpath} about={about}/>
//             </>
//           }>
//           </Route>
//           <Route exact path="/AdminLogin" element={
//             <AdminLogin dbpath={dbpath} setBtnstatus={setBtnstatus} />
//           }></Route>
//           <Route exact path="/RegisterCoaching" element={
//             <RegisterCoaching dbpath={dbpath} />
//           }>
//           </Route>
//           <Route exact path="/RegisterRecretional" element={
//             <RegisterRecretional dbpath={dbpath} />
//           }>
//           </Route>
//           <Route exact path="/RegisterCoach" element={
//             <RegisterCoach dbpath={dbpath} />
//           }>
//           </Route>
//           <Route exact path="/Dashboard" element={
//             <Dashboard dbpath={dbpath} setBtnstatus={setBtnstatus} />
//           }>
//           </Route>
//           <Route exact path="/ViewRecretional" element={
//             <ViewRecretional dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/ViewCoaching" element={
//             <ViewCoaching dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/Receipt" element={
//             <Receipt dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/Receiptr" element={
//             <Receiptr dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/CoachData" element={
//             <CoachData dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/Reports" element={
//             <Reports dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/Search" element={
//             <Search dbpath={dbpath} />
//           }></Route>

// <Route exact path="/Attendances" element={
//             <Attendances dbpath={dbpath} />
//           }></Route>
//           {/* <Route exact path="/Attendance" element={
//             <Attendance dbpath={dbpath}/> // Corrected component usage
//           }></Route> */}
         

//           <Route exact path="/GenerateReciept" element={
//             <GenerateReciept dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/Remark" element={
//             <Remark dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/coaching" element={
//             <Coaching dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/coach" element={
//             <Coach dbpath={dbpath} />
//           }></Route>


//           <Route exact path="/recreational" element={
//             <Recreational dbpath={dbpath} />
//           }></Route>

// {/* //Remark */}
// <Route exact path="/Rcoaching" element={
//             <Rcoaching dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/RRecreational" element={
//             <RRecreational dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/Rcoach" element={
//             <Rcoach dbpath={dbpath} />
//           }></Route>

//           <Route exact path="/ContactUs" element={
//             <ContactUs dbpath={dbpath} />
//           }></Route>
//           <Route exact path="/JoinUs" element={
//             <JoinUs dbpath={dbpath} />
//           }></Route>



// //Contact us
// <Route exact path="/Ccontact" element={
//             <Ccontact dbpath={dbpath} />
//           }></Route>

// <Route exact path="/Jjoin" element={
//             <Jjoin dbpath={dbpath} />
//           }></Route>



//         </Routes>
//         <div id='footerid'>
//         <Footer />
//         </div>
//       </Router>
//     </>

//   );
// }

// export default App; 
import logo from './logo.svg';
import React, { useState, useEffect, useContext } from 'react';
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
import AdminLogin from './component/AdminLogin';
import GenerateReciept from './component/GenerateReciept';
import Reports from './component/Reports';
import Search from './component/Search';
import Attendance from './component/Attendance'; // Corrected import
import Attendances from './component/Attendances';
import Coaching from './component/Coaching';
import Coach from './component/Coach';
import Recreational from './component/Recreational';
import Remark from './component/Remark'; // Corrected import
import Rcoaching from './component/Rcoaching'; // Importing Rcoaching component
import RRecreational from './component/RRecreational';
import Ccontact from './component/Ccontact';
import Jjoin from './component/Jjoin';
import 'react-toastify/dist/ReactToastify.css';
import Performance from './component/performance';
// import Test 

import {  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from './component/ContactUs';
import Joinus from './component/JoinUs';
import ShowFooter_Context from './component/ShowFooter_Context';
import Gallery from './component/Gallery';
import AboutUs from './component/AboutUs';

import Rcoach from './component/Rcoach';
import Schedule from './component/Schedule';
import Products from './component/Products';
import Coaches from './component/Coaches';
import PopUp_Context from './Context/PopUp_Context';
import Loader from './component/Loader';
import styled from 'styled-components';



function App() {


  const [dbpath, setdbpath] = useState('http://localhost/test/');
  const [btnStatus, setBtnstatus] = useState('Admin Login');
  const [loader, setLoader] = useState(true);


  const{showPopUp, setShowPopUp} = useContext(PopUp_Context);

  const{showFooter, setShowFooter} = useContext(ShowFooter_Context);
  console.log(showFooter);
  
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoader(false);
    }, 3000);
  
    return () => clearTimeout(loaderTimer);
  }, []);
  
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopUp(true);
    }, 8000);
  
    return () => clearTimeout(popupTimer);
  }, []);

  return (
    <>   
    {loader && <Loader/>} 
        
        {!loader && <div>
      <Router>
        {/* <Header btnStatus={btnStatus} /> */}
  
        <Header btnStatus={btnStatus} />

        <Routes>
          <Route exact path="/" element={
              <>
                <Home dbpath={dbpath} />
              </>
          }>
          </Route>
          <Route exact path="/AdminLogin" element={
              <AdminLogin dbpath={dbpath} setBtnstatus={setBtnstatus}  />
          }></Route>
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
          <Route exact path="/Attendances" element={
            <Attendances dbpath={dbpath} />
          }></Route>
          {/* <Route exact path="/Attendance" element={
            <Attendance dbpath={dbpath}/> // Corrected component usage
          }></Route> */}
          <Route exact path="/Remark" element={
            <Remark dbpath={dbpath} />
          }></Route>
{/* Qutraly Data */}
<Route exact path="/Performance" element={
            <Performance dbpath={dbpath} />
          }></Route>

          <Route exact path="/coaching" element={
            <Coaching dbpath={dbpath} />
          }></Route>
          <Route exact path="/coach" element={
            <Coach dbpath={dbpath} />
          }></Route>
                    <Route exact path="/recreational" element={
            <Recreational dbpath={dbpath} />
          }></Route>

{/* //Remark */}
<Route exact path="/Rcoaching" element={
            <Rcoaching dbpath={dbpath} />
          }></Route>
          <Route exact path="/RRecreational" element={
            <RRecreational dbpath={dbpath} />
          }></Route>
          <Route exact path="/Rcoach" element={
            <Rcoach dbpath={dbpath} />
          }></Route>
          <Route exact path="/Ccontact" element={
            <Ccontact dbpath={dbpath} />
          }></Route>

<Route exact path="/Jjoin" element={
            <Jjoin dbpath={dbpath} />
          }></Route>



          <Route exact path="/Dashboard" element={
              <Dashboard dbpath={dbpath} setBtnstatus={setBtnstatus} />
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
              <Receiptr dbpath={dbpath} />
          }></Route>
         
         <Route exact path="/CoachData" element={
              <CoachData dbpath={dbpath} />
          }></Route>

          <Route exact path="/Reports" element={
              <Reports dbpath={dbpath} />
          }></Route>

          <Route exact path="/Search" element={
              <Search dbpath={dbpath} />
          }></Route>
          <Route exact path="/Attendance" element={
              <Attendance /> // Corrected component usage
          }></Route>
          
          <Route exact path="/GenerateReciept" element={
              <GenerateReciept dbpath={dbpath} />
          }></Route>
          
          <Route exact path="/ContactUs" element={
              <ContactUs/>
          }>
          </Route>
          <Route exact path="/JoinUs" element={
              <Joinus/>
          }>
          </Route>

          <Route exact path="/Gallery" element={
              <Gallery />
          }>
          </Route>
          
          <Route exact path="/AboutUs" element={
              <AboutUs />
          }>
          </Route>
          <Route exact path="/Schedule" element={
              <Schedule />
          }>
          </Route>
          
          <Route exact path="/Products" element={
              <Products />
          }>
          </Route>
          
          <Route exact path="/Coaches" element={
              <Coaches />
          }>
          </Route>
          {/* <Route exact path="/test" element={
              <Slider />
          }>
          </Route> */}

        </Routes>
         <Footer /> 
      </Router>
      </div>} 
    </>

  );
}

export default App;
const Loader_Spinner = styled.div `
  width: 100%;
  height: 100%;

  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 45%;
    transition: all 0.3s ease; /* Adding transition effect */
  }

  .icon {
    height: 1.9rem;
    width: 1.9rem;
    animation: spin 1s linear infinite;
    stroke: rgba(107, 114, 128, 1);
    transition: all 0.3s ease; /* Adding transition effect */
  }

  .loading-text {
    font-size: 1.2rem;
    line-height: 1rem;
    font-weight: 500;
    color: rgba(107, 114, 128, 1);
    transition: all 0.3s ease; /* Adding transition effect */
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Additional animation */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .loader.slide {
    animation: slideIn 0.5s ease forwards;
  }
`;
