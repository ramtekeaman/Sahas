import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Performance({ dbpath }) {
  const [user, setUser] = useState([]);
  const [type1, setType1] = useState("");
  const [filter1, setFilter1] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const isUserLoggedIn = Cookies.get("userLoggedIn");

  useEffect(() => {
    if (isUserLoggedIn !== "true") {
      navigate("/AdminLogin");
    }
  }, [isUserLoggedIn, navigate]);

  const loadUser = async (query) => {
    try {
      setLoading(true);
      const result = await axios.get(dbpath + "Dynamicquery.php?query=" + query);
      setUser(result.data.phpresult || []);
      console.log(result.data.phpresult);
    } catch (error) {
      console.error("Error loading user data", error);
    } finally {
      setLoading(false);
    }
  };
  
  const onSearch = async () => {
    let query = "";
  
    if (type1 === '1') {
      query = 'select * from remark where id ="' + filter1 + '" AND id != 0;';
    } else if (type1 === '2') {
      query = 'select * from remark where name LIKE "%' + filter1 + '%" AND id != 0;';
    } else {
      alert("Please select the proper action");
      return;
    }
  
    // Clear existing user data before making a new search
    setUser([]);
    setLoading(true);
  
    try {
      const result = await axios.get(dbpath + "Dynamicquery.php?query=" + query);
      const userData = result.data.phpresult || [];
  
      if (userData.length === 0) {
        alert("No data found, Please Enter Correct.");
      }
  
      setUser(userData);
    } catch (error) {
      console.error("Error loading user data", error);
    } finally {
      setLoading(false);
    }
  };
  
  const print = () => {
  };
  
  return (
    <>
      <br />
      <br />
      <p className="sp1">Search</p>
      <br />
      <form style={{ display: "flex" }}>
        <div className="mb-3" style={{ marginLeft: "27%", display: "flex" }}>
          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={type1}
              onChange={(e) => setType1(e.target.value)}
            >
              <option value="">Search by...</option>
              <option value="1">ID</option>
              <option value="2">Name</option>
            </select>
          </div>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          {type1 !== "4" && (
            <input
              type="text"
              className="form-control"
              placeholder="Type Here.."
              style={{ height: "38px" }}
              id="taddress"
              onChange={(e) => setFilter1(e.target.value)}
            />
          )}
        </div>
        <br />
        <br />
        <center>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={onSearch}>
            Search
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <Link to="/dashboard">
            <button type="button" className="btn btn-primary">
              Dashboard
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={print}>
              Print
            </button>


        </center>
      </form>
      <br />
      <br />
      <div id="tablediv">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Present / Absent</th>
              <th>Matches Played</th>
              <th>Type</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 ? (
              user.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.name}</td>
                  <td>{res.attendanceOption}</td>
                  <td>{res.matchesPlayed}</td>
                  <td>{res.type2}</td>
                  <td>{res.remark}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
