import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import './CSS/Register.css';
import { set } from 'react-hook-form';

export default function RegisterCoach({dbpath}) {
  const containerStyle = {
    width: '60%',
    marginLeft: '20%',
    backgroundColor: 'white'
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate('/Dashboard');
  }

  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const result = await axios.get(dbpath+'getidc.php');
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);
  };

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
  const [name, setName] = useState('');
  const [mobile, setMno] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [rphno, setRphno] = useState('');
  const [dob, setDOB] = useState('');
  const [clg, setClg] = useState('');
  const [exp, setExp] = useState('');
  const [shift, setShift] = useState('');
  const [joiningDate, setJoiningdate] = useState('');
  const [status , setStatus] = useState('');
  const [tournaments , setTournaments] = useState('');


    const onRegister = ()=>{
    if (joiningDate.length === 0) {
      alert('Date of joining has been left blank!');
    } else if(name.length === 0 ) {
      alert("Name has left Blank!");
    }else if (address.length === 0) {
      alert('Address has been left blank!');
    }else if (mobile.length === 0) {
      alert('Mobile number has been left blank!');
    } else if (email.length === 0) {
      alert('Address has been left blank!');
    } else if (dob.length === 0) {
      alert('Date of birth has been left blank!');
    } else if (tournaments.length === 0) {
      alert('Tournaments option has been left blank!');
    } else if (exp.length === 0) {
      alert('Experience option has been left blank!');
    }   else if (shift.length === 0) {
      alert('Timing has been left blank!');
    } else {
     

      const url = dbpath+'cregister.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('joiningdate', joiningDate)
      fData.append('mobile', mobile);
      fData.append('address', address);
      fData.append('email', email);
      fData.append('dob', dob);
      fData.append('exp', exp);
      fData.append('shift', shift);
      fData.append('tournaments', tournaments);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => {
          console.log(error.toJSON());
        });
      handleClick();
    }
  };

  return (
    <>z
    <div className='main_div' style={{backgroundColor:'#222429'}}>
      <br />
      <br />
      <br />
      <br />
      <div className="container shadow-lg p-5 bg-body-tertiary rounded" style={containerStyle}>
        <center>
          <h3 className="sp1">Register (Coach)</h3>
        </center>
        <br />
    
        <form>
          
          <div className="mb-3">
            <label className="form-label">Registration Number<span style={{color:'red'}}>*</span></label>
            {user.map((res) => (
              <input key={res.id} type="number" className="form-control" id="trno" value={res.id} disabled />
            ))}
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining<span style={{color:'red'}}>*</span></label>
            <input type="date" className="form-control" id="tdoj" onChange={(e) => setJoiningdate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Coach Name<span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" id="tname" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Local Address<span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" id="taddress" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Number<span style={{color:'red'}}>*</span></label>
            <input type="number" className="form-control" id="tmno" onChange={(e) => setMno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address<span style={{color:'red'}}>*</span></label>
            <input type="email" className="form-control" id="temail" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth<span style={{color:'red'}}>*</span></label>
            <input type="date" className="form-control" id="tdob" onChange={(e) => setDOB(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Tournaments<span style={{color:'red'}}>*</span></label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={tournaments} onChange={(e) => setTournaments(e.target.value)}>
                <option value="">Choose...</option>
                <option value="None">None</option>
                <option value="State Level">State Level</option>
                <option value="Central Level">Central Level</option>
                <option value="National Level">National Level</option>
                <option value="International Level">International Level</option>
                <option value="etc.">etc.</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Experience<span style={{color:'red'}}>*</span></label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={exp} onChange={(e) => setExp(e.target.value)}>
                <option value="">Choose...</option>
                <option value="No Experience">No Experience</option>
                <option value="1 Year+">1 Year+</option>
                <option value="2 Year+">2 Year+</option>
                <option value="3 Year+">3 Year+</option>
                <option value="5 Year+">5 Year+</option>
                <option value="10 Year+">10 Year+</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Shift<span style={{color:'red'}}>*</span></label>
            <div className="time">
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" value={shift} onChange={(e) => setShift(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="Morning">Morning</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <br />
          <center>
            <button type="button" className="btn btn-primary" onClick={onRegister}>
              Submit
            </button> &nbsp;&nbsp;&nbsp;
            <Link to="/dashboard"><button type="button" className="btn btn-primary">
              Dashboard
            </button></Link>
          </center>
        </form>
      
      </div>
      
      <br/><br/><br/><br/><br/>
      </div>
    </>
  );
}
