import React, { useState } from 'react'
import styled from 'styled-components'

import img1 from './Hero Gallery/sahas1.jpg'
import img2 from './Hero Gallery/sahas2.jpg'
import img3 from './Hero Gallery/sahas3.jpg'
import img4 from './Hero Gallery/sahas4.jpg'
import img5 from './Hero Gallery/sahas5.jpg'
import img6 from './Hero Gallery/sahas6.jpg'
import img7 from './Hero Gallery/sahas7.jpg'
import img8 from './Hero Gallery/sahas8.jpg'
import img9 from './Hero Gallery/sahas9.jpg'
import img10 from './Hero Gallery/sahas10.jpg'
import img11 from './Hero Gallery/sahas11.jpg'
import img12 from './Hero Gallery/sahas12.jpg'

import vid1 from './Videos/sahas_vid.mp4'

const Gallery = () => {


    const [selectedRadio, setSelectedRadio] = useState('check1');
    const radioImageMap = {
      check1: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
      check2: [img5, img7, img9],
      check3: [vid1, img1, img3, img4]
    };
    const radioVideoMap = {
      check3: [vid1, vid1, vid1, vid1]
    };

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
      };
    

  return (
    <Gallery_Container>


<div>
      <input type="radio" name="photos" id="check1" checked={selectedRadio === 'check1'} onChange={handleRadioChange} />
      <input type="radio" name="photos" id="check2" checked={selectedRadio === 'check2'} onChange={handleRadioChange} />
      <input type="radio" name="photos" id="check3" checked={selectedRadio === 'check3'} onChange={handleRadioChange} />

      <div className="container">
        <h1>OUR PHOTOS GALLERY</h1>
        <p>Step into the Sahas Cricket Club gallery and immerse yourself in a world where passion meets excellence. From our top-notch training facilities and personalized coaching sessions to the camaraderie of our vibrant community and empowerment of women in cricket, every image tells a story of dedication and skill. Witness the precision of our bowling machine and the transformative impact of personal coaching, all coming together to create a space where talents flourish and cricketing dreams are realized.</p>
                    <br />


        <div className="top-content">
          <h3>Photos Gallery</h3>

                <label htmlFor="check1" className={selectedRadio === 'check1' ? 'active' : ''}>All Photos</label>
                <label htmlFor="check2" className={selectedRadio === 'check2' ? 'active' : ''}>Newspaper Highlights</label>
                <label htmlFor="check3" className={selectedRadio === 'check3' ? 'active' : ''}>Videos</label>
        </div>

        <div className="photo-gallery">
            {['check1', 'check2'].includes(selectedRadio) && radioImageMap[selectedRadio].map((img, index) => (
            <div className="pic" key={index} style={{ boxShadow:' -11px 14px 11px -9px rgba(0,0,0,0.29)', borderRadius:'7px', border:'1px solid gray' }}>
                <img src={img} alt={`sahas${index + 1}`} />
            </div>
            ))}

            {radioImageMap[selectedRadio] === 'check3'  && radioImageMap[selectedRadio].map((vid, index) => (
              <div className="pic" key={index} style={{boxShadow:' -11px 14px 11px -9px rgba(0,0,0,0.29)', borderRadius:'7px', border:'1px solid gray'}}>
                <video src={vid} alt={`sahas${index + 1}`} />
              </div>
            ))}

            {selectedRadio === 'check3' && radioVideoMap[selectedRadio].map((vid, index) => (
  <div className="pic" key={index} style={{ boxShadow: '-11px 14px 11px -9px rgba(0,0,0,0.29)', borderRadius: '7px', border: '1px solid gray' }}>
  <video src={vid} alt={`sahas${index + 1}`} controls={true}  style={{width:'100%', height:'400px', objectFit:'contain'}}/>
  </div>
))}
          </div>
        </div>
        </div>
            {/* <div>
                <input type="radio" name="photos" id="check1" defaultChecked />
                <input type="radio" name="photos" id="check2" />
                <input type="radio" name="photos" id="check3" />
                <input type="radio" name="photos" id="check4" />

                <div className="container">
                    <h1>OUR PHOTOS GALLERY</h1>

                    <p>Step into the Sahas Cricket Club gallery and immerse yourself in a world where passion meets excellence. From our top-notch training facilities and personalized coaching sessions to the camaraderie of our vibrant community and empowerment of women in cricket, every image tells a story of dedication and skill. Witness the precision of our bowling machine and the transformative impact of personal coaching, all coming together to create a space where talents flourish and cricketing dreams are realized.</p>
                    <br />

                    <div className="top-content">
                        <h3>Photos Gallery</h3>
                        <label htmlFor="check1">AllPhotos1</label>
                        <label htmlFor="check2">AllPhotos2</label>
                        <label htmlFor="check4">AllPhotos4</label>
                    </div>
                    <div className="photo-gallery">
                        <div className="pic">
                            <img src={img1} alt="sahas1" />
                        </div>
                        <div className="pic">
                            <img src={img2} alt="sahas3" />
                        </div>
                        <div className="pic">
                            <img src={img3} alt="sahas2" />
                        </div>

                        <div className="pic">
                            <img src={img4} alt="sahas5" />
                        </div>
                        <div className="pic">
                            <img src={img5} alt="sahas4" />
                        </div>
                        <div className="pic">
                            <img src={img6} alt="sahas6" />
                        </div>

                        <div className="pic">
                            <img src={img7} alt="sahas7" />
                        </div>
                        <div className="pic">
                            <img src={img8} alt="sahas8" />
                        </div>
                        <div className="pic">
                            <img src={img9} alt="sahas9" />
                        </div>

                        <div className="pic">
                            <img src={img10} alt="sahas10" />
                        </div>
                        <div className="pic">
                            <img src={img11} alt="sahas11" />
                        </div>
                        <div className="pic">
                            <img src={img12} alt="sahas12" />
                        </div>
                    </div>
                </div>
            </div> */}
    </Gallery_Container>
  )
}

export default Gallery;


const Gallery_Container = styled.div `

margin: 20px 0;

.photo-gallery {
    display: grid;
    /* display: grid; */
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust the column width as needed */
    grid-gap: 10px; /* Adjust the gap between grid items */
}

.pic img {
    width: 100%;
    height: 400px; /* Maintain aspect ratio */
    object-fit: contain;
}

.active{
    color: #fb5b21;
}

input {
    display: none;
}
.container {
    width: 100%;
    text-align: center;
}
h1 {
    font-weight: normal;
    font-size: 2rem;
    position: relative;
    margin: 40px 0;
}
h1::before {
    content: ''; 
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: crimson;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    animation: animate 4s linear infinite;
}
@keyframes animate {
    0% {
        width: 100px;
    }
    50% {
        width: 200px;
    }
    100% {
        width: 100px;
    }
}/* Base styles */
.top-content {
    background-color: rgb(243, 243, 243);
    width: 90%;
    margin: 0 auto 20px auto;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 3px 3px 5px lightgray;
}

h3 {
    height: 100%;
    background-color: rgb(221, 221, 221);
    line-height: 60px;
    padding: 0 50px;
    color: white;
}

label {
    display: inline-block;
    height: 100%;
    margin: 0 20px;
    line-height: 60px;
    font-size: 18px;
    color: gray;
    cursor: pointer;
    transition: color 0.5s;
    display: flex;
    align-items: center;
    /* white-space: nowrap;  */
}

label:hover {
    color: black;
}

/* Responsive styles */
@media only screen and (max-width: 768px) {
    .top-content {
        width: 100%;
        border-radius: 0;
    }
    
    h3 {
        padding: 0 17px;
    }
    
    label {
        font-size: 13px;
        margin: 5px; /* Adjust margin for smaller screens */
        line-height: normal; 
    }
}

/* Add more media queries as needed for different screen sizes */

/* 
.photo-gallery {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}
.pic {
    position: relative;
    height: 230px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px lightgray;
    cursor: pointer;
    transition: .5s;
}
.pic img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: .5s;
} */
/* .pic::before {
    content: "-";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    margin-top: -100px;
    opacity: 0;
    transition: .3s;
    transition-delay: .2s;
    z-index: 1;
} */
/* .pic::after{
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    height: 0;
    background-color: rgb(0,0,0,.4);
    transition: .3s;
} */
.pic:hover::after{
    height: 100%;
}
.pic:hover::before{
    margin-top: 0;
    opacity: 1;
    
}
#check1:checked ~ .container .photo-gallery .pic{
    opacity: 1;
    transform: scale(1);
    position: relative;
    transition: .0s;
}
#check2:checked ~ .container .photo-gallery .AllPhotos2{
    transition: scale(1);
    opacity: 1;
    position: relative;
    /* transition: .5s; */
}
#check2:checked ~ .container .photo-gallery .AllPhotos3,
#check2:checked ~ .container .photo-gallery .AllPhotos4 {
    opacity: 0;
    transition: scale(0);
    position: absolute;
    /* transition: .5s; */
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

@media screen and (max-width: 768px) {
    .photo-gallery {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust column width for smaller screens */
        grid-gap: 5px; /* Adjust gap between grid items for smaller screens */
    }
}

/* Media query for medium screens */
@media screen and (min-width: 769px) and (max-width: 1024px) {
    .photo-gallery {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); /* Adjust column width for medium screens */
        grid-gap: 8px; /* Adjust gap between grid items for medium screens */
    }
}

/* Media query for large screens */
@media screen and (min-width: 1025px) {
    .photo-gallery {
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Adjust column width for large screens */
        grid-gap: 10px; /* Adjust gap between grid items for large screens */
    }
}`;