import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from './images/bg-img.jpeg';
import Event_card from './Event_card';

import AOS from 'aos';
import axios from 'axios'; // Import axios for making HTTP requests


const Events = () => {
    AOS.init({
        duration: 650,
        once: false,
      });

    const [filter, setFilter] = useState({
        upcoming: true,
        important: true,
        search: ''
      });
    
      const [searchIsFocused, setSearchIsFocused] = useState(false);
    
      const eventList = [
        {
          title: 'Scuba Merit Badge',
          date: 'August 28 | 8am - 3pm',
          desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
          address: '503 Harbor Blvd, Destin, FL',
          pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
          month: 'Aug',
          day: '28',
          important: true,
          upcoming: true
        },
        {
          title: 'Scuba Merit Badge',
          date: 'August 28 | 8am - 3pm',
          desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
          address: '503 Harbor Blvd, Destin, FL',
          pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
          month: 'Aug',
          day: '28',
          important: true,
          upcoming: true
        },
        {
          title: 'Scuba Merit Badge',
          date: 'August 28 | 8am - 3pm',
          desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
          address: '503 Harbor Blvd, Destin, FL',
          pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
          month: 'Aug',
          day: '28',
          important: true,
          upcoming: true
        },

        {
            title: 'Scuba Merit Badge',
            date: 'August 28 | 8am - 3pm',
            desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
            address: '503 Harbor Blvd, Destin, FL',
            pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
            month: 'Aug',
            day: '28',
            important: true,
            upcoming: true
          },
          {
            title: 'Scuba Merit Badge',
            date: 'August 28 | 8am - 3pm',
            desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
            address: '503 Harbor Blvd, Destin, FL',
            pic: 'https://images.unsplash.com/photo-1484507175567-a114f764f78b?ixlib=rb-0.3.5&s=abc2cb4d7e6d8aca1e8914c1b5e909a6&auto=format&fit=crop&w=500&q=60',
            month: 'Aug',
            day: '28',
            upcoming: false, 
            important: false,
          },
          {
            title: 'Black Forest Camp',
            date: 'March 3 - March 5, 2018',
            desc: 'Weekend campout in the Black Forest',
            address: 'Black Forest, Baden-Württemberg, DE',
            pic: 'https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4132e8087781addd674e137a9f596dc&auto=format&fit=crop&w=889&q=80',
            month: 'Mar',
            day: '03',
            important: false,
            upcoming: true
        },
        {
            title: 'Artic Campout',
            date: 'December 14 - 18, 2018',
            desc: 'Campout in the artic. Freeze your toes off. See cute penguins.',
            address: 'Barrow, Alaska, US',
            pic: 'https://images.unsplash.com/photo-1498279898147-67f541d32b6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af428042e69ac5152855548d8b4f7989&auto=format&fit=crop&w=667&q=80',
            month: 'Dec',
            day: '14',
            important: false,
            upcoming: false
        },
        {
            title: 'Sailing',
            date: 'April 23 | 11am - 7pm',
            desc: 'Sail the high seas. Get lost in the Bermuda Triangle.',
            address: 'Second star to the right, and straight on till morning',
            pic: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9193225514494f3e830d444d4ae58819&auto=format&fit=crop&w=667&q=80',
            month: 'Apr',
            day: '23',
            important: false,
            upcoming: false
        }
        // Add more event objects here as needed
      ];
    
      const filterEvents = (event) => {
        let conditions = [true, true, true];
        conditions[0] = event.upcoming === filter.upcoming;
        if (filter.important) conditions[1] = event.important === filter.important;
        if (filter.search.trim() !== '') conditions[2] = event.title.toLowerCase().includes(filter.search.trim().toLowerCase());
        return conditions.every(condition => condition === true);
      };
    
      const handleSearchFocus = () => {
        setSearchIsFocused(true);
      };
    
      const handleSearchBlur = () => {
        setSearchIsFocused(false);
      };
    
      const handleFilterChange = (value) => {
        switch (value) {
          case 'important':
            setFilter({ ...filter, upcoming: true, important: true });
            break;
          case 'upcoming':
            setFilter({ ...filter, upcoming: true, important: false });
            break;
          case 'finished':
            setFilter({ ...filter, upcoming: false, important: false });
            break;
          default:
            break;
        }
      };

  return (
    <div>
      <Abc>
        <div id="aboutid">
          <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(80%)', backgroundAttachment:'fixed' }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="overlay"></div>
            <div className="overlay-2"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center image_content">
                <div className="col-md-9 ftco-animate pb-5 text-center">
                  <p className="breadcrumbs">
                    <span className="mr-2">
                      <Link to={'/'}>
                        Home <i className="fa fa-chevron-right"></i>
                      </Link>
                    </span>{" "}
                    <span>
                      Events <i className="fa fa-chevron-right"></i>
                    </span>
                  </p>
                  <h1 className="mb-0 bread">Events</h1>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
        </div>
      </Abc>

      <Event_Content>
      <div className='container'>
      <div className='flex-bar'>
      <div className={`search-bar ${searchIsFocused ? 'elevation-6' : 'elevation-3'}`}>
        <input
          placeholder="Search"
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          type="text"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
      </div>
      <div className="upcoming-events-filter-group">
        <input
          type="radio"
          id="importantSelect"
          name="events-select"
          value="important"
          checked={filter.important && filter.upcoming}
          onChange={() => handleFilterChange('important')}
        />
        <label htmlFor="importantSelect">Important</label>
        <input
          type="radio"
          id="upcomingSelect"
          name="events-select"
          value="upcoming"
          checked={!filter.important && filter.upcoming}
          onChange={() => handleFilterChange('upcoming')}
        />
        <label htmlFor="upcomingSelect">Upcoming</label>
        <input
          type="radio"
          id="finishedSelect"
          name="events-select"
          value="finished"
          checked={!filter.upcoming}
          onChange={() => handleFilterChange('finished')}
        />
        <label htmlFor="finishedSelect">Finished</label>
      </div>
      </div>
      <ul className="event-card-list" name="fade-in">
        {eventList.filter(filterEvents).map((event, index) => (
          <li key={index}>
            {/* Your event card component here */}
            <Event_card event={event}/>
          </li>
        ))}
      </ul>
    </div>
      </Event_Content>
    </div>
  )
}

