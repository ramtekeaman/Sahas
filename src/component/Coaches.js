import React from 'react'
import styled from 'styled-components';

import Coach1 from "./images/CoachesAndMentors/DBarde.jpg";
import Coach2 from "./images/CoachesAndMentors/KSalve.jpg";
import Coach3 from "./images/CoachesAndMentors/PYadav.jpg";

const Coaches = () => {
  return (
    // <div class="container-fluid p-5" id="coaches">
    //       <div class="text-center">
    //         <h1 class="text-black display-5 text-uppercase mb-0">
    //           Our Coaches / Trainers
    //         </h1>
    //       </div>

    //       <div class="tab-class text-center">
    //         {/* new */}
    //         <Ys>
    //           <div>
    //             {/* <!-- <h1>CARDS</h1> --> */}
    //             <div className="parent">
    //               <div className="container">
    //                 <div
    //                   className="cards"
    //                   style={{
    //                     boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
    //                   }}
    //                 >
    //                   <div className="card-img">
    //                     <img src={Coach1} alt="Salman Khan" />
    //                   </div>
    //                   <div className="card-body">
    //                     <h5>DHANANJAY BARDE</h5>
    //                     <p>
    //                       EX- VCA PLAYER <br /> ( VCA ACADEMY )
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="container">
    //                 <div
    //                   className="cards"
    //                   style={{
    //                     boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
    //                   }}
    //                 >
    //                   <div className="card-img">
    //                     <img src={Coach2} alt="Salman Khan" />
    //                   </div>
    //                   <div className="card-body">
    //                     <h5>KULDEEP SALVE</h5>
    //                     <p>
    //                       EX- VCA PLAYER <br /> ( OMAN A TEAM )
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="container">
    //                 <div
    //                   className="cards"
    //                   style={{
    //                     boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
    //                   }}
    //                 >
    //                   <div className="card-img">
    //                     <img src={Coach3} alt="Salman Khan" />
    //                   </div>
    //                   <div className="card-body">
    //                     <h5>PRADEEP KUMAR YADAV</h5>
    //                     <p
    //                       className="text-primar card-text"
    //                       style={{ color: " rgb(80 80 80)" }}
    //                     >
    //                       ICC LEVEL 1 <br />( COACH )
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </Ys>

    //         <div class="tab-content">
    //           <div id="tab-1" class="tab-pane fade show p-0 active">
    //             <div
    //               class="row g-3"
    //               style={{ display: "flex", justifyContent: "center" }}
    //             ></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <>
        <Ys>
        <div class="container text-center py-5">
        <h3 >Meet Our Expert Coaches</h3>
        <br />
        <p class="text-muted" style={{fontWeight:'500'}}>At Sahas Cricket Club, we pride ourselves on having a team of highly skilled and experienced coaches dedicated to helping you reach your full potential. Our coaches are passionate about guiding individuals towards their goals, whether it's personal development, career advancement, or enhancing specific skills</p>
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
            <div class="col">
              <div class="card">
                <img src={Coach1} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">DHANANJAY BARDE</h5>
                  <p class="card-text">EX- VCA PLAYER ( VCA ACADEMY )</p>
                </div>
                {/* <div class="d-flex justify-content-evenly p-4">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-envelope-fill"></i>
                    <i class="bi bi-whatsapp"></i>
                </div> */}
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Coach2} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">KULDEEP SALVE</h5>
                  <p class="card-text">EX- VCA PLAYER ( OMAN A TEAM )</p>
                </div>
                {/* <div class="d-flex justify-content-evenly p-4 link">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-envelope-fill"></i>
                    <i class="bi bi-whatsapp"></i>
                </div> */}
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={Coach3} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">PRADEEP KUMAR YADAV</h5>
                  <p class="card-text">ICC LEVEL 1 ( COACH )</p>
                </div>
                {/* <div class="d-flex justify-content-evenly p-4">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-envelope-fill"></i>
                    <i class="bi bi-whatsapp"></i>
                </div> */}
              </div>
            </div>
         
          </div>
    </div>
    </Ys>
    </>
  )
}

export default Coaches



const Ys = styled.div`

    padding: 0;
    margin: 0;
    box-sizing: border-box;

body{
    background-color: aliceblue;
}

.card-img-top{
    /* border-radius: 50%; */
    height: 400px !important;
    width: 100% !important;
    /* position: relative;
    left: 80px;
    top: -80px; */
    object-fit: cover;
}
.card{
    border-radius: 0;
    cursor: pointer;
    margin-top: 50px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    padding: 20px;
}
.card:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

}
.card-body{
    margin-top: -50px;
}
.bi{
    font-size: 25px;
}
@media only screen and (max-width: 600px) {
    .card-img-top{
        
        left: 48px !important;
       
    }
  }
`;