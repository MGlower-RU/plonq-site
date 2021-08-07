import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/products">Продукты</Link>
      </li>
      <li>
        <Link to="/application">Приложение</Link>
      </li>
      <li>
        <Link to="/distribution">Дистрибуция</Link>
      </li>
      <li>
        <Link to="/where-to-buy">Где купить?</Link>
      </li>
    </ul>
  )
}