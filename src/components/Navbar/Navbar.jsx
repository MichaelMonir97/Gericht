import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__Navbar'>
  
      <div className='app__Navbar-logo'>
        <a href='#'><img src={images.gericht} alt="app logo"></img></a>
      </div>
  
      <ul className='app__Navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
  
      <div className='app__Navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
  
      <div className='app__Navbar-smallScreen'>
        <GiHamburgerMenu onClick={()=>{setToggle(true)}} color='#fff' fontSize={27} />
        
        {toggle &&  
        <div className='app__Navabar-smallScreen-overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu onClick={()=>{setToggle(false)}}  className='overlay__close' fontSize={27}/>
        <ul className='app__Navbar-smallScreen-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      </div>
    }
      </div>
    </nav>
  );
}

export default Navbar;
