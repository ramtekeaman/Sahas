import axios from "axios";
import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowFooter_Context from "./ShowFooter_Context";
const ContactUs = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    setInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://localhost/test/contact.php', {
  //       name: input.name,
  //       email: input.email,
  //       message: input.message,
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  
  //     console.log('Server Response:', response.data);
  
  //     if (response.data.includes('Thank You')) {
  //       alert('Thank You for Contacting with Us! ');
  //     } else {
  //       alert('Failed to submit message. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Failed to submit message. Please try again.');
  //   }
  
  //   setInput({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost/test/contact.php', {
        name: input.name,
        email: input.email,
        message: input.message,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      console.log('Server Response:', response.data);
      alert('Thank You for Contacting with Us!');

      if (response.data.includes('Thank You')) {
        // alert('Thank You for Contacting with Us!');
      } else {
        alert('Failed to submit message. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit message. Please try again.');
    }
  
    setInput({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid bg-white text-white py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <section>
            <div className="container">
              <h1 className="text-center">Contact Us</h1>
              <p className="text-center text-dark">
              Thank you for your interest in Sahas Cricket Club! Whether you're a budding cricketer seeking top-tier training or a seasoned enthusiast looking to hone your skills, we're here to support your cricketing journey every step of the way.
              </p>
              <p className="text-center text-dark">
                Any question or remarks? Just write us a message!
              </p>
              <form className="form" onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <div className="mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    onChange={handleInput}
                    value={input.name}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="Enter a Valid Email Address"
                    name="email"
                    onChange={handleInput}
                    value={input.email}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                    name="message"
                    onChange={handleInput}
                    value={input.msg}
                  ></textarea>
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
              <p className="text-center mt-3 text-dark">
                For Joining us{' '}
                <Link to="/JoinUs" className="text-decoration-none">
                  Join us
                </Link>
              </p>
            </div>
          </section>
            {/* links */}
            <section style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div class="col-lg-5 px-5 ">
                        <div class="d-inline-flex align-items-center py-2" >
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="https://twitter.com/i/flow/login?redirect_after_login=%2FSahasCricket">
                                <i class="fab fa-twitter"></i>
                            </a>
                            {/* <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a> */}
                            <a class="btn btn-dark btn-square rounded-circle me-2" href="https://www.instagram.com/p/Cv5EtKvPzRe/?hl=en">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-dark btn-square rounded-circle" href="https://www.youtube.com/@sahascricketclub">
                                <i class="fab fa-youtube"></i>
                            </a>
                              &nbsp;
                            <a class="btn btn-dark btn-square rounded-circle" href="https://wa.me/9834583306" target="_blank">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
          </section>
        </div>

        <div className="col-md-6" style={{maxWidth:'700px', height:'500px'}}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Google Map"
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0978232948655!2d79.06705614221455!3d21.108665816119604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfc4d5197c9f%3A0x7c7ca67dad4d9e44!2sSahas%20cricket%20club!5e0!3m2!1sen!2sin!4v1708079454291!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, width:'100%', height:'500px', borderRadius:'7px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    );
};

export default ContactUs;

const Contact_gallery = styled.section`
  .gallery {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    max-width: 1200px;
    margin: 10px auto;
    padding: 0 10px;
  }

  .gallery__item {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .gallery__item > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    transition: 0.2s ease-in-out;
  }

  .gallery__item > img:hover {
    transform: scale(1.05);
    transition: 0.2s ease-in-out;
  }

  .gallery__item--hor {
    grid-column: span 2;
  }

  .gallery__item--vert {
    grid-row: span 3;
  }

  .gallery__item--lg {
    grid-column: span 2;
    grid-row: span 2;
  }
`;


       