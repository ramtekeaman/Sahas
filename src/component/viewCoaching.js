import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
import Coachdata from './Coachdatas';
export default function ViewCoaching({}) {

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get("http://localhost/test/view.php");
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
    }
   
    useEffect(() => {
        loadUser();
    }, []);     


    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Coaching (Begineer/Pro)</p>
        <br></br>
        <center>
        <div className='button-adjust'>
        <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
             <Link className="nav-link" to="/ViewCoaching"><button type="button" class="btn btn-outline-primary">Coaching</button></Link>
            <Link className="nav-link" to="/ViewRecretional"><button type="button" class="btn btn-outline-primary">Recreatioal</button></Link>
            <Link className="nav-link" to="/CoachData"><button type="button" class="btn btn-outline-primary">Coach</button></Link>
        {/*     <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Beginner</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Professional</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Update</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Delete</button></Link> */}
        </div>
        </center>
        <br></br><br></br>
        <div id="tablediv">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Parents Name</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Residential Ph.No.</th>
                <th scope="col">Date of birth</th>
                <th scope="col">Sport</th>
                <th scope="col">School/Clg</th>
                <th scope="col">Timing</th>
                <th scope="col">Joining</th>
                <th scope="col">Level</th>
                <th scope="col">Coach</th>
                </tr>
            </thead>
            <tbody>
                {user.map((res)=>
                
                    <tr>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.fname}</td>
                        <td>{res.address}</td>
                        <td>{res.mobile}</td>
                        <td>{res.rphno}</td>    
                        <td>{res.dob}</td>
                        <td>{res.clg}</td>                        
                        <td>{res.sport}</td>
                        <td>{res.timing}</td> 
                        <td>{res.joiningdate}</td>   
                        <td>{res.level}</td>   
                        <td>{res.coach}</td>                  
                    </tr>
                )}
            </tbody>
        </table>
        
        </div>
    </>
  )
}

