import React, { useContext } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { PageContext } from './Context';

import Pin from '../images/pin_icon.svg';
import Logo from '../images/logo.svg';

export default function Nav() {
  const {t} = useContext(PageContext);
  const {pathname} = useLocation();

  window.onclick = e => {
    if(!e.target.closest('.nav__menu__item--extra-menu')) {
      document.querySelectorAll('.nav__menu__item--extra-menu a')
      .forEach(el => el.classList.remove('active'))
      const activeNavItem = document.querySelector(`.nav__menu__item > a[href="${pathname}"]`)
      if(activeNavItem) activeNavItem.classList.add('active')
    }
  }

  function openExtraMenu(e) {
    e.preventDefault();
    document.querySelectorAll('.nav__menu__item > a')
    .forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }

  function openMenu(e) {
    e.preventDefault();
    e.target.closest('a').classList.toggle('nav__mobile-menu--opened')
  }

  return (
    <nav className="nav">
      <div className="nav__logo__pin">
        <img src={Pin} alt="" />
      </div>
      <NavLink to="/" className="nav__logo">
        <img src={Logo} alt="" />
      </NavLink>
      <a href="/" className='nav__mobile-menu' onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul className='nav__menu'>
        <li className='nav__menu__item'>
          <NavLink to="/products">
            {t('header.nav.products')}
          </NavLink>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/application">
            {t('header.nav.app')}
          </NavLink>
        </li>
        <li className='nav__menu__item nav__menu__item--extra-menu'>
          <NavLink to="/distribution" onClick={openExtraMenu}>
            {t('header.nav.distribution')}
          </NavLink>
          <ul className="nav__extra__menu">
            <li className='nav__menu__item'>
              <NavLink to="/contact-us">
                {t('header.nav.contact')}
              </NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/wholesale-customers">
                {t('header.nav.wholesaleBuyers')}
              </NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/refund">
                {t('header.nav.refund')}
              </NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/company">
                {t('header.nav.company')}
              </NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/policy">
                {t('header.nav.policy')}
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/where-to-buy">
            {t('defaults.products.whereToBuy')}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}