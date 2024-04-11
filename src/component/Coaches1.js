import React, { useState } from 'react'
import Coach1 from "./images/CoachesAndMentors/DBarde.jpg";
import Coach2 from "./images/CoachesAndMentors/KSalve.jpg";
import Coach3 from "./images/CoachesAndMentors/PYadav.jpg";
import Coach4 from "./images/CoachesAndMentors/parik.png";
import { Button, Modal, Table } from 'react-bootstrap';

import backgroundImage from './images/ProductSec.jpg';

import bg from './Gallery Images/gallery_grp.png'
import bg1 from './Gallery Images/team.jpeg'

import 'aos/dist/aos.css'
import AOS from 'aos'

import styled from  'styled-components';
import { Link } from 'react-router-dom';

const Coaches1 = () => {
    AOS.init({
        duration: 650,
        once: false
      });
      const teamMembers = [
        {
          name: "DHANANJAY BARDE",
          imageSrc: Coach1,
          role: "Batting Coach and Fielding Coach",
          experience: "EX- VCA PLAYER (VCA ACADEMY)",
          bio: "Passionate about coaching young talents, expert in developing batting techniques, and known for improving fielding skills with a wealth of experience from VCA Academy.",
          players: [
            {
              name: "Rahul Sharma",
              represent: 'VCA U-14',
              position: "Batsman"
            },
            {
              name: "Amit Patel",
              represent: 'VCA U-14',
              position: "All-rounder"
            }
          ]
        },
        {
          name: "KULDEEP SALVE",
          imageSrc: Coach2,
          role: "Batting Coach and Fielding Coach",
          experience: "EX- VCA PLAYER (OMAN A TEAM)",
          bio: "Specializes in developing batting techniques, renowned for improving fielding skills, and brings extensive experience from Oman A Team.",
          players: [
            {
              name: "Ankit Singh",
              represent: 'VCA U-14',
              position: "Batsman"
            },
            {
              name: "Rajesh Kumar",
              represent: 'VCA U-14',
              position: "Wicketkeeper"
            }
          ]
        },
        {
          name: "PRADEEPKUMAR YADAV",
          imageSrc: Coach3,
          role: "Cricket Coach and Sports Fitness Instructor",
          experience: "14 years in coaching, ICCA certified coach, former player",
          bio: "Pradeep Kumar Yadav is an experienced cricket coach and sports fitness instructor based in Nagpur. With 14 years of coaching experience and ICCA certification, he has a strong background in player development.",
          players: [
            {
              name: "Samarth Nathani",
              represent: 'VCA U-14',
              position: "Batsman"
            },
            {
              name: "Sharddha Nabira",
              represent: 'VCA U-15, U-19',
              position: "All-rounder"
            },
            {
              name: "Aarohi Bambode",
              represent: 'VCA U-19, U-23, Seniors',
              position: "All-rounder"
            },
            {
              name: "Shan Parihar",
              represent: 'State Level',
              position: "Bowler"
            },
            {
              name: "Sanskruti Gullane",
              represent: 'Arunachal Pradesh (BCCI U-19)',
              position: "Batsman"
            },
            {
              name: "Akshay Puri",
              represent: 'Singapore (T20 International)',
              position: "Bowler"
            }
          ]
        },
        {
          name: "Parikshit Upadhyay",
          imageSrc: Coach4,
          role: "Batting Coach and Fielding Coach",
          experience: "BCCI Level A qualified, Vca Affiliated coach (Level O qualified), Got certification in Biomechanics (Exercise science) and More than 5 years of coaching experience",
          bio: "Parikshit Upadhyay is a highly qualified cricket coach with certifications from BCCI (Level A) and VCA (Level O) affiliations. He holds specialized training in Biomechanics (Exercise Science) and brings over 5 years of extensive coaching experience. Parikshit is dedicated to nurturing young talent and helping players develop advanced skills both on and off the field.",
          players: [
            {
              name: "Nikhil Deshmukh",
              represent: 'VCA U-14',
              position: "Bowler"
            },
            {
              name: "Vivek Sharma",
              represent: 'VCA U-14',
              position: "Batsman"
            },
            {
              name: "Rohan Singh",
              represent: 'VCA U-14',
              position: "All-rounder"
            }
          ]
        }
      ];
      
      
      console.log(teamMembers);
      
      const [showModal, setShowModal] = useState(false);
      const [selectedMember, setSelectedMember] = useState(null);

      const handleShowProfile = (member) => {
        setSelectedMember(member);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMember(null);
      };    
  return (
    <div>
    {/* <Abc>
        <div id="aboutid">
          <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: `url(${bg})`, filter: 'brightness(80%)', objectFit:'cover'}}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="overlay"></div>
            <div className="overlay-2"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9 ftco-animate pb-5 text-center">
                  <p className="breadcrumbs">
                    <span className="mr-2">
                      <Link to={'/'}>
                        Home <i className="fa fa-chevron-right"></i>
                      </Link>
                    </span>{" "}
                    <span>
                      Coaches <i className="fa fa-chevron-right"></i>
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Coaches</h1>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </div>
      </Abc> */}
      {/* <!-- Team 1 - Bootstrap Brain Component --> */}
      <section className="bg-light py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Our Team</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0 gx-xxl-5" style={{justifyContent:'center'}}>
          {/* Individual team member cards */}
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '20px', maxWidth:'70%' }}>
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0 shadow-sm position-relative">
                  <figure className="m-0 p-0">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={member.imageSrc}
                      alt={member.name}
                      style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                      onClick={() => handleShowProfile(member)}
                    />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">{member.name}</h4>
                      <p className="text-secondary mb-0">{member.role}</p>
                    {/* <div className="card-footer bg-transparent text-center">
                  <button className="btn btn-primary" onClick={() => handleShowProfile(member)}>View Profile</button>
                </div> */}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal show={showModal} onHide={handleCloseModal} centered  size='lg'>
          {/* <Modal.Header closeButton>
            <Modal.Title>{selectedMember && selectedMember.name}</Modal.Title>
          </Modal.Header> */}
          <Modal.Body style={{position:'relative',}}>
            <span className="close" onClick={ handleCloseModal} style={{position:'absolute',top:'5px', right:'7px', fontSize:'30px', cursor:'pointer', color:'white', backgroundColor:'rgb(180 73 73)', display:'flex', justifyContent:'center', alignItems:'center', height:'30px', alignSelf:'center', borderRadius:'10px', padding:'0 3px 5px 3px',}}>&times;</span>
            <div className="row">
              <div className="col-md-4 text-center mb-3 mb-md-0"> {/* Image column */}
                <img
                  src={selectedMember?.imageSrc}
                  alt={selectedMember?.name}
                  className="img-fluid "
                  style={{ maxHeight: '250px', width: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-8" style={{display:'flex', justifyContent:'center', alignItems:'center',}}> {/* Table column */}
                <Div>
                <Table striped bordered hover responsive size='lg' style={{width:'100%'}}>
                  <tbody style={{width:'100%'}}>
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>{selectedMember?.name}</td>
                    </tr>
                    <tr>
                      <td><strong>Experience:</strong></td>
                      <td>{selectedMember?.experience}</td>
                    </tr>
                    <tr>
                      <td><strong>Role:</strong></td>
                      <td>{selectedMember?.role}</td>
                    </tr>
                    <tr>
                      <td><strong>Bio:</strong></td>
                      <td>{selectedMember?.bio}</td>
                    </tr>
                    <tr>
                      <td><strong>Player Made under his Guidance:</strong></td>
                      <td>
                        {selectedMember?.players ? (
                        <ul>
                            {selectedMember.players.map((player, index) => (
                            <li key={index}>
                                {player.name} ({player.represent}) - {player.position}
                            </li>
                            ))}
                        </ul>
                        ) : (
                        <span>No players listed under this coach.</span>
                        )}
                    </td>
                    </tr>
                  </tbody>
                </Table>
                </Div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </section>
    </div>
  )
}

