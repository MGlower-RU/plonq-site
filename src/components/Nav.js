import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Pin from '../images/pin_icon.svg';
import Logo from '../images/logo.svg';

export default function Nav() {
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
          <NavLink to="/products">Продукты</NavLink>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/application">Приложение</NavLink>
        </li>
        <li className='nav__menu__item nav__menu__item--extra-menu'>
          <NavLink to="/distribution" onClick={openExtraMenu}>Дистрибуция</NavLink>
          <ul className="nav__extra__menu">
            <li className='nav__menu__item'>
              <NavLink to="/contact-us">Связаться с нами</NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/wholesale-customers">Оптовым покупателям</NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/refund">Условия возврата</NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/company">О компании</NavLink>
            </li>
            <li className='nav__menu__item'>
              <NavLink to="/policy">Политика конфиденциальности</NavLink>
            </li>
          </ul>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/where-to-buy">Где купить?</NavLink>
        </li>
      </ul>
    </nav>
  )
}