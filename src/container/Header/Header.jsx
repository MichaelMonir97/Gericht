import React from 'react';
import { useState, useEffect } from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Header.css';

const Header = () => {

  const info = [
    {
      title: 'Chase the new value',
      h1: 'The Key To Fine Dining',
      p: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus',
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/02.png'
    },
    {
      title: 'Chase The New Flavour',
      h1: 'Love The Original Taste',
      p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi .',
      img: images.welcome
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [info.length]);

  return (
    <div className='app__header app__wraper section__padding' id='home'>

      {info.map((object, index) => (
        <div
          key={index}
          className={"app__wraper__info " + (index === activeIndex ? 'active' : '')}
        >
          <div>
          <SubHeading title={object.title} />
          <h1 className='app__header-h1'>{object.h1}</h1>
          <p className='p__opensans' style={{margin: '2em 0'}}>{object.p}</p>
          <button className='custom__button'>Explore Menu</button>
          </div>

          <div className='app__wraper__img'>
        <img src={object.img} alt='welcome img'/>
        </div>

        </div>
      ))}
      

    </div>
  )
};

export default Header;
