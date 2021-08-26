import React, { useContext } from 'react';

import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { PageContext } from '../components/Context';

import '../styles/production-out.scss';

import Stick from '../images/stick400.png';
import Stick2 from '../images/stick400(2).png';
import Logo400 from '../images/400.svg';
import Logo from '../images/logo.svg';
import ArrowRight from '../images/arrow_right.svg';

export default function ProductionOut({goTo}) {
  const {t} = useContext(PageContext);

  return (
    <div className="production-out__wrapper">
      <MediaQuery minWidth={961}>
        <div className="production-out__content">
          <div className="production-out__logo">
            <img className="production-out__logo__text" src={Logo} alt="" />
            <img className="production-out__logo__model" src={Logo400} alt="" />
          </div>
          <h3 className='production-out__explanation-text'>
            {t('defaults.products.discontinued.1')}<br/>
            {t('defaults.products.discontinued.2')}
          </h3>
          <NavLink to="/plonq500" className="production-out__suggestion-product">
            <span>{t('defaults.products.linkTo')} {goTo}</span>
            <img src={ArrowRight} alt="" />
          </NavLink>
        </div>
        <div className="production-out__img">
          <img src={Stick} alt="" />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <div className="production-out__logo">
          <img className="production-out__logo__text" src={Logo} alt="" />
          <img className="production-out__logo__model" src={Logo400} alt="" />
        </div>
        <h3 className='production-out__explanation-text'>
          {t('defaults.products.discontinued.1')}<br/>
          {t('defaults.products.discontinued.2')}
        </h3>
        <MediaQuery minWidth={376}>
          <div className="production-out__img">
            <img src={Stick} alt="" />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={375}>
          <div className="production-out__img">
            <img src={Stick2} alt="" />
          </div>
        </MediaQuery>
        <NavLink to="/plonq500" className="production-out__suggestion-product">
          <span>{t('defaults.products.linkTo')} Plonq 500</span>
          <img src={ArrowRight} alt="" />
        </NavLink>
      </MediaQuery>
    </div>
  )
}