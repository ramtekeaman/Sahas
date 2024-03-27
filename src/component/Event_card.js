import React, {useState} from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import axios from 'axios'; // Import axios for making HTTP requests
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Event_card = ({event}) => {
    AOS.init({
        duration: 650,
        once: false,
      });
	  
	  const[modalShow, setModalShow] = useState(false);

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {event.title}
		  <div style={{fontSize:'10px', color:'gray'}}>
			<p>{event.address}</p>
		  </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
	  	<img src={event.pic} alt={event.title} style={{ width: '100%', maxHeight:'300px' }} />
        <h4>Description:</h4>
        <p>{event.desc}</p>
        <h4>Date:</h4>
        <p>{event.date}</p>
        {event.address && (
          <>
            <h4>Address:</h4>
            <p>{event.address}</p>
          </>
        )}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


  return (
	<>
    <EventCard>
    <div className="event-card" data-aos="fade-up"  onClick={() => setModalShow(true)}>
        <div className="event-card-content">
          <img src={event.pic} alt={event.title} />
          <div className="event-details">
            <h1 className="name">{event.title}</h1>
            <h3 className="date">{event.date}</h3>
            <p className="desc">{event.desc}</p>
            {event.address && (
              <div className="location">
              <i class="fas fa-map-marker-alt fa-2x me-2"></i>
                {event.address}
              </div>
            )}
          </div>
          <div className="date-ribbon">
            <h2>{event.month}</h2>
            <h1>{event.day}</h1>
          </div>
        </div>
      </div>
      </EventCard>

	  <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
		event={event}
      />
	</>
  )
}

export default Event_card



const EventCard = styled.div `
 .event-card-list {
	margin-top: 4em;
    padding-left: 0;
}

.event-card-list li {
	list-style: none;
	margin: 2em 0;
}

.event-card {
	overflow: hidden;
	width: 600px;
	border-radius: 0.3em;
    box-shadow: 2px 7px 10px -5px rgba(0,0,0,0.41);
    padding-bottom: 5px;
    border: 1px solid gray;
}

.event-card img {
	width: 240px;
	height: auto;
	object-fit: cover;
}

.event-card .name {
    font-family: "Poppins", sans-serif;
	font-size: 2.5rem;
	/* font-weight: 400; */
}

.event-card .name a {
	text-decoration: none;
	/*color: #212121;*/
}

.event-card .date {
	font-size: 1.4em;
	font-weight: 400;
	color: #6D6D6D;
}

.event-card .location {
	font-size: 0.9em;
	color: #757575;
}

.event-card .location i {
	font-size: 1.1em;
	padding-right: 0.3em;
	margin-bottom: 0.085em;
}

.event-card .desc {
	margin-bottom: 0.2em;
	font-size: 1em;
	padding-left: 0.1em;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
}

.event-card .date-ribbon {
	position: absolute;
	top: 0;
	left: 1em;
	background: #FE453E;
	color: #fff;
	padding: 0.2em 1em;
	padding-bottom: 0;
	border-radius: 0;
}

.event-card .date-ribbon::before, .event-card .date-ribbon::after {
	content: '';
	position: absolute;
	top: 100%;
	
	width: 50%;
	height: 30px;
}

.event-card .date-ribbon::before {
	left: 0;
	border-left:solid 2em #FE453E;
	border-top: solid 15px #FE453E;
	border-bottom: solid 15px transparent;
	border-right: solid 2em transparent;
	}

.event-card .date-ribbon::after {
	right: 0;
	border-right:solid 2em #FE453E;
	border-top: solid 15px #FE453E;
	border-bottom: solid 15px transparent;
	border-left: solid 2em transparent;
}

.event-card .date-ribbon h2 {
	font-weight: 500;
	font-size: 1.15em;
	letter-spacing: 0.07em;
	text-align: center;
}

.event-card .date-ribbon h1 {
	text-align: center;
	font-weight: 400;
	font-size: 2.45em;
	margin-top: -0.09em;
	line-height: 1em;
}

.event-card-content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
	/* padding-bottom: 10px; */
}

.event-details{
	padding-bottom: 10px;
}
`;