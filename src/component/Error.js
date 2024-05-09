import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../Context/AdminContext';

const Error = () => {
  
  const{setIsAdmin} = useContext(AdminContext);
  useEffect(()=>{
    setIsAdmin(false)
  },[])

  return (
    <div>
<section class="py-3 py-md-5 d-flex justify-content-center align-items-center" style={{minHeight:'500px'}}>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
            <span class="display-1 fw-bold">4</span>
            <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
            <span class="display-1 fw-bold bsb-flip-h">4</span>
          </h2>
          <h3 class="h2 mb-2">Oops! You're lost.</h3>
          <p class="mb-5">The page you are looking for was not found.</p>
          <Link to={'/'} class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="#!" role="button">Back to Home</Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Error
