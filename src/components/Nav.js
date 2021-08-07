import React from 'react';
import { NavLink } from 'react-router-dom';

import Pin from '../images/pin_icon.svg';
import Logo from '../images/logo.svg';

export default function Nav() {
  function openExtraList(e) {
    e.preventDefault();
    document.querySelectorAll('.nav__menu__item > a')
    .forEach(el => {
      el.classList.remove('active');
      if(e.target === el) e.target.classList.add('active')
    });
  }

  return (
    <nav className="nav">
      <div className="nav__logo__pin">
        <img src={Pin} alt="" />
      </div>
      <NavLink to="/" className="nav__logo">
        <img src={Logo} alt="" />
      </NavLink>
      <ul className='nav__menu'>
        <li className='nav__menu__item'>
          <NavLink to="/products">Продукты</NavLink>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/application">Приложение</NavLink>
        </li>
        <li className='nav__menu__item'>
          <a href='/' onClick={openExtraList}>Дистрибуция</a>
        </li>
        <li className='nav__menu__item'>
          <NavLink to="/where-to-buy">Где купить?</NavLink>
        </li>
      </ul>
    </nav>
  )
}