import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus section__padding flex__center app__bg' id='about'>
    <div className='app__aboutus-overlay flex__center'>
          <img src={images.G} alt='G-Img'/>
    </div>

    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content-about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon' className='spoon__image' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content-knife'>
        <img src={images.knife} alt='Knife'/>
      </div>

      <div className='app__aboutus-content-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__image' style={{transform: 'rotate(180deg)'}}/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
