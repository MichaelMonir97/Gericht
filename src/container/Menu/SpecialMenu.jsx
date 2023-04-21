import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import {SubHeading, MenuItem} from '../../components'

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center' id='menu'>

    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte	"/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>

      <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu-menu_items' style={{width: '100%'}}>
            {data.wines.map((wine,index)=>{
              return (
                <MenuItem key={wine.title + index} tags={wine.tags} title={wine.title} price={wine.price}/>
              )
            })}
          </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu img'/>
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktails,index)=>{
              return (
                <MenuItem key={cocktails.title + index} tags={cocktails.tags} title={cocktails.title} price={cocktails.price}/>
              )
            })}
          </div>
      </div>
    </div>
    <div><button type='button' className='custom__button app__specialMenu-btn'>View More</button></div>
  </div>
);

export default SpecialMenu;
