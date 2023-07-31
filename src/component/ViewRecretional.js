import axios from 'axios';
import "./CSS/Dashboard.css"
import  {useState, useEffect} from 'react';
import {
    Link
  } from "react-router-dom";
export default function ViewRecretional({dbpath}) {

    const [user, setUser] = useState([]);
    const loadUser = async () => {
        const result = await axios.get(dbpath+"viewrecretional.php");
        setUser(result.data.phpresult);
        console.log(result.data.phpresult); 
    }
    useEffect(() => {
        loadUser();
    }, []);     


    return (    
    <>
        <br></br><br></br>
        <p className='sp1' >Recretional</p>
        <br></br>
        <div className='button-adjust'>
        <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
             <Link className="nav-link" to="/ViewCoaching"><button type="button" class="btn btn-outline-primary">Coaching</button></Link>
            <Link className="nav-link" to="/ViewRecretional"><button type="button" class="btn btn-outline-primary">Recreatioal</button></Link>
            <Link className="nav-link" to="/CoachData"><button type="button" class="btn btn-outline-primary">Coach</button></Link>
           {/*  <Link className="nav-link" to="/Dashboard"><button type="button" class="btn btn-outline-primary">Dashboard</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Update</button></Link>
            <Link className="nav-link" ><button type="button" class="btn btn-outline-primary">Delete</button></Link> */}
        </div>
        <br></br><br></br>
        <div className='table-responsiv'>
        <table class="table">
            <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Son/Daughter of</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Residential Ph.No.</th>
                  <th scope="col">DOB</th>
                  <th scope="col">College </th>
                  <th scope="col">Sport</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Joining Date</th>
                  <th scope="col">Timestamp </th>
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
                        <td>{res.timestamp}</td> 
                    </tr>

                )}
            </tbody>
            </table>
        </div>
    </>
  )
}

