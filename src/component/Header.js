import React from 'react'
import {
    Link
  } from "react-router-dom";
  import logo from "./images/logo.png"
export default function Header() {
  return (
    <>
    
        <div class="container-fluid bg-dark px-0">
        <div class="row gx-0">
            <div class="col-lg-2 bg-dark d-none d-lg-block">
            <Link  to="/" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <Link to="/" class="m-0 display-7 text-primary text-uppercase"><img src={logo} width='150px' style={{marginTop:'-10px', marginLeft:'-10px'}}></img></Link>
                </Link>
            </div>
            <div class="col-lg-10">
                <div class="row gx-0 bg-secondary d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i class="fa fa-envelope text-primary me-2"></i>
                            <h6 class="mb-0">swamisamarthsports@gmail.com</h6>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-2">
                            <i class="fa fa-phone-alt text-primary me-2"></i>
                            <h6 class="mb-0"> 7058445936, 8767664270</h6>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="d-inline-flex align-items-center py-2">
                            <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle me-2" href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="btn btn-light btn-square rounded-circle" href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" class="navbar-brand d-block d-lg-none">
                        <Link to="/" class="m-0 display-4 text-primary text-uppercase"><img src={logo} width='80px' style={{marginTop:'-10px', marginLeft:'10px'}}></img></Link>
                    </a>
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                        <Link  to="/"><a href="index.html" class="nav-item nav-link active">Home</a></Link>
                            <a  class="nav-item nav-link">About</a>
                        <Link  to="/Dashboard"><a href="class.html" class="nav-item nav-link">Dashboard</a></Link>
                            <a class="nav-item nav-link">Trainers</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                <a  class="dropdown-item">Blog Grid</a> 
                                    <a class="dropdown-item">Blog Detail</a>
                                    <a class="dropdown-item">Testimonial</a>
                                </div>
                            </div>
                            <a  class="nav-item nav-link">Contact</a>
                        </div>
                      
                            <div class="nav-item dropdown">
                                <a class="btn btn-primary py-md-3 nav-link dropdown-toggle px-md-5 d-none d-lg-block" data-bs-toggle="dropdown">Register</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                <Link  to="/RegisterCoaching"><a href="blog.html" class="dropdown-item">Coaching</a></Link>
                                <Link  to="/RegisterRecretional"><a href="detail.html" class="dropdown-item">Recretional</a></Link>
                                <Link  to="/RegisterCoach"><a href="testimonial.html" class="dropdown-item">Coach</a></Link>
                                </div>
                            </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}
