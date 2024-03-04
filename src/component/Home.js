import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img1 from "./Gallery Images/gallery_img.png";
import img2 from "./Gallery Images/gallery_grp1.png";
import img5 from "./Gallery Images/gallery_grp.png";
import img4 from "./Gallery Images/gallery_img4.png";
import img3 from "./images/womes_cricket.png";
import img12 from "./images/pd_student.png";
import img6 from "./Gallery Images/player1.jpg";
import img7 from "./Gallery Images/gallery_img123.png";
import img8 from "./Gallery Images/gallery_img12.png";
import img9 from "./Gallery Images/gallery_img13.png";
import img10 from "./Gallery Images/gallery_img14.png";
import img11 from "./Gallery Images/gallery_img15.png";
import img13 from "./images/PavyaAndSiddhi.png";
import { Link } from "react-router-dom";
import Navigate_Context from "../Context/Navigate_Context";

import arrow from "./images/arrow.png";

import slide1 from "./images/Slides/gallery_grp.png";
import slide2 from "./images/Slides/gallery_grp1.png";
import slide3 from "./images/Slides/club_carosel1.jpeg";
import slide4 from "./images/Slides/womes_cricket.png";

import Coach1 from "./images/CoachesAndMentors/DBarde.jpg";
import Coach2 from "./images/CoachesAndMentors/KSalve.jpg";
import Coach3 from "./images/CoachesAndMentors/PYadav.jpg";


// import { createPortal } from "react-dom";
// import { Modal } from "./components/Modal";

// import Loader from 'react-loader-spinner';
// import { Loader } from 'react-loader-spinner';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

export default function Home({ dbpath }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeItem, setActiveItem] = useState(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
      setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  // const [open, setOpen] = useState(false);

  const { about, setAbout, navi, setNavi, ids, setIds, handalaboutclick } =
    useContext(Navigate_Context);
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    // Check if it's not the initial render
    if (about) {
      const element = document.getElementById(ids);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setAbout(!about);
        setNavi(!navi);
      }
    } else {
      setInitialRender(true);
    }
  }, [about]);

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 5) + 1); // Cycle through slides 1 to 5
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, []);

  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const [currentOffset, setCurrentOffset] = useState(0);
  const windowSize = 3;
  const paginationFactor = 220;
  const items = [
    { name: "Kin Khao", tag: ["Thai"] },
    { name: "Jū-Ni", tag: ["Sushi", "Japanese", "$$$$"] },
    { name: "Delfina", tag: ["Pizza", "Casual"] },
    { name: "San Tung", tag: ["Chinese", "$$"] },
    { name: "Anchor Oyster Bar", tag: ["Seafood", "Cioppino"] },
    { name: "Locanda", tag: ["Italian"] },
    { name: "Garden Creamery", tag: ["Ice cream"] },
  ];

  const atEndOfList =
    currentOffset <= paginationFactor * -1 * (items.length - windowSize);
  const atHeadOfList = currentOffset === 0;

  const moveCarousel = (direction) => {
    if (direction === 1 && !atEndOfList) {
      setCurrentOffset((prevOffset) => prevOffset - paginationFactor);
    } else if (direction === -1 && !atHeadOfList) {
      setCurrentOffset((prevOffset) => prevOffset + paginationFactor);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!atEndOfList) {
        setCurrentOffset((prevOffset) => prevOffset - paginationFactor);
      } else {
        // If at end, move back to the beginning smoothly
        setCurrentOffset(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentOffset, atEndOfList]); // Include atEndOfList in the dependency array

  const [text, setText] = useState("");
  const initialText = "J0oin Sahas Cricket Club!";
  const typingSpeed = 100; // Adjust typing speed here

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < initialText.length) {
        setText((prevText) => prevText + initialText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };

  return (
    <>
      <div>
        {/* {loading && <Loader_Spinner type="Puff" color="#00BFFF" height={100} width={100}> */}
        {/* <div class="newtons-cradle">
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
        </div> */}
        {/* </Loader_Spinner>} 
        
        {!loading && <div> */}

        {open && <ModalContainer>
            <div>
                <div className="imgContain">
                    <button onClick={handleClose}>Close</button>
                    <img src={img2} alt="popUp Img" />
                </div>
                
            </div>
    </ModalContainer>}

        {/* <!-- Carousel Start --> */}
        <div class="container-fluid p-0 mb-5" id="default">
          <div
            id="header-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="w-100 h-100"
                  src="img/club_carosel1.png"
                  alt="Image"
                />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center p-5">
                  <div class="p-3" style={{ maxWidth: "900px" }}>
                    {/*  <h5 class="text-white text-uppercase">Best Badminton Club</h5> */}
                    {/* <h1 class="display-2 text-white text-uppercase mb-md-4">Beyond Limits : Join Sahas Cricket Club!</h1> */}
                    <h1 className="display-2 text-white text-uppercase mb-md-4">
                      <span className="typing-animation">
                        Beyond Limits : {text}
                      </span>
                    </h1>
                    <Link
                      to={"/JoinUs"}
                      class="btn btn-primary py-md-3 px-md-5 me-3"
                    >
                      Join Us
                    </Link>
                    <Link
                      to={"/ContactUs"}
                      class="btn btn-light py-md-3 px-md-5"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*     <!-- Carousel End -->


    <!-- About Start --> */}
        <div
          class="container-fluid p-3"
          style={{
            boxShadow: "0px 1px 48px -8px rgba(0,0,0,0.27)",
            overflowX: "hidden",
          }}
          id="aboutid"
        >
          <div class="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div
                className="position-relative"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  className="position-absolute w-100 h-100 rounded img-fluid"
                  src="/img/club_img.jpg" // Assuming img folder is at the root level of your project
                  style={{}}
                  alt="Club Image"
                />
              </div>
            </div>

            <div class="col-lg-7" style={{ padding: "25px" }}>
              <div class="mb-4">
                {/* <h5 class="text-primary text-uppercase">About Us</h5> */}
                <h1 class="display-6 text-uppercase mb-0">
                  Discover Sahas Cricket Club: Where Passion and Excellence
                  Unite"
                </h1>
              </div>
              <h4 class="text-body mb-4"></h4>
              <p class="mb-4">
                Here passion meets purpose on the cricket pitch! Sahas Cricket
                Club is a renowned cricketing institution dedicated to providing
                top-notch training and coaching facilities for individuals aged
                14 to 29, as well as catering to the needs of older enthusiasts
                and fostering the growth of women's cricket. Our club serves as
                a hub for cricket lovers, offering a supportive environment
                where players of all ages and skill levels can come together to
                learn, grow, and excel in the sport they love. What sets Sahas
                Cricket Club apart is our unwavering commitment to excellence.
                Our team of experienced coaches brings a wealth of knowledge and
                expertise to the field, ensuring that every player receives
                personalized attention and guidance tailored to their skill
                level and aspirations. Whether you're a beginner looking to
                learn the basics or a seasoned player aiming to refine your
                technique, our comprehensive training programs are designed to
                help you reach your full potential.
              </p>

              <Link
                to={"/AboutUs"}
                class="btn btn-primary py-md-3 px-md-5 me-3"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <br />
        <br />
        <center>
          <h1 class="display-5 text-uppercase mb-0">Top Player Glories</h1>
        </center>

        <div
          class="container-fluid programe position-relative px-5 mt-5"
          style={{ marginBottom: "135px" }}
          id="achievements"
        >
          <div
            class="row g-5 gb-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              class="col-lg-4 col-md-6"
              style={{ width: "20rem", height: "22rem" }}
            >
              <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow1(true);
                }}
                onMouseLeave={() => {
                  setShow1(false);
                }}
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src="/img/disha_player2 (2).png"
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{
                    background: "rgba(34, 36, 41, 0.96)",
                    width: "100%",
                  }}
                >
                  <h5 class="text-uppercase text-light">Disha Kasat</h5>
                  {show1 && (
                    <p
                      style={{
                        maxHeight: "244px",
                        width: "100%",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      "Disha Kasat, a right-handed batter from Amravati,
                      Maharashtra, has etched her name in cricket's annals with
                      her remarkable consistency. Her journey is a testament to
                      perseverance and talent, highlighted by two impressive
                      half-centuries for India A Women in the Senior Women's One
                      Day Challenger Trophy 2021. Disha's century for Vidarbha
                      Women in Visakhapatnam was not only a display of skill but
                      also a match-winning performance. Selected for the Central
                      Zone team in the Senior Women Inter-Zonal T20 and by the
                      Royal Challengers Bangalore in the WPL, Disha's rise is a
                      testament to her potential. She symbolizes the power of
                      dedication and hard work in achieving one's dreams."
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              style={{ width: "20rem", height: "22rem" }}
            >
              <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow(true);
                }}
                onMouseLeave={() => {
                  setShow(false);
                }}
              >
                <div class="position-relative overflow-hidden rounded">
                  <img class="img-fluid w-100" src="img/player1.jpg " alt="" />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                >
                  <h5 class="text-uppercase text-light">Lokesh Marghade</h5>
                  {show && (
                    <p style={{ color: "#989898", fontSize: "12.5px" }}>
                      "The Vidarbha captain, who was born with a twisted ankle,
                      has demonstrated consistency in every competition he
                      participates in recent days. In December 2021, Marghade
                      also led the Challenger Trophy in runs scored. He had
                      played four games in Chandigarh and scored 169 runs,
                      including two fifties. "I think the advice I'm getting
                      from my elders at Sahas Cricket Club is really beneficial
                      to me. "My goal is to improve myself so that I can make a
                      strong return to the Indian team," he stated."
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              style={{ width: "20rem", height: "22rem" }}
            >
              <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow2(true);
                }}
                onMouseLeave={() => {
                  setShow2(false);
                }}
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src="/img/SiddhiAndAroohi.png"
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                >
                  <h5 class="text-uppercase text-light">Siddhi & AArohi</h5>
                  {show2 && (
                    <div
                      style={{
                        maxHeight: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      <p style={{ color: "#989898", fontSize: "12.5px" }}>
                        "Siddhi and Arohi, your achievements are truly
                        remarkable! Your hard work, dedication, and perseverance
                        have paid off, bringing immense pride to your family and
                        community. It's been a privilege to witness your growth
                        and progress, fueled by countless hours of practice and
                        determination. Your humility and respect towards your
                        coaches, the game, and the learning process are
                        admirable qualities that set you apart as not only
                        exceptional athletes but also as admirable individuals.
                        Earning a spot in the U-19 women’s camp organized by
                        @bcciofficial.in @bcci.women is a testament to your
                        talent and commitment. As you continue on your journey,
                        we extend our heartfelt wishes for success and good
                        fortune. May you continue to push yourselves to new
                        heights and achieve your dreams, including representing
                        at the national level."
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              style={{ width: "20rem", height: "22rem" }}
            >
              <div
                class="team-item position-relative"
                style={{ transition: "0.2s ease-in-out" }}
                onMouseEnter={() => {
                  setShow3(true);
                }}
                onMouseLeave={() => {
                  setShow3(false);
                }}
              >
                <div class="position-relative overflow-hidden rounded">
                  <img
                    class="img-fluid w-100"
                    src={img13}
                    alt=""
                    style={{ height: "340px" }}
                  />
                </div>
                <div
                  class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
                  style={{ background: "rgba(34, 36, 41, 0.96)" }}
                >
                  <h5 class="text-uppercase text-light">Pavya and Siddhi</h5>
                  {show3 && (
                    <div
                      style={{
                        maxHeight: "260px",
                        overflow: "auto",
                        scrollbarWidth: "none",
                      }}
                    >
                      <p
                        style={{
                          color: "#989898",
                          fontSize: "12.5px",
                          overflow: "auto",
                          scrollbarWidth: "none",
                        }}
                      >
                        "Pavya and Siddhi's selection for the VCA U-19 women’s
                        team is a true reflection of their unwavering
                        dedication, exceptional talent, and relentless hard
                        work. Their journey to this point has been paved with
                        countless sacrifices, hours of intense practice, and an
                        unyielding commitment to excellence. Their achievement
                        serves as a beacon of inspiration for aspiring athletes
                        everywhere, showcasing the power of resilience and
                        determination in the pursuit of one's dreams. As they
                        step onto this new stage in their athletic careers, we
                        stand in awe of their accomplishments and offer our
                        sincerest congratulations. May their success continue to
                        fuel their passion and drive as they navigate the
                        challenges and triumphs that lie ahead. We are proud to
                        celebrate their achievements and eagerly anticipate the
                        remarkable feats they will undoubtedly accomplish in the
                        future. Here's to Pavya and Siddhi, two shining examples
                        of perseverance and triumph in the world of sports."
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid p-5" id="coaches">
          <div class="text-center">
            <h1 class="text-black display-5 text-uppercase mb-0">
              Our Coaches / Trainers
            </h1>
          </div>

          <div class="tab-class text-center">
            {/* new */}
            <Ys>
              <div>
                {/* <!-- <h1>CARDS</h1> --> */}
                <div className="parent">
                  <div className="container">
                    <div
                      className="cards"
                      style={{
                        boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
                      }}
                    >
                      <div className="card-img">
                        <img src={Coach1} alt="Salman Khan" />
                      </div>
                      <div className="card-body">
                        <h5>DHANANJAY BARDE</h5>
                        <p>
                          EX- VCA PLAYER <br /> ( VCA ACADEMY )
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div
                      className="cards"
                      style={{
                        boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
                      }}
                    >
                      <div className="card-img">
                        <img src={Coach2} alt="Salman Khan" />
                      </div>
                      <div className="card-body">
                        <h5>KULDEEP SALVE</h5>
                        <p>
                          EX- VCA PLAYER <br /> ( OMAN A TEAM )
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div
                      className="cards"
                      style={{
                        boxShadow: "9px 10px 14px -8px rgba(0,0,0,0.4)",
                      }}
                    >
                      <div className="card-img">
                        <img src={Coach3} alt="Salman Khan" />
                      </div>
                      <div className="card-body">
                        <h5>PRADEEP KUMAR YADAV</h5>
                        <p
                          className="text-primar card-text"
                          style={{ color: " rgb(80 80 80)" }}
                        >
                          ICC LEVEL 1 <br />( COACH )
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Ys>

            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div
                  class="row g-3"
                  style={{ display: "flex", justifyContent: "center" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <Initiatives_section
          style={{
            boxShadow: "0px 1px 48px -8px rgba(0,0,0,0.27)",
            paddingTop: "1px",
          }}
          id="Initiatives"
        >
          <div class="mb-5 text-center" style={{ marginTop: "50px" }}>
            {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
            <h1 class=" text-black display-5 text-uppercase mb-0">
              Our Initiatives
            </h1>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="card">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img5}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px" }}
                    />
                  </div>
                  <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">Men's Cricket Team</h5>
                    <p className="card-text">
                      Our men's cricket team is a powerhouse of talent and
                      passion, competing in various leagues and tournaments with
                      a spirit of sportsmanship and camaraderie.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered1 ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                <div className="card">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img3}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px" }}
                    />
                  </div>
                  <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">Women's Cricket Team</h5>
                    <p className="card-text">
                      {" "}
                      Our women's cricket team is breaking barriers and making
                      strides in the world of cricket. With dedicated coaching,
                      training, and support, we are paving the way for women to
                      shine on the cricket field.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 mb-4"
                style={{
                  transition: "transform 0.3s",
                  transform: isHovered2 ? "scale(1.03)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <div className="card">
                  <div
                    className="card-image-container"
                    style={{
                      padding: "7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img12}
                      alt=""
                      className="image-icon img-fluid rounded-top"
                      style={{ width: "95%", height: "300px" }}
                    />
                  </div>
                  <div className="card-body" style={{ height: "250px" }}>
                    <h5 className="card-title">
                      Support Physically Disabled Student
                    </h5>
                    <p className="card-text">
                      Through our partnership with local organizations and
                      educational institutions, we provide financial assistance,
                      accessibility accommodations, and mentorship programs to
                      physically disabled students, empowering them to pursue
                      their educational and personal goals with confidence and
                      dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Initiatives_section>

        <div
          class="container mb-5 text-left"
          style={{ marginTop: "10px" }}
          id="gallery"
        >
          <br />
          <br />
          {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GalleryHead style={{ width: "250px" }}>
              <h1 class="display-5  mb-0">
                Our <span style={{ color: "#fb5b21" }}>Gallery</span>
              </h1>
              <div></div>
            </GalleryHead>
          </div>
        </div>

        <Gallery_Container>
          <div>
            <div className="grid-container">
              <div>
                <img className="grid-item grid-item-1" src={img1} alt="" />
                {/* <p>"I'm so happy today!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-2" src={img2} alt="" />
                {/* <p>"I see those nugs."</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-3" src={img3} alt="" />
                {/* <p>"I love you so much!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-4" src={img4} alt="" />
                {/* <p>"I'm the baby of the house!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-5" src={img5} alt="" />
                {/* <p>"Are you gunna throw the ball?"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-6" src={img6} alt="" />
                {/* <p>"C'mon friend!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-7" src={img7} alt="" />
                {/* <p>"A rose for mommy!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-8" src={img8} alt="" />
                {/* <p>"You gunna finish that?"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-9" src={img9} alt="" />
                {/* <p>"We can't afford a cat!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-10" src={img11} alt="" />
                {/* <p>"Dis my fren!"</p> */}
              </div>
              <div>
                <img className="grid-item grid-item-10" src={img12} alt="" />
                {/* <p>"Dis my fren!"</p> */}
              </div>
            </div>
          </div>
        </Gallery_Container>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

const Gallery_Container = styled.div`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
    color: coral;
    margin-bottom: 20px;
  }
  .grid-container {
    columns: 5 200px;
    column-gap: 1.5rem;
    width: 90%;
    margin: 0 auto;
    div {
      width: 150px;
      margin: 0 1.5rem 1.5rem 0;
      display: inline-block;
      width: 100%;
      border: solid 2px black;
      padding: 5px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      transition: all 0.25s ease-in-out;
      &:hover img {
        filter: grayscale(0);
      }
      &:hover {
        border-color: coral;
      }
      img {
        width: 100%;
        filter: grayscale(100%);
        border-radius: 5px;
        transition: all 0.25s ease-in-out;
      }
      p {
        margin: 5px 0;
        padding: 0;
        text-align: center;
        font-style: italic;
      }
    }
  }
`;

const Initiatives_section = styled.div`
  .card {
    margin: 0 20px;
  }
`;

const ModalContainer = styled.div`

position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);



.imgContain{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    button{
        align-self: flex-end;
        background-color: #d9534f;
        margin: 2px;
        color: white;
        border: none;
        outline: none;
        width: 50px;
        height: 30px;
        border-radius: 5px;
        align-items: right;
    } :hover{
        color: #d9534f;
        background-color: white;
    }
}

`;

const Ys = styled.div`
  font-family: "open sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;

  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
    height: 600px;
  }

  .container {
    display: flex;
    flex-wrap: wrap; /* Allow cards to wrap to the next line */
    justify-content: center;
  }

  .cards {
    width: 300px;
    margin: 0 10px;
    background-color: white;
    border-radius: 15px;
    transition: 0.2s;
  }

  .card-img {
    height: 400px;
  }

  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  .card-body h5,
  .card-body p {
    text-align: center;
    margin: 0; /* Remove default margins */
  }

  @media screen and (max-width: 768px) {
    .parent {
      flex-direction: column; /* Stack cards vertically */
      height: auto; /* Reset height */
    }

    .container {
      width: 100%; /* Full width */
      justify-content: center; /* Center align cards */
      align-items: center; /* Center align cards */
    }

    .cards {
      width: calc(100% - 20px); /* Full width with gap */
      margin: 10px;
    }

    .card-img {
      height: 270px;
    }
  }
`;

const Slide_show = styled.div`
  margin: 0 20px 50px 20px;

  /* Style.css */
  body {
    background: #f8f8f8;
    color: #2c3e50;
    font-family: "Source Sans Pro", sans-serif;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    color: #666a73;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .card-carousel--overflow-container {
    overflow: hidden;
  }

  .card-carousel--nav__left,
  .card-carousel--nav__right {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-carousel--nav__left img,
  .card-carousel--nav__right img {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
  }

  .card-carousel--nav__left[disabled],
  .card-carousel--nav__right[disabled] {
    opacity: 0.2;
  }

  .card-carousel--nav__left {
    /* transform: rotate(-135deg); */
  }
  /* 
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
} */

  .card-carousel--nav__right {
    /* transform: rotate(45deg); */
  }

  /* .card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
} */

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
  }

  .card-carousel--card {
    margin: 0 10px;
    width: 400px;
    height: 300px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
  }

  .card-carousel--card:first-child {
    margin-left: 0;
  }

  .card-carousel--card:last-child {
    margin-right: 0;
  }

  .card-carousel--card img {
    vertical-align: bottom;
    width: 400px;
    height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
  }

  .card-carousel--card img:hover {
    opacity: 0.5;
  }

  .card-carousel--card--footer {
    border-top: 0;
    padding: 7px 15px;
  }

  .card-carousel--card--footer p {
    padding: 3px 0;
    margin: 0;
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
  }

  .card-carousel--card--footer p.tag {
    font-size: 11px;
    font-weight: 300;
    padding: 4px;
    background: rgba(40, 44, 53, 0.06);
    display: inline-block;
    position: relative;
    margin-left: 4px;
    color: #666a73;
  }

  .card-carousel--card--footer p.tag:before {
    content: "";
    float: left;
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    /* border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0; */
  }

  .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
    /* border-left: 1.45px dashed white; */
  }

  .card-carousel--card--footer p.tag.secondary:before {
    display: none !important;
  }

  .card-carousel--card--footer p.tag:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    box-shadow: -0px -0px 0px #004977;
  }

  @media screen and (max-width: 768px) {
    .card-carousel--card {
      width: 200px;
      height: 150px;
    }

    .card-carousel--card img {
      width: 200px;
      height: 100%;
    }
  }
`;

const GalleryHead = styled.div`
  div {
    width: 200px;
    background: #fb5b21;
    height: 3px;
  }
  @media screen and (max-width: 768px) {
    div {
      width: 32vw; /* Adjust width for smaller screens */
    }
  }
`;

const Card = styled.div`
  .card {
    width: 20rem;
    height: 21rem;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-front {
    transform: rotateY(0deg);
  }

  .card-back {
    transform: rotateY(180deg);
  }
`;
