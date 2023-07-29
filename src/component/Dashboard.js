import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
export default function Dashboard({}) {

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get("http://localhost/test/getcounts.php");
        
        document.getElementById("count1").innerHTML = parseInt(result.data.phpresult[0]['count(id)'])+parseInt(result.data.phpresult[2]['count(id)']); 
        document.getElementById("count2").innerHTML = result.data.phpresult[0]['count(id)']; 
        document.getElementById("count3").innerHTML = result.data.phpresult[3]['count(id)'];
        document.getElementById("count4").innerHTML = result.data.phpresult[4]['count(id)']; 
        document.getElementById("count5").innerHTML = result.data.phpresult[2]['count(id)']; 
        document.getElementById("count6").innerHTML = result.data.phpresult[1]['count(id)']; 
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 

    }
    useEffect(() => {
        loadUser();
    }, []);     


    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Dashboard</p>
        <br></br>
        <div className='button-adjust'>
        <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
             <Link className="nav-link" to="/ViewCoaching"><button type="button" class="btn btn-outline-primary">Coaching</button></Link>
            <Link className="nav-link" to="/ViewRecretional"><button type="button" class="btn btn-outline-primary">Recreatioal</button></Link>
            <Link className="nav-link" to="/CoachData"><button type="button" class="btn btn-outline-primary">Coach</button></Link>
        </div>
        <br></br><br></br>
       
        <div class="tab-content" style={{padding:'20px'}}>
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-5">
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count1">123</h5>
                                <h4 class="text-uppercase display-7 text-primary">Total</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count2">87</h5>
                                <h4 class="text-uppercase display-7 text-primary">Coaching</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count3">45</h5>   
                                <h4 class="text-uppercase display-7 text-primary">Beginner</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count4">24</h5>
                                <h4 class="text-uppercase display-7 text-primary">Professional</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count5">55</h5>
                                <h4 class="text-uppercase display-7 text-primary">Recretional</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count6">11</h5>
                                <h4 class="text-uppercase display-7 text-primary">Coach</h4>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>

       
      
    </>
  )
}

