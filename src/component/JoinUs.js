import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ShowFooter_Context from './ShowFooter_Context';


const JoinUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setmobile] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost/test/joinus.php', {
            name: name,
          email: email,
          mobile: mobile,
          age: age,
          gender: gender,
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
  
        console.log('Server Response:', response.data);
        alert('Thank You for joining !');

  
        if (response.data.includes('Thank You')) {
          // Reset form fields after successful submission
          setName('');
          setEmail('');
          setmobile('');
          setAge('');
          setGender('');
        } else {
          alert('Failed to submit . Please try again.');
        }
      } catch (error) {
        console.error('Failed to submit . Please try again.');
      }
    
    };
    const{setShowFooter} = useContext(ShowFooter_Context);
    // console.log(showFooter);
  
    useEffect(() => {
      setShowFooter(false);
      // Return a cleanup function to reset showFooter when leaving the component
      return () => {
        setShowFooter(true);
      };
    }, [setShowFooter]); // Make sure to include setShowFooter in the dependencies array
  
  

  return (
    <div className="container" style={{marginTop:'20px', marginBottom: '20px'}}>
    <div className="row justify-content-center">

      <div className="col-md-6">
      <div className="container">
      <h1 className="text-center mt-5 mb-4">Why to Join Sahas Cricket Club ?</h1>
      <br /><br />
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Premier Training Facilities</h2>
          <p>Our state-of-the-art facilities, including cutting-edge equipment and expert coaching staff, provide the ideal environment for honing your skills and maximizing your potential.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Experienced Coaches</h2>
          <p>Benefit from the guidance of experienced coaches who are dedicated to helping you develop both as a cricketer and as an individual. Our coaches tailor training programs to suit your goals and aspirations, ensuring personalized attention and support.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Supportive Community</h2>
          <p>Join a community of passionate cricket lovers who share your enthusiasm for the game. Forge lifelong friendships, celebrate victories together, and support each other through the challenges, creating memories that will last a lifetime.</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2 style={{color:'graytext'}}>Opportunities for Growth</h2>
          <p>Whether you aspire to play competitively, pursue a career in cricket, or simply want to improve your skills for recreational play, Sahas Cricket Club provides the resources and opportunities you need to achieve your goals.</p>
        </div>
      </div>
    </div>
      </div>
      <div className="col-md-6" >
        <form onSubmit={handleSubmit} className="p-5 border rounded shadow-lg bg-light" style={{marginTop:'30px'}} >
          <h2 className="mb-4 text-center">Join Us</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
  <label htmlFor="mobile" className="form-label">Phone Number:</label>
  <input
    type="text"
    id="mobile"
    className="form-control"
    value={mobile}
    onChange={(e) => setmobile(e.target.value)}
    pattern="[0-9]*"  // Only allows numeric input
    inputMode="numeric"  // Provides a numeric keyboard on mobile devices
    required
  />
</div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      );
    };
export default JoinUs;