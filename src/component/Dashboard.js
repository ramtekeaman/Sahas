import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
  import Cookies from 'js-cookie';

export default function Dashboard({dbpath,setBtnstatus}) {

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get(dbpath+"getcounts.php");
        
        document.getElementById("count1").innerHTML = parseInt(result.data.phpresult[0]['count(id)'])+parseInt(result.data.phpresult[2]['count(id)']); 
        document.getElementById("count2").innerHTML = result.data.phpresult[0]['count(id)']; 
        document.getElementById("count3").innerHTML = result.data.phpresult[3]['count(id)'];
        document.getElementById("count4").innerHTML = result.data.phpresult[4]['count(id)']; 
        document.getElementById("count5").innerHTML = result.data.phpresult[2]['count(id)']; 
        document.getElementById("count6").innerHTML = result.data.phpresult[1]['count(id)']; 
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 

    }
   
    const navigate = useNavigate();

    function onLogout()
    {
        Cookies.set('userLoggedIn', 'false');
        setBtnstatus('Admin Login');
        navigate('/');
    }

    const isUserLoggedIn = Cookies.get('userLoggedIn');

        useEffect(() => {
            if (isUserLoggedIn !== 'true') {
                navigate('/AdminLogin');
            }
            else
            {
                loadUser();
            }
        }, [isUserLoggedIn]);    
       

    return (    
    <>
        <br></br><br></br>
        <div id="loginverify">
        <p className='sp1' >Dashboard</p>
        <br></br>
        
        
        <div class="tab-content" style={{padding:'10px', display: 'flex', justifyContent: 'space-around',}}>
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="" style={{display:'flex'}}>
                        {/* <div class="" >
                            <Link className="nav-link" to="/Dashboard" ><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
                        </div> */}
                        <div class="" >
                        <Link className="nav-link" to="/ViewCoaching" ><button type="button" class="btn btn-outline-primary">Coaching</button></Link>
                        </div>
                        <div class="" >
                        <Link className="nav-link" to="/ViewRecretional" ><button type="button" class="btn btn-outline-primary">Recreatioal</button></Link>
                        </div>
                        <div class="" >
                        <Link className="nav-link" to="/CoachData" ><button type="button" class="btn btn-outline-primary">Coach</button></Link>
                        </div>
                        <div class="" style={{marginLeft:'0px',marginRight:'0px', marginTop:'0px'}} >
                            <div class="nav-link dropdown">
                                <a class="btn  nav-link dropdown-toggle btn-outline-primary  d-lg-block" style={{width:'100px'}} data-bs-toggle="dropdown">Register</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <Link  to="/RegisterCoach"><a href="testimonial.html" class="dropdown-item">Coach</a></Link>
                                    <Link  to="/RegisterCoaching"><a href="blog.html" class="dropdown-item">Coaching</a></Link>
                                    <Link  to="/RegisterRecretional"><a href="detail.html" class="dropdown-item">Recretional</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="" >
                        <Link className="nav-link" to="/GenerateReciept" ><button type="button" class="btn btn-outline-primary">Genrate Receipt</button></Link>
                        </div>
                        <div class="" >
                        <Link className="nav-link" to="/Reports" ><button type="button" class="btn btn-outline-primary">Reports</button></Link>
                        </div>
                        <div class="" >
                        <Link className="nav-link" to="/Search" ><button type="button" class="btn btn-outline-primary">Search</button></Link>
                        </div>
                        {/* <div class="" >
                        <Link className="nav-link" to="/Attendance" ><button type="button" class="btn btn-outline-primary">Attendance</button></Link>
                        </div> */}

                        <div class="" >
                        <Link className="nav-link" to="/Coaching" ><button type="button" class="btn btn-outline-primary">Attendances</button></Link>
                        </div>

                        <div class="Ar">
                            

                        {/* <div class="" >
                        <Link className="nav-link" to="/Remark" ><button type="button" class="btn btn-outline-primary">Remark</button></Link>
                        </div> */}
                        {/* <div class="" >
                        <Link className="nav-link" to="/Rcoaching" ><button type="button" class="btn btn-outline-primary">Remark</button></Link>
                        </div> */}
                        <div class="" style={{marginLeft:'0px',marginRight:'0px', marginTop:'0px'}} >
                            <div class="nav-link dropdown">
                                <a class="btn  nav-link dropdown-toggle btn-outline-primary  d-lg-block" style={{width:'100px'}} data-bs-toggle="dropdown">Remark</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <Link  to="/Rcoaching"><a href="testimonial.html" class="dropdown-item"> Remark</a></Link>
                                    <Link  to="/Ccontact"><a href="blog.html" class="dropdown-item">Contact us</a></Link>
                                    <Link  to="/Jjoin"><a href="detail.html" class="dropdown-item">Join us</a></Link>
                                </div>
                            </div>
                        </div>
                        
                        <div class="" >
                            <button type="nav-item button" style={{marginLeft:'20px', marginTop:'5px'}} class="btn btn-outline-primary" onClick={onLogout}>Logout</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div> 
        
        <br></br><br></br>
       
        <div class="tab-content" style={{padding:'20px', overflow: 'hidden'}}>
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-5">
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count1">-</h5>
                                <h4 class="text-uppercase display-7 text-primary">Total</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count2">-</h5>
                                <h4 class="text-uppercase display-7 text-primary">Coaching</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count3">-</h5>   
                                <h4 class="text-uppercase display-7 text-primary">Beginner</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count4">-</h5>
                                <h4 class="text-uppercase display-7 text-primary">Professional</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count5">-</h5>
                                <h4 class="text-uppercase display-7 text-primary">Recretional</h4>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-4 px-3">
                                <h5 class="text-white mb-0" style={{fontSize:'30px'}} data-toggle="counter-up" id="count6">-</h5>
                                <h4 class="text-uppercase display-7 text-primary">Coach</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>  
            </div>
           
            
    </>
  )
}