export default Coaches1


const Div = styled.div`
width: 100%;
.table-responsive{
    width: 100%;
}
`;


const Abc = styled.div`
  .hero-wrap {
    width: 100%;
    height: 300px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 0;
  }
  @media (max-width: 991.98px) {
    .hero-wrap {
      background-position: center center !important;
    }
  }
  .hero-wrap.hero-wrap-2 {
    height: 300px;
    position: relative;
    background-position: center center !important;
  }
  .hero-wrap.hero-wrap-2 .overlay {
    width: 100%;
    opacity: 0.2;
    background: #000000 !important;
    z-index: -1;
  }
  .hero-wrap.hero-wrap-2 .overlay-2 {
    opacity: 0.3;
  }
  .hero-wrap.hero-wrap-2 .slider-text {
    height: 300px;
  }
  .hero-wrap .overlay {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    opacity: 0;
    background: #000000;
  }
  .hero-wrap .overlay-2 {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 0.5;
    background: #9acb56;
    background: -moz-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, #9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      color-stop(100%, rgba(255, 255, 255, 0))
    );
    background: -webkit-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -o-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -ms-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      to bottom,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9acb56', endColorstr='#ffffff', GradientType=0 );
  }
  .hero-wrap .slider-text {
    height: 90px;
    color: rgba(255, 255, 255, 0.904);
    z-index: 3;
  }
  .hero-wrap .slider-text .subheading {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.904);
    display: inline-block;
    margin-bottom: 1px;
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text h1 {
    font-size: 60px;
    color: #fff;
    line-height: 1;
    font-weight: 300;
    font-family: "Poppins", Arial, sans-serif;
  }
  @media (max-width: 991.98px) {
    .hero-wrap .slider-text h1 {
      font-size: 36px;
    }
  }
  .hero-wrap .slider-text p {
    font-weight: 400;
  }
  .hero-wrap .slider-text p strong {
    font-weight: 700;
  }
  .hero-wrap .slider-text p strong a {
    color: #000000;
  }
  .hero-wrap .slider-text .breadcrumbs {
    font-size: 18px;
    margin-bottom: 20px;
    z-index: 99;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.904);
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text .breadcrumbs span {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span i {
    color: rgba(255, 255, 255, 0.904);
    font-size: 12px;
  }
  .hero-wrap .slider-text .breadcrumbs span a {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover,
  .hero-wrap .slider-text .breadcrumbs span a:focus {
    color: #6cae22;
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover i,
  .hero-wrap .slider-text .breadcrumbs span a:focus i {
    color: #6cae22;
  }
  .hero-wrap .slider-text .bread {
    font-weight: 300;
    color: #fff;
    font-size: 50px;
    text-transform: capitalize;
  }
`;