export default Events



const Abc = styled.div`
  .hero-wrap {
    width: 100%;
    height: 900px;
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
    height: 100%;
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
    height: 500px;
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
    .image_content{
        max-height: 400px;
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


const Event_Content = styled.div `
    /* Event Card List CSS */
    .flex-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    /* background-color: #F07077; */
}

.event-card-list {
    margin-top: 4em;
    display: flex;
    padding-left: 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.event-card-list li {
    list-style: none;
    margin: 2em 0;
    width: 600px; /* Adjusted width */
    font-family: sans-serif;
}

.event-card {
    overflow: hidden;
    width: 600px; /* Adjusted width */
    border-radius: 0.3em;
    box-sizing: border-box; /* Added */
    padding: 0 1em; /* Added */
}

.event-card img {
    width: 250px; /* Adjusted width */
    /* height: auto; Changed height to auto for aspect ratio */
    min-height: 190px;
    object-fit: cover;
}

.event-card .name {
    font-size: 2.3em;
    font-weight: 400;
}

.event-card .name a {
    text-decoration: none;
}

.event-card .date {
    font-size: 1.4em;
    font-weight: 400;
    color: #6D6D6D;
}

.event-card .location {
    font-size: 1em;
    color: #757575;
}

.event-card .location i {
    font-size: 1.1em;
    padding-right: 0.3em;
    margin-bottom: 0.085em;
}

.event-card .desc {
    margin-bottom: 0.2em;
    font-size: 1.16em;
    padding-left: 0.1em;
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

.event-card .date-ribbon::before,
.event-card .date-ribbon::after {
    content: '';
    position: absolute;
    top: 100%;
    width: 50%;
    height: 30px;
}

.event-card .date-ribbon::before {
    left: 0;
    border-left: solid 2em #FE453E;
    border-top: solid 15px #FE453E;
    border-bottom: solid 15px transparent;
    border-right: solid 2em transparent;
}

.event-card .date-ribbon::after {
    right: 0;
    border-right: solid 2em #FE453E;
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

.wrapme {
    width: 70%;
    max-width: 650px;
    margin: 0 auto; /* Centering the container */
}

.search-bar {
    margin-top: 10px;
    background: #fff;
    padding: 1em;
    width: 100%; /* Adjusted width */
    max-width: 600px; /* Added max-width for responsiveness */
    border-radius: 10em;
    box-shadow: 1px 2px 20px -3px rgba(0,0,0,0.4);
    transition: box-shadow 300ms ease;
}

.search-bar input {
    width: 100%;
    border-style: none;
    color: inherit;
    background-color: transparent;
    padding-left: 1em;
    font-size: 1.3em;
}

.search-bar input:focus {
    outline: none;
}

.upcoming-events-filter-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 2.4em; */
    margin-top: 20px;
    position: relative;
    display: inline-block;
}

.upcoming-events-filter-group input {
    visibility: hidden;
    opacity: 0;
    margin: 0 30px;
    position: absolute;
    top: -999;
    left: -999;
}

.upcoming-events-filter-group label {
    cursor: pointer;
    font-size: 1.3em;
    margin: 0 0.3em;
    color: #9E9E9E;
    transition: color 300ms ease;
}

.upcoming-events-filter-group input:checked+label {
    color: #F07077;
}

.upcoming-events-filter-group .underline {
    position: absolute;
    bottom: -3px;
    left: 2.73em;
    height: 2px;
    width: 6em;
    background: #F07077;
    transition: 300ms ease;
}

.upcoming-events-filter-group #importantSelect:checked~.underline {
    left: 2.73em;
    width: 5.7em;
}

.upcoming-events-filter-group #upcomingSelect:checked~.underline {
    left: 9.45em;
    width: 6em;
}

.upcoming-events-filter-group #finishedSelect:checked~.underline {
    left: calc(100% - 2.7em - 5em);
    width: 5em;
}

@media (max-width: 768px) {
    .event-card{
        width: 100%;
    }
    .event-card-list {
        width: 100%;

    }

    .event-card-content{
        flex-direction: column;
    }

    .event-card img {
        width: 100%;
    }

    .event-card .name {
        font-size: 1.8em;
    }

    .event-card .date {
        font-size: 1.2em;
    }

    .event-card .desc {
        font-size: 1em;
    }

    .event-card .date-ribbon h1 {
        font-size: 2em;
    }

    .event-card .date-ribbon h2 {
        font-size: 1em;
    }
    .search-bar{
        max-width: 100%;
    }
}
`;