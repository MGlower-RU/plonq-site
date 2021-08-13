import React from 'react';

import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

import Stick from '../images/stick400.png';
import Stick2 from '../images/stick400(2).png';
import Logo from '../images/logo.svg';
import Logo400 from '../images/400.svg';
import ArrowRight from '../images/arrow_right.svg';

export default function Plonq400() {
  return (
    <div className="plonq400__wrapper">
      <MediaQuery minWidth={961}>
        <div className="plonq400__content">
          <div className="plonq400__logo">
            <img className="plonq400__logo__text" src={Logo} alt="" />
            <img className="plonq400__logo__model" src={Logo400} alt="" />
          </div>
          <h3 className='plonq400__explanation-text'>
            Продукт снят<br/>
            с производства
          </h3>
          <NavLink to="/plonq500" className="plonq400__suggestion-product">
            <span>Перейти на Plonq 500</span>
            <img src={ArrowRight} alt="" />
          </NavLink>
        </div>
        <div className="plonq400__img">
          <img src={Stick} alt="" />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <div className="plonq400__logo">
          <img className="plonq400__logo__text" src={Logo} alt="" />
          <img className="plonq400__logo__model" src={Logo400} alt="" />
        </div>
        <h3 className='plonq400__explanation-text'>
          Продукт снят<br/>
          с производства
        </h3>
        <MediaQuery minWidth={376}>
          <div className="plonq400__img">
            <img src={Stick} alt="" />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={375}>
          <div className="plonq400__img">
            <img src={Stick2} alt="" />
          </div>
        </MediaQuery>
        <NavLink to="/plonq500" className="plonq400__suggestion-product">
          <span>Перейти на Plonq 500</span>
          <img src={ArrowRight} alt="" />
        </NavLink>
      </MediaQuery>
    </div>
  )
}