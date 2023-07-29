import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Register.css';

export default function RegisterCoaching() {
  const containerStyle = {
    width: '60%',
    marginLeft: '20%',
  };
  
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Receipt');
  }


  const [user, setUser] = useState([]);
  const [id, setId] = useState([]);
  const [coach, setCoach] = useState([]);
  const [rid, setRid] = useState([]);

  const loadUser = async () => {
    const result = await axios.get('http://localhost/test/getid.php');
    setUser(result.data.phpresult);
    console.log(result.data.phpresult);
    setId(result.data.phpresult[0]['id']);  
  };

  const loadCoach = async () => {
    const result = await axios.get('http://localhost/test/viewcoach.php');
    setCoach(result.data.phpresult);
    console.log(result.data.phpresult);
  };
  const loadRid = async () => {
    const result = await axios.get('http://localhost/test/getidreceipt.php');
    setRid(result.data.phpresult[0]['id']);
    console.log(result.data.phpresult);
  };

  useEffect(() => {
    loadUser();
    loadCoach();
   loadRid(); 
  }, []);

  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [mobile, setMno] = useState('');
  const [address, setAddress] = useState('');
  const [rphno, setRphno] = useState('');
  const [dob, setDOB] = useState('');
  const [clg, setClg] = useState('');
  const [sport, setSport] = useState('');
  const [time, setTime] = useState('');
  const [joiningDate, setJoiningdate] = useState('');
  const [status , setStatus] = useState('');
  const [coachs, setCoachs] = useState([]);

  const setReceipt = () => {
    const url = 'http://localhost/test/setReceipt.php';
    let fData = new FormData(); 
    fData.append('rid', rid);
    fData.append('id', id);
    fData.append('name', name);
    fData.append('time', time );
    fData.append('joiningDate', joiningDate);
    fData.append('amount', 3100);
    fData.append('for', 'Coaching('+status+')');
    axios
      .post(url, fData)
      .then((response) => alert(response.data))
      .catch((error) => {
        console.log(error.toJSON());
      });   
  }


    const onRegister = ()=>{
   /*  alert("Register 😍 Coaching "); */

    if(status.length === 0 ) {
      alert("Please select your Experiance Level!");
    } else if(joiningDate.length === 0 ) {
      alert("Joining Date has left Blank!");
    } else if(name.length === 0 ) {
      alert("Name has left Blank!");
    } else if (fname.length === 0) {
      alert("Son/Daughter's name has been left blank!");
    } else if (address.length === 0) {
      alert('Address has been left blank!');
    } else if (mobile.length === 0) {
      alert('Mobile number has been left blank!');
    } else if (dob.length === 0) {
      alert('Date of birth has been left blank!');
    } else if (sport.length === 0) {
      alert('Sports/Game has been left blank!');
    } else if (time.length === 0) {
      alert('Timing has been left blank!');
    } else if (coachs.length === 0) {
      alert('Select coach has left blank!');
    }else {
    /*   alert('Registration Successful'); */

      const url = 'http://localhost/test/formsubmit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('fname', fname);
      fData.append('mobile', mobile);
      fData.append('address', address);
      fData.append('rphno', rphno);
      fData.append('dob', dob);
      fData.append('clg', clg);
      fData.append('sport', sport);
      fData.append('timing', time);
      fData.append('joiningDate', joiningDate);
      fData.append('coachs', coachs);
      fData.append('status', status);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => {
          console.log(error.toJSON());
      });
       setReceipt(); 
      handleClick();
    }
  };

  return (
    <>
    <div style={{backgroundColor: " "}}>
      <br />
      <br />
      <br />
      <br />
      <div className="container shadow-lg p-5 mb-5 bg-body-tertiary rounded" style={containerStyle}>
        <center>
          <h3 className="sp1">Register (Coaching)</h3>
        </center>
        <br />
      <br />
        <form>
          <div className="mb-3" style={{ display: 'flex' }}>
            <label className="form-check-label me-5">Experience Level:<span style={{color:'red'}}>*</span></label>
            <div className="form-check me-5">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setStatus('Begineer')} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Beginner
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setStatus('Professional')} />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Professional
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining<span style={{color:'red'}}>*</span></label>
            <input type="date" className="form-control" id="tdoj" onChange={(e) => setJoiningdate(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Registration Number<span style={{color:'red'}}>*</span></label>
            {user.map((res) => (
              <input key={res.id} type="number" className="form-control" id="trno" value={res.id} disabled />
            ))}
          </div>
          <div className="mb-3">
            <label className="form-label">Applicant's Name<span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" id="tname" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Son/Daughter of<span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" id="tfname" onChange={(e) => setFname(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Local Address<span style={{color:'red'}}>*</span></label>
            <input type="text" className="form-control" id="taddress" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Residential Phone No.</label>
            <input type="number" className="form-control" id="tphno" onChange={(e) => setRphno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number<span style={{color:'red'}}>*</span></label>
            <input type="number" className="form-control" id="tmno" onChange={(e) => setMno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth<span style={{color:'red'}}>*</span></label>
            <input type="date" className="form-control" id="tdob" onChange={(e) => setDOB(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">School/College (if any)</label>
            <input type="text" className="form-control" id="tclg" onChange={(e) => setClg(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Sport/Game Opted<span style={{color:'red'}}>*</span></label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={sport} onChange={(e) => setSport(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Badminton">Badminton</option>
                <option value="Sketing">Skating</option>
                <option value="Zumba">Zumba</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Timing Opted<span style={{color:'red'}}>*</span></label>
            <div className="timeflex">
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01" value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="5 to 6 am">5 to 6 am</option>
                  <option value="6 to 7 am">6 to 7 am</option>
                  <option value="7 to 8 am">7 to 8 am</option>
                  <option value="8 to 9 am">8 to 9 am</option>
                  <option value="9 to 10 am">9 to 10 am</option>
                  <option value="10 to 11 am">10 to 11 am</option>
                  <option value="11 to 12 am">11 to 12 am</option>
                  <option value="12 to 1 pm">12 to 1 pm</option>
                  <option value="1 to 2 pm">1 to 2 pm</option>
                  <option value="2 to 3 pm">2 to 3 pm</option>
                  <option value="3 to 4 pm">3 to 4 pm</option>
                  <option value="4 to 5 pm">4 to 5 pm</option>
                  <option value="5 to 6 pm">5 to 6 pm</option>
                  <option value="6 to 7 pm">6 to 7 pm</option>
                  <option value="7 to 8 pm">7 to 8 pm</option>
                  <option value="8 to 9 pm">8 to 9 pm</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Select Coach<span style={{color:'red'}}>*</span></label>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect01" value={coachs} onChange={(e) => setCoachs(e.target.value)}>
                <option value="">Choose...</option>
                {coach.map((rest) => (
                  <option value={rest.name}>{rest.name}</option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <center>
            <button type="button" className="btn btn-primary" onClick={onRegister}>
              Submit
            </button>
          </center>
        </form>
      </div>
      </div>
      <br/>
    </>
  );
}
