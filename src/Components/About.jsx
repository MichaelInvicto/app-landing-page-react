import React from 'react';


function About(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt=''/>
      </div>
      <div className='about-text'>
        <h2> {props.title} </h2>
        <p>Lorem ipsum dolor sit amet consectetur aslipisicing elit. Magni, blamditilis! consectetur aslipisicing elit.
          ipsum dolor sit amet consectetur aslipisicing sit amet consectetur aslipisicing elit. Magni, blamditilis!
          consectetur sit Magni, blamditilis! consectetur.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
