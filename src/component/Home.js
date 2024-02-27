import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import img1 from './Gallery Images/gallery_img.png'
import img2 from './Gallery Images/gallery_grp1.png'
import img5 from './Gallery Images/gallery_grp.png'
import img4 from './Gallery Images/gallery_img4.png'
import img3 from './images/womes_cricket.png'
import img12 from './images/pd_student.png'
import img6 from './Gallery Images/player1.jpg'
import img7 from './Gallery Images/gallery_img123.png'
import img8 from './Gallery Images/gallery_img12.png'
import img9 from './Gallery Images/gallery_img13.png'
import img10 from './Gallery Images/gallery_img14.png'
import img11 from './Gallery Images/gallery_img15.png'
import img13 from './images/PavyaAndSiddhi.png'
import { Link } from 'react-router-dom'
import Navigate_Context from '../Context/Navigate_Context';

import arrow from './images/arrow.png'

import slide1 from './images/Slides/gallery_grp.png'
import slide2 from './images/Slides/gallery_grp1.png'
import slide3 from './images/Slides/club_carosel1.jpeg'
import slide4 from './images/Slides/womes_cricket.png'


// import Loader from 'react-loader-spinner';
// import { Loader } from 'react-loader-spinner';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height:600,
    bgcolor: 'background.paper',
    border: 'none',
    outline:'none',
    boxShadow: 24,
    p: 4,
  };

export default function Home({dbpath}) {

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


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     setOpen(true);
    //     }, 2000);

    //     return () => clearTimeout(timer);
    // }, []); // Empty dependency array ensures this effect runs only once after initial render

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    // const [open, setOpen] = useState(false);

    const{about,setAbout,navi, setNavi, ids, setIds, handalaboutclick} = useContext(Navigate_Context);
    const [initialRender, setInitialRender] = useState(true);
    useEffect(()=>{
        // Check if it's not the initial render
        if (about) {
          const element = document.getElementById(ids);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setAbout(!about);
            setNavi(!navi)
          }
        } else {
          setInitialRender(true);
        }
    },[about])


    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide % 5) + 1); // Cycle through slides 1 to 5
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
    { name: 'Kin Khao', tag: ["Thai"] },
    { name: 'Jū-Ni', tag: ["Sushi", "Japanese", "$$$$"] },
    { name: 'Delfina', tag: ["Pizza", "Casual"] },
    { name: 'San Tung', tag: ["Chinese", "$$"] },
    { name: 'Anchor Oyster Bar', tag: ["Seafood", "Cioppino"] },
    { name: 'Locanda', tag: ["Italian"] },
    { name: 'Garden Creamery', tag: ["Ice cream"] },
  ];

  const atEndOfList = currentOffset <= (paginationFactor * -1) * (items.length - windowSize);
  const atHeadOfList = currentOffset === 0;

  const moveCarousel = (direction) => {
    if (direction === 1 && !atEndOfList) {
      setCurrentOffset(prevOffset => prevOffset - paginationFactor);
    } else if (direction === -1 && !atHeadOfList) {
      setCurrentOffset(prevOffset => prevOffset + paginationFactor);
    }
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!atEndOfList) {
        setCurrentOffset(prevOffset => prevOffset - paginationFactor);
      } else {
        setCurrentOffset(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentOffset]);

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


    {/* {open && <ModalContainer style={{position:'absolute', zIndex:'22', top:'0', left:'50%', height:'200px', width:'200px',border:'5px solid red'}}>
        
    </ModalContainer>} */}

    
    {/* <!-- Carousel Start --> */}
    <div class="container-fluid p-0 mb-5" id='default'>
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100 h-100" src="img/club_carosel1.png" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center p-5">
                        <div class="p-3" style={{maxWidth: '900px'}}>
                           {/*  <h5 class="text-white text-uppercase">Best Badminton Club</h5> */}
                            <h1 class="display-2 text-white text-uppercase mb-md-4">Beyond Limits : Join Sahas Cricket Club!</h1>
                            <Link to={'/JoinUs'} class="btn btn-primary py-md-3 px-md-5 me-3">Join Us</Link>
                            <Link to={'/ContactUs'} class="btn btn-light py-md-3 px-md-5">Contact Us</Link>
                        </div>
                    </div>         
                </div>
                {/* <div class="carousel-item">
                    <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: '900px'}}>
                            <h5 class="text-white text-uppercase">Best Gym Center</h5>
                            <h1 class="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">Join Us</a>
                            <a href="" class="btn btn-light py-md-3 px-md-5">Contact Us</a>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div> 
    </div>
{/*     <!-- Carousel End -->


    <!-- About Start --> */}
    <div class="container-fluid p-3" style={{boxShadow:'0px 1px 48px -8px rgba(0,0,0,0.27)', overflowX:'hidden'}} id='aboutid'>
        <div class="row gx-5">
            {/* <div class="col-lg-5 mb-5 mb-lg-0" style={{minHeight: '500px'}}>
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded" src="img/club_img.jpg" style={{objectFit: 'cover',}} />
                </div>
            </div> */}

            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '400px' }}>
                <div className="position-relative" style={{width:'100%', height:'100%'}}>
                    <img
                    className="position-absolute w-100 h-100 rounded img-fluid"
                    src="/img/club_img.jpg" // Assuming img folder is at the root level of your project
                    style={{}}
                    alt="Club Image"
                    />
                </div>
            </div>

            <div class="col-lg-7" style={{padding:'25px'}} >
                <div class="mb-4">
                    {/* <h5 class="text-primary text-uppercase">About Us</h5> */}
                    <h1 class="display-6 text-uppercase mb-0">Discover Sahas Cricket Club: Where Passion and Excellence Unite"</h1>
                </div>
                <h4 class="text-body mb-4"></h4>
                <p class="mb-4">Here passion meets purpose on the cricket pitch!
                Sahas Cricket Club is a renowned cricketing institution dedicated to providing top-notch training and coaching facilities for individuals aged 14 to 29, as well as catering to the needs of older enthusiasts and fostering the growth of women's cricket. Our club serves as a hub for cricket lovers, offering a supportive environment where players of all ages and skill levels can come together to learn, grow, and excel in the sport they love.

                What sets Sahas Cricket Club apart is our unwavering commitment to excellence. Our team of experienced coaches brings a wealth of knowledge and expertise to the field, ensuring that every player receives personalized attention and guidance tailored to their skill level and aspirations. Whether you're a beginner looking to learn the basics or a seasoned player aiming to refine your technique, our comprehensive training programs are designed to help you reach your full potential.</p>
               
               <Link to={'/AboutUs'} class="btn btn-primary py-md-3 px-md-5 me-3">Learn More</Link>
               {/* <div class="rounded bg-dark p-5">
                    <ul class="nav nav-pills justify-content-between mb-3">
                        <li class="nav-item w-50">
                            <a class="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                        </li>
                        <li class="nav-item w-50">
                                <a class="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Our Mission</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-1">
                            <p class="text-secondary mb-0">Sahas Cricket Club is a premier institution offering top-notch training and coaching facilities for individuals aged 14 to 29, alongside catering to older enthusiasts and fostering women's cricket. With experienced coaches, a supportive community, and a commitment to excellence, we provide a home where cricketing passion thrives and talents flourish.</p>
                        </div>
                        <div class="tab-pane fade" id="pills-2">
                            <p class="text-secondary mb-0">
                            Our mission at Sahas Cricket Club is to excel in coaching, build a strong community, promote women's cricket, and develop young talent. Through unparalleled coaching, inclusive community-building, gender equality promotion, and youth development, we aim to nurture passionate cricketers and foster a culture of excellence on and off the field.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
   {/*  <!-- About End -->
   
    <!-- Programe Start --> */}

<br /><br />
    <center><h1 class="display-5 text-uppercase mb-0">Top Player Glories</h1></center>

    <div class="container-fluid programe position-relative px-5 mt-5" style={{marginBottom: '135px'}} id='achievements'>
        <div class="row g-5 gb-5" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       
            <div class="col-lg-4 col-md-6"  style={{width:'20rem', height:'22rem'}}>
            <div class="team-item position-relative" style={{transition:'0.2s ease-in-out'}} onMouseEnter={()=> {setShow1(true)}} onMouseLeave={()=> {setShow1(false)}}>
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="/img/disha_player2 (2).png" alt=""  style={{height:'340px'}}/>
                        
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info" style={{background: 'rgba(34, 36, 41, 0.96)',width:'100%' }} >
                        <h5 class="text-uppercase text-light">Disha Kasat</h5>
                        {show1 && (<p style={{maxHeight:'244px',width:'100%', overflow:'auto', scrollbarWidth:'none'}}>
                            "Disha Kasat, a right-handed batter from Amravati, Maharashtra, has etched her name in cricket's annals with her remarkable consistency. Her journey is a testament to perseverance and talent, highlighted by two impressive half-centuries for India A Women in the Senior Women's One Day Challenger Trophy 2021. Disha's century for Vidarbha Women in Visakhapatnam was not only a display of skill but also a match-winning performance. Selected for the Central Zone team in the Senior Women Inter-Zonal T20 and by the Royal Challengers Bangalore in the WPL, Disha's rise is a testament to her potential. She symbolizes the power of dedication and hard work in achieving one's dreams."</p>
                       )}
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6"  style={{width:'20rem', height:'22rem'}}>
                <div class="team-item position-relative" style={{transition:'0.2s ease-in-out'}} onMouseEnter={()=> {setShow(true)}} onMouseLeave={()=> {setShow(false)}}>
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="img/player1.jpg " alt="" />
                        
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info" style={{background: 'rgba(34, 36, 41, 0.96)', }} >
                        <h5 class="text-uppercase text-light">Lokesh Marghade</h5>
                        {show && (<p style={{color: '#989898',  fontSize: '12.5px'}}>"The Vidarbha captain, who was born with a twisted ankle, has demonstrated consistency in every competition he participates in recent days. In December 2021, Marghade also led the Challenger Trophy in runs scored. He had played four games in Chandigarh and scored 169 runs, including two fifties.

                            "I think the advice I'm getting from my elders at Sahas Cricket Club is really beneficial to me. "My goal is to improve myself so that I can make a strong return to the Indian team," he stated."</p>
                       )}
                    </div>
                </div>
            </div>

           
            <div class="col-lg-4 col-md-6"  style={{width:'20rem', height:'22rem'}}>
                <div class="team-item position-relative" style={{transition:'0.2s ease-in-out'}} onMouseEnter={()=> {setShow2(true)}} onMouseLeave={()=> {setShow2(false)}}>
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="/img/SiddhiAndAroohi.png" alt="" style={{height:'340px'}}/>
                        
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info" style={{background: 'rgba(34, 36, 41, 0.96)', }} >
                        <h5 class="text-uppercase text-light">Siddhi & AArohi</h5>
                        {show2 && (<div style={{maxHeight:'260px', overflow:'auto', scrollbarWidth:'none'}}>
                            <p style={{color: '#989898',  fontSize: '12.5px', }}>
                            "Siddhi and Arohi, your achievements are truly remarkable! Your hard work, dedication, and perseverance have paid off, bringing immense pride to your family and community. It's been a privilege to witness your growth and progress, fueled by countless hours of practice and determination. Your humility and respect towards your coaches, the game, and the learning process are admirable qualities that set you apart as not only exceptional athletes but also as admirable individuals. Earning a spot in the U-19 women’s camp organized by @bcciofficial.in @bcci.women is a testament to your talent and commitment. As you continue on your journey, we extend our heartfelt wishes for success and good fortune. May you continue to push yourselves to new heights and achieve your dreams, including representing at the national level."</p>
                        </div> )}
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6"  style={{width:'20rem', height:'22rem'}}>
                <div class="team-item position-relative" style={{transition:'0.2s ease-in-out'}} onMouseEnter={()=> {setShow3(true)}} onMouseLeave={()=> {setShow3(false)}}>
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src={img13} alt="" style={{height:'340px'}}/>
                        
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info" style={{background: 'rgba(34, 36, 41, 0.96)', }} >
                        <h5 class="text-uppercase text-light">Pavya and Siddhi</h5>
                        {show3 && (<div style={{maxHeight:'260px', overflow:'auto', scrollbarWidth:'none', }}>
                            <p style={{color: '#989898',  fontSize: '12.5px', overflow:'auto', scrollbarWidth:'none'}}>
                            "Pavya and Siddhi's selection for the VCA U-19 women’s team is a true reflection of their unwavering dedication, exceptional talent, and relentless hard work. Their journey to this point has been paved with countless sacrifices, hours of intense practice, and an unyielding commitment to excellence. Their achievement serves as a beacon of inspiration for aspiring athletes everywhere, showcasing the power of resilience and determination in the pursuit of one's dreams. As they step onto this new stage in their athletic careers, we stand in awe of their accomplishments and offer our sincerest congratulations. May their success continue to fuel their passion and drive as they navigate the challenges and triumphs that lie ahead. We are proud to celebrate their achievements and eagerly anticipate the remarkable feats they will undoubtedly accomplish in the future. Here's to Pavya and Siddhi, two shining examples of perseverance and triumph in the world of sports."</p>
                        </div>)}
                    </div>
                </div>
            </div>
           {/*  <div class="col-lg-12 col-md-6 text-center">
                <h1 class="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
                <a href="" class="btn btn-primary py-3 px-5">Become A Member</a>
            </div> */}
        </div>
    </div>


  {/*   <!-- Programe Start -->
    <!-- Class Timetable Start --> */}
    <div class="container-fluid p-5" id='coaches'>
        <div class="text-center" >
{/*             <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
            <h1 class="text-black display-5 text-uppercase mb-0">Our Coaches / Trainers</h1>
        </div>


        <div class="tab-class text-center">
{/* new */}
<Ys>

<div>
          {/* <!-- <h1>CARDS</h1> --> */}
          <div className="parent" >
            <div className="container" >
              <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                <div className="card-img">
                  <img src="img/mentor.png" alt="Salman Khan" />
                </div>
                <div className="card-body">
                  <h5>DHANANJAY BARDE</h5>
                  <p>
                  EX- VCA PLAYER <br /> ( VCA ACADEMY )
                  </p>
                </div>
                {/* <!-- <div class="card-footer">
                  <button>Read More</button>
                </div> --> */}
              </div>
            </div>

            <div className="container">
              <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                <div className="card-img">
                  <img src="img/mentor.png" alt="Salman Khan" />
                </div>
                <div className="card-body">
                  <h5>KULDEEP SALVE</h5>
                  <p>
                  EX- VCA PLAYER <br /> ( OMAN A TEAM )
                  </p>
                </div>
                {/* <div className="card-footer">
                  <button>Read More</button>
                </div> */}
              </div>
            </div>

            <div className="container" >
              <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                <div className="card-img">
                  <img src="img/mentor.png" alt="Salman Khan" />
                </div>
                <div className="card-body">
                  <h5>PRADEEP KUMAR YADAV</h5>
                  <p className='text-primar card-text' style={{color:' rgb(80 80 80)', }}>
                  ICC LEVEL 1 <br />( COACH )
                  </p>
                </div>
                {/* <div className="card-footer">
                  <button>Read More</button>
                </div> */}
              </div>
            </div>
          </div>
    </div>
    {/* <div class="cardS">
    <img class="card-img-top" src="img/Dhananjay_coach.png" alt="Card image cap"/>
    <div class="card-body">
        <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>DHANANJAY BARDE</h5>
        <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>EX- VCA PLAYER <br /> ( VCA ACADEMY )</p>
        
    </div>
    </div>
    <div class="cardS">
    <img class="card-img-top" src="img/kuldeep_coach.png" alt="Card image cap"/>
    <div class="card-body">
        <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>KULDEEP SALVE</h5>
        <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>EX- VCA PLAYER <br /> ( OMAN A TEAM )</p>
        
    </div>
    </div>
    <div class="cardS">
    <img class="card-img-top" src="img/pradeen_coach.png" alt="Card image cap"/>
    <div class="card-body">
        <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>PRADEEP KUMAR YADAV</h5>
        <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>ICC LEVEL 1 <br />( COACH )</p>
        
    </div>
    </div> */}
</Ys>

            {/* <ul class="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1">Monday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Tuesday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Wednesday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-4">Thursday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-5">Friday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-6">Saturday</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-7">Sunday</a>
                </li>
            </ul> */}
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-3" style={{display:'flex', justifyContent: 'center',}}>
                    {/* <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class=" rounded text-center py-1 px-3">
                                
                                <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                    
                                <img src="img/Dhananjay_coach.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>

                                    <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Dhananjay Barde</h5>
                                    <div style={{lineHeight: '2px'}}>
                                        <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex- VCA Player</p>
                                        <p className='text-uppercase text-primar' style={{fontSize:'15px', color:' rgb(80 80 80)', fontWeight: '700'}}>( VCA Academy )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class=" rounded text-center py-1 px-3">
            

                                <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                    <img src="img/kuldeep_coach.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>
                                    <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Kuldeep Salve</h5>
                                    <div style={{lineHeight: '2px'}}>
                                        <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex- VCA Player</p>
                                        <p className='text-uppercase text-primar' style={{fontSize:'15px', color:' rgb(80 80 80)', fontWeight: '700'}}>( Oman A Team )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class=" rounded text-center py-1 px-3">

                                <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                    <img src="img/pradeen_coach.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>
                                    <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Pradeep Kumar Yadav</h5>
                                    <div style={{lineHeight: '2px'}}>
                                        <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>ICC Level 1</p>
                                        <p className='text-uppercase text-primar' style={{fontSize:'15px', color:' rgb(80 80 80)', fontWeight: '700'}}>( Coach )</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            
                        {/* <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-5 px-3">
                                <h5 class="text-uppercase text-primary">Specious Parking (Two/Four Wheeler) Available.</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-5 px-3">
                                <h5 class="text-uppercase text-primary">Academy Discipline and Standard Strictly Maintained.</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-5 px-3">
                                <h5 class="text-uppercase text-primary"> Focus On Badminton Footwork and Trick with Timing.</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="bg-dark rounded text-center py-5 px-3">
                                <h5 class="text-uppercase text-primary"> Scientific Warm Up, Post Play Stretching, Agility Development.</h5>
                            </div>
                        </div> */}
                    </div>


                    {/* Mentors */}
                    {/* <div class="text-center" style={{margin:'50px 0'}}>
                        <h1 class=" text-black display-5 text-uppercase mb-0">Mentors</h1>
                    </div>
                    <div class="row g-3" style={{display:'flex', justifyContent: 'center', marginBottom:'0'}}> */}


                    {/* <Ys>                        
                    <div >
                            
                            <div className="parent">
                            <div className="container" >
                            <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                                <div className="card-img">
                                <img src="img/mentor.png" alt="Salman Khan" />
                                </div>
                                <div className="card-body">
                                <h5>Abhishek Mishra</h5>
                                <p>
                                Ex- Cricker & Entrepreneur
                                </p>
                                </div>
                              
                            </div>
                            </div>

                                <div className="container" >
                                    <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                                        <div className="card-img">
                                        <img src="img/mentor.png" alt="Salman Khan" />
                                        </div>
                                        <div className="card-body">
                                        <h5>Abhishek Chaurasia</h5>
                                        <p>
                                        Ranji Player <br /> Owner Masterstroke sports
                                        </p>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="container" >
                                <div className="cards" style={{boxShadow:'9px 10px 14px -8px rgba(0,0,0,0.4)'}}>
                                    <div className="card-img">
                                    <img src="img/mentor.png" alt="Salman Khan" />
                                    </div>
                                    <div className="card-body">
                                    <h5>Bhushan Talmale</h5>
                                    <p>
                                    Ex VCA Player, <br /> Represented VCA in all age groups
                                    </p>
                                    </div>
                                   
                                </div>
                                </div>
                            </div>
                        </div> */}





                        {/* <div class="cardS">
                        <img class="card-img-top" src="img/mentor.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>Abhishek Mishra</h5>
                            <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex- Cricker & Entrepreneur</p>
                            
                        </div>
                        </div>
                        <div class="cardS">
                        <img class="card-img-top" src="img/abhi_coach1.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>Abhishek Chaurasia</h5>
                            <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ranji Player <br /> Owner Masterstroke sports</p>
                            
                        </div>
                        </div>
                        <div class="cardS">
                        <img class="card-img-top" src="img/pradeen_coach.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 className='text-uppercase text-primar card-title' style={{color: '#FB5B21'}}>Bhushan Talmale</h5>
                            <p className='text-uppercase text-primar card-text' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex VCA Player, <br /> Represented VCA in all age groups</p>
                            
                        </div>
                        </div> */}
                    {/* </Ys> */}

                        {/* <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class=" rounded text-center py-1 px-3">
                                

                                    <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                        
                                    <img src="img/mentor.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>

                                        <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Abhishek Mishra</h5>
                                        <div style={{lineHeight: '16px'}}>
                                            <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex- Cricker & Entrepreneur</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class=" rounded text-center py-1 px-3">


                                    <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                        <img src="img/abhi_coach1.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>
                                        <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Abhishek Chaurasia</h5>
                                        <div style={{lineHeight: '16px'}}>
                                            <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ranji Player Owner Masterstroke sports</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class=" rounded text-center py-1 px-3">
                                

                                    <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center', }} >
                                        <img src="img/pradeen_coach.png" alt="coach"  style={{borderRadius: '50%', width: '190px', height:'190px', background:'white', margin: '5px 0', border: '3px solid #FB5B21'}}/>
                                        <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Bhushan Talmale</h5>
                                        <div style={{lineHeight: '16px'}}>
                                            <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>Ex VCA Player, Represented VCA in all age groups</p>

                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class=" rounded text-center py-1 px-3">

                                    <div style={{display:'flex',flexDirection: 'column',justifyContent:"center",alignItems:'center',}} >
                                        <img src="img/pradeen_coach.png" alt="coach"  style={{borderRadius: '50%', width: '170px', height:'170px', background:'white', marginBottom: '5px', border: '3px solid #FB5B21'}}/>
                                        <h5 className='text-uppercase text-primar' style={{color: '#FB5B21'}} >Pradeep Kumar Yadav</h5>
                                        <div style={{lineHeight: '2px'}}>
                                            <p className='text-uppercase text-primar' style={{color:' rgb(80 80 80)', fontWeight: 'bold'}}>ICC Level 1</p>
                                            <p className='text-uppercase text-primar' style={{fontSize:'15px', color:' rgb(80 80 80)', fontWeight: '700'}}>( Coach )</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        {/* <section style={spikesStyle}>
            <div style={spikesAfterStyle}></div>
        </section> */}

    
        <Initiatives_section style={{boxShadow:'0px 1px 48px -8px rgba(0,0,0,0.27)', paddingTop: '1px'}} id='Initiatives'>
                <div class="mb-5 text-center" style={{marginTop: '50px'}}>
                        {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
                        <h1 class=" text-black display-5 text-uppercase mb-0">Our Initiatives</h1>
                </div>
            
            
                {/* <div className="container">
                    <div className="row">
                        {cardsData.map((card, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                            <div className="card-image-container">
                                <img src={card.image} alt={card.title} className="image-icon img-fluid rounded-top" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4" 
                            style={{ transition: 'transform 0.3s', transform: isHovered ? 'scale(1.03)' : 'scale(1)' }} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}>
                            <div className="card">
                                <div className="card-image-container" style={{padding:'7px', display:'flex', justifyContent:'center'}}>
                                    <img src={img5} alt='' className="image-icon img-fluid rounded-top" style={{width:'95%', height: '300px'}}/>
                                </div>
                                <div className="card-body" style={{height:'250px'}}>
                                    <h5 className="card-title">Men's Cricket Team</h5>
                                    <p className="card-text">Our men's cricket team is a powerhouse of talent and passion, competing in various leagues and tournaments with a spirit of sportsmanship and camaraderie.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4" style={{ transition: 'transform 0.3s', transform: isHovered1 ? 'scale(1.03)' : 'scale(1)' }} 
                            onMouseEnter={() => setIsHovered1(true)} 
                            onMouseLeave={() => setIsHovered1(false)}>
                            <div className="card">
                            <div className="card-image-container" style={{padding:'7px', display:'flex', justifyContent:'center'}}>
                                <img src={img3} alt='' className="image-icon img-fluid rounded-top" style={{width:'95%', height: '300px'}}/>
                            </div>
                            <div className="card-body"style={{height:'250px'}}>
                                <h5 className="card-title">Women's Cricket Team</h5>
                                <p className="card-text"> Our women's cricket team is breaking barriers and making strides in the world of cricket. With dedicated coaching, training, and support, we are paving the way for women to shine on the cricket field.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" style={{ transition: 'transform 0.3s', transform: isHovered2 ? 'scale(1.03)' : 'scale(1)' }} 
                            onMouseEnter={() => setIsHovered2(true)} 
                            onMouseLeave={() => setIsHovered2(false)}>
                            <div className="card">
                            <div className="card-image-container" style={{padding:'7px', display:'flex', justifyContent:'center'}}>
                                <img src={img12} alt='' className="image-icon img-fluid rounded-top" style={{width:'95%', height: '300px'}}/>
                            </div>
                            <div className="card-body" style={{height:'250px'}}>
                                <h5 className="card-title">Support Physically Disabled Student</h5>
                                <p className="card-text">Through our partnership with local organizations and educational institutions, we provide financial assistance, accessibility accommodations, and mentorship programs to physically disabled students, empowering them to pursue their educational and personal goals with confidence and dignity.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>

            {/* <section className="game-section">
            <div className="owl-carousel custom-carousel owl-theme">
                {games.map((game, index) => (
                <div
                    key={index}
                    className={`item ${index === activeItem ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${game.image})` }}
                    onClick={() => handleItemClick(index)}
                >
                    <div className="item-desc">
                    <h5 style={{marginBottom:'2px'}}>{game.title}</h5>
                    <p>{game.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </section> */}
        </Initiatives_section>



                        
                    <div class="container mb-5 text-left" style={{marginTop: '10px'}} id='gallery'>
                    <br />
                    <br />
                        {/* <h5 class="text-primary text-uppercase">Class Schedule</h5> */}
                        <GalleryHead style={{width:'250px'}}><h1 class="display-5  mb-0">Our <span style={{color:'#fb5b21'}}>Gallery</span></h1>
                            <div></div>
                            
                        </GalleryHead>
                        
                    </div>
                        {/* <div>
                            <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', gap:'7px'}}>
                                <div>
                                    <a data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img1} className="img-fluid rounded" alt="Gallery 1" style={{width:'20rem', height:'20rem', marginRight:'7px'}} />
                                    </a>
                                    
                                    <a  data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img2} className="img-fluid rounded" alt="Gallery 2"  style={{width:'20rem', height:'20rem',marginRight:'7px'}} />
                                    </a>
                                    
                                    <a  data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img3} className="img-fluid rounded" alt="Gallery 3"  style={{width:'20rem', height:'20rem'}} />
                                    </a>
                                </div>
                                <div>
                                    <a data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img1} className="img-fluid rounded" alt="Gallery 1" style={{width:'20rem', height:'20rem', marginRight:'7px'}} />
                                    </a>
                                    
                                    <a  data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img2} className="img-fluid rounded" alt="Gallery 2"  style={{width:'20rem', height:'20rem', marginRight:'7px'}} />
                                    </a>
                                    
                                    <a data-toggle="lightbox" data-gallery="gallery" className="col-md-4">
                                        <img src={img4} className="img-fluid rounded" alt="Gallery 3"  style={{width:'20rem', height:'20rem'}} />
                                    </a>
                                </div>
                            </div>
                        </div> */}

                        {/* <Gallery_Container>
                            <div className="container">
                                <div className="row gallery">
                                    <div className="col-md-3 gallery__column">
                                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                            <figure className="gallery__thumb">
                                            <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image img-fluid" />
                                            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="col-md-3 gallery__column_span">
                                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                            <figure className="gallery__thumb">
                                            <img src={img5} id='span2' alt="Portrait by Jessica Felicio" className="gallery__image img-fluid"  />
                                            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                
                                    <div className="col-md-3 gallery__column">
                                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                            <figure className="gallery__thumb">
                                            <img src={img1} alt="Portrait by Jessica Felicio" className="gallery__image img-fluid" />
                                            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                </div>

                                <div className="row gallery">
                                        <div className="col-md-3 gallery__column_span2">
                                            <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                                <figure className="gallery__thumb">
                                                <img src={img2} alt="Portrait by Jessica Felicio" className="gallery__image img-fluid" />
                                                <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="col-md-3 gallery__column">
                                            <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                                <figure className="gallery__thumb">
                                                <img src={img4} alt="Portrait by Jessica Felicio" className="gallery__image img-fluid" />
                                                <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 gallery__column">
                                        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
                                            <figure className="gallery__thumb">
                                            <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image img-fluid" />
                                            <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                    
                                </div>
                        </Gallery_Container> */}

                        {/* <Gallery_Container>
                        <div className="gallery">
                            <div className="gallery__item gallery__item--hor">
                            <img src={img5} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img4} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img6} alt="" />
                            </div>
                            <div className="gallery__item gallery__item--vert">
                            <img src={img1} alt="" />
                            </div>
                            <div className="gallery__item gallery__item--lg">
                            <img src={img2} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img7} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img8} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img9} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img10} alt="" />
                            </div>
                            <div className="gallery__item">
                            <img src={img11} alt="" />
                            </div>
                        </div>
                        </Gallery_Container> */}

                        


                        {/* <Gallery_Container>
                            <div class="grid-container">
                                <div class="item1"><img src={img2} alt="" style={{width: '100%', height: '300px'}}/></div>
                                <div class="item2">Menu</div>
                                <div class="item3">Main</div>  
                                <div class="item4">Right</div>
                                <div class="item5">Footer</div>
                            </div>
                        </Gallery_Container> */}


  {/*   <!-- Class Timetable Start -->
  
    

    <!-- Facts Start --> */}
    {/* <div class="container-fluid bg-dark facts p-5 my-5">
        <div class="row gx-5 gy-4 py-5">
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i class="fa fa-star fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Experience</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i class="fa fa-users fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Our Trainers</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i class="fa fa-check fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Complete Project</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i class="fa fa-mug-hot fs-4 text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Happy Clients</h5>
                        <h1 class="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
*/}{/*     <!-- Facts End -->

    <!-- Team Start --> 
    <div class="container-fluid p-5">*/}{/* 
        <div class="mb-5 text-center">
            <h5 class="text-primary text-uppercase">The Team</h5>
            <h1 class="display-3 text-uppercase mb-0">Expert Trainers</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="img/team-1.jpg" alt="" />
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
                        <h5 class="text-uppercase text-light">John Deo</h5>
                        <p class="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="img/team-2.jpg" alt="" />
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
                        <h5 class="text-uppercase text-light">James Taylor</h5>
                        <p class="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item position-relative">
                    <div class="position-relative overflow-hidden rounded">
                        <img class="img-fluid w-100" src="img/team-3.jpg" alt="" />
                        <div class="team-overlay">
                            <div class="d-flex align-items-center justify-content-start">
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-light btn-square rounded-circle mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{background: 'rgba(34, 36, 41, .9)'}}>
                        <h5 class="text-uppercase text-light">Adam Phillips</h5>
                        <p class="text-uppercase text-secondary m-0">Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 */} {/*   <!-- Team End -->
    
    <!-- Testimonial Start --> */}{/* 
    <div class="container-fluid p-0 my-5">
        <div class="row g-0">
            <div class="col-lg-6" style={{minHeight: '500px'}}>
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{objectFit: 'cover'}} />
                </div>
            </div>
            <div class="col-lg-6 bg-dark p-5">
                <div class="mb-5">
                    <h5 class="text-primary text-uppercase">Testimonial</h5>
                    <h1 class="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                </div>
                <div class="owl-carousel testimonial-carousel">
                    <div class="testimonial-item">
                        <p class="fs-4 fw-normal text-light mb-4"><i class="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="" />
                            <div class="ps-4">
                                <h5 class="text-uppercase text-light">Client Name</h5>
                                <span class="text-uppercase text-secondary">Profession</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item">
                        <p class="fs-4 fw-normal text-light mb-4"><i class="fa fa-quote-left text-primary me-3"></i>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="" />
                            <div class="ps-4">
                                <h5 class="text-uppercase text-light">Client Name</h5>
                                <span class="text-uppercase text-secondary">Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    */}{/*  <!-- Testimonial End -->

    <!-- Blog Start --> */}{/* 
    <div class="container-fluid p-5">
        <div class="mb-5 text-center">
            <h5 class="text-primary text-uppercase">Our Blog</h5>
            <h1 class="display-3 text-uppercase mb-0">Latest Blog Post</h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="img/blog-1.jpg" alt="" />
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="img/blog-2.jpg" alt="" />
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="blog-item">
                    <div class="position-relative overflow-hidden rounded-top">
                        <img class="img-fluid" src="img/blog-3.jpg" alt="" />
                    </div>
                    <div class="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div class="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>01</span>
                            <h6 class="text-light text-uppercase mb-0">January</h6>
                            <span>2045</span>
                        </div>
                        <a class="h5 text-uppercase text-light" href=""><h4>Sed amet tempor amet sit kasd sea lorem</h4></a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

                        {/* <section className='container-fluid' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        
                        <div className="col-md-6" >
                            <div className="embed-responsive embed-responsive-16by9" >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!4v1708340342624!6m8!1m7!1s26Rkmv7HPs2Mk5Z9BuBJfA!2m2!1d21.10891635066278!2d79.07035596327074!3f70.83782188281266!4f-25.346381869793802!5f0.7820865974627469"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                
                                />
                            </div>
                        </div>
                        </section> */}


                        <Slide_show>

                            

                            <div id="app">

                                <div style={{display:'flex', gap:'5px', justifyContent:'end', marginRight:'5%'}}>
                                        <button
                                        className="card-carousel--nav__left"
                                        onClick={() => moveCarousel(-1)}
                                        disabled={atHeadOfList}
                                        style={{border:'none'}}
                                        >
                                            <img src={arrow} alt="" />
                                        
                                        </button>
                                        <button
                                        className="card-carousel--nav__right"
                                        onClick={() => moveCarousel(1)}
                                        disabled={atEndOfList}
                                        style={{border:'none'}}
                                        >
                                            <img src={arrow} alt="" style={{transform: 'rotate(180deg)'}}/>
                                        </button>
                            </div>
                                <div className="card-carousel-wrapper">
                                    
                                    <div className="card-carousel">
                                    <div className="card-carousel--overflow-container">
                                        <div className="card-carousel-cards" style={{ transform: `translateX(${currentOffset}px)` }}>
                                        {items.map((item, index) => (
                                            <div className="card-carousel--card" key={index}>
                                            <img src={img2} alt="placeholder" />
                                            {/* <div className="card-carousel--card--footer">
                                                <p>{item.name}</p>
                                                {item.tag.map((tag, tagIndex) => (
                                                <p className={tagIndex > 0 ? 'tag secondary' : 'tag'} key={tagIndex}>{tag}</p>
                                                ))}
                                            </div> */}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                        </Slide_show>
    <br></br><br></br>




    </div>
    </>
  )
}


const Gallery_Container = styled.div `

.gallery {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    filter: brightness(50%);
    transition: 0.2s ease-in-out;
  } 
  
  .gallery__item > img:hover{
    transform: scale(1.05);
    filter: brightness(100%);
    transition: 0.2s ease-in-out;
  }
  

  .gallery__item--hor {
    grid-column: span 2;
  }
  
  .gallery__item--vert {
    grid-row: span 2;
  }
  
  .gallery__item--lg {
    grid-column: span 2;
    grid-row: span 2;
  }


/* 
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
} */
/* 
img {
    border-radius: 5px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-auto-rows: 129px;
    grid-gap: 3px;
    grid-auto-flow: row dense;
  }

  li {
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  li:nth-child(2),
  li:nth-child(6),
  li:nth-child(13) {
    grid-column: span 2;
  }

  li:nth-child(3),
  li:nth-child(4),
  li:nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
  }

  li:nth-child(4),
  li:nth-child(7) {
    grid-row: span 2;
  }

  @media screen and (min-width: 500px) {
    margin: 30px auto;
    width: 80vw;
  }

  @media screen and (min-width: 1000px) {
    margin: 30px auto;
    width: 50vw;
  } */
`;

const Initiatives_section = styled.div `
.card{
    margin: 0 20px;
}
`;

const ModalContainer = styled.div `

`;


const Ys = styled.div`
font-family: 'open sans', sans-serif;
display: flex;
justify-content: center;
align-items: center;

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

.card-img img {
  width: 100%;
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
}


/* 
  display: flex;
  justify-content: center;
  gap: 55px;

  .cardS {
    width: 18rem;
    box-shadow: 2px 2px 2px 2px gray;
    border-radius: 9%;
    height: auto;
  }

  img {
    border-radius: 9% 9% 0 0;
    width: 100%; 
    height: 270px;
}

  @media (max-width: 768px) { 
    flex-direction: column;
    align-items: center;

    .cardS {
      width: 80%;
      margin-bottom: 20px;
    } */
  

 
`;

const Loader_Spinner = styled.div `
.newtons-cradle {
 --uib-size: 50px;
 --uib-speed: 1.2s;
 --uib-color: #474554;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 width: var(--uib-size);
 height: var(--uib-size);
}

.newtons-cradle__dot {
 position: relative;
 display: flex;
 align-items: center;
 height: 100%;
 width: 25%;
 transform-origin: center top;
}

.newtons-cradle__dot::after {
 content: '';
 display: block;
 width: 100%;
 height: 25%;
 border-radius: 50%;
 background-color: var(--uib-color);
}

.newtons-cradle__dot:first-child {
 animation: swing var(--uib-speed) linear infinite;
}

.newtons-cradle__dot:last-child {
 animation: swing2 var(--uib-speed) linear infinite;
}

@keyframes swing {
 0% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 25% {
  transform: rotate(70deg);
  animation-timing-function: ease-in;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }
}

@keyframes swing2 {
 0% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 75% {
  transform: rotate(-70deg);
  animation-timing-function: ease-in;
 }
}
/* 

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */
`;


const Slide_show= styled.div `

margin: 0 20px 50px 20px;

/* Style.css */
body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: 'Source Sans Pro', sans-serif;
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
.card-carousel--nav__right img{
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
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
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


const GalleryHead = styled.div `
div{

    width: 200px;
    background: #fb5b21;
    height: 3px;
} @media screen and (max-width: 768px) {
    div {
      width: 32vw; /* Adjust width for smaller screens */
    }
  }
`;


const Card = styled.div `
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