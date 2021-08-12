import React from 'react';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo.svg';
import Appstore from '../images/appstore.svg';
import PlayMarket from '../images/play_market.svg';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';

export default function Footer() {
  return (
    <footer className="footer">
      <MediaQuery minWidth={1281}>
        <div className="footer__features">
          <div className="footer__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer__email__subscription">
            <div className="footer__email__subscription__text">
              Подпишитесь на наши обновления
            </div>
            <form className='footer__email__subscription__form'>
              <input type="email" name="subEmail" id="emailInput" />
              <button type="submit">Подписаться</button>
            </form>
          </div>
          <div className="footer__localization">
            <a href="/" className='current-language'>Ru</a>
            <a href="/">En</a>
          </div>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='/'>
              <img src={Appstore} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for IOS
                </div>
              </div>
            </a>
            <a href='/'>
              <img src={PlayMarket} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for Android
                </div>
              </div>
            </a>
          </div>
          <div className="footer__nav">
            <ul className="footer__nav__list">
              <li>Продукты</li>
              <li>
                <NavLink to="/plonq400">Plonq 400</NavLink>
              </li>
              <li>
                <NavLink to="/plonq500">Plonq 500</NavLink>
              </li>
              <li>
                <NavLink to="/plonqX">Plonq X</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Технологии</li>
              <li>
                <NavLink to="/application">О приложении</NavLink>
              </li>
              <li>
                <NavLink to="/about-cigarette">Об электронных сигаретах</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Поддержка</li>
              <li>
                <NavLink to="/contact-us">Связаться с нами</NavLink>
              </li>
              <li>
                <NavLink to="/refund">Условия возврата</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Политика конфиденциальности</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Прочее</li>
              <li>
                <NavLink to="/market-places">Точки продаж</NavLink>
              </li>
              <li>
                <NavLink to="/company">О компании</NavLink>
              </li>
              <li>
                <NavLink to="/wholesale-customers">Оптовым покупателям</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            <div className="footer__socials">
              <a href='/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              © 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__warning__text">
        ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.<br/>
        Сайт используется исключительно в целях информирования действующих потребителей продукции PLONQ<br/>
        Защищено выпущенными и/или находящимися на одобрении международными патентами..
        </div>
      </MediaQuery>
      <MediaQuery minWidth={961} maxWidth={1280}>
        <div className="footer__features">
          <div className="footer__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer__email__subscription">
            <div className="footer__email__subscription__text">
              Подпишитесь на наши обновления
            </div>
            <form className='footer__email__subscription__form'>
              <input type="email" name="subEmail" id="emailInput" />
              <button type="submit">Подписаться</button>
            </form>
          </div>
          <div className="footer__localization">
            <a href="/" className='current-language'>Ru</a>
            <a href="/">En</a>
          </div>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='/'>
              <img src={Appstore} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for IOS
                </div>
              </div>
            </a>
            <a href='/'>
              <img src={PlayMarket} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for Android
                </div>
              </div>
            </a>
          </div>
          <div className="footer__nav">
            <ul className="footer__nav__list">
              <li>Продукты</li>
              <li>
                <NavLink to="/plonq400">Plonq 400</NavLink>
              </li>
              <li>
                <NavLink to="/plonq500">Plonq 500</NavLink>
              </li>
              <li>
                <NavLink to="/plonqX">Plonq X</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Технологии</li>
              <li>
                <NavLink to="/application">О приложении</NavLink>
              </li>
              <li>
                <NavLink to="/about-cigarette">Об электронных сигаретах</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Поддержка</li>
              <li>
                <NavLink to="/contact-us">Связаться с нами</NavLink>
              </li>
              <li>
                <NavLink to="/refund">Условия возврата</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Политика конфиденциальности</NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>Прочее</li>
              <li>
                <NavLink to="/market-places">Точки продаж</NavLink>
              </li>
              <li>
                <NavLink to="/company">О компании</NavLink>
              </li>
              <li>
                <NavLink to="/wholesale-customers">Оптовым покупателям</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__socials">
            <a href='/' className="footer__social">
              <Twitter viewBox='2 2 20 20' />
            </a>
            <a href='/' className="footer__social">
              <Instagram viewBox='2 2 20 20' />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__warning__text">
          ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.<br/>
          Сайт используется исключительно в целях информирования<br/>действующих потребителей продукции PLONQ<br/>
          Защищено выпущенными и/или находящимися на одобрении международными патентами..
          </div>
          <div className="footer__copyright__text">
            © 2021 PLONQ LLC<br/>
            40900 Woodward Avenue Suite<br/>
            111 Bloomfield Hills<br/>
            MI 48304 USA<br/>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={581} maxWidth={960}>
        <div className="footer__features">
          <div className="footer__email__subscription">
            <div className="footer__email__subscription__text">
              Подпишитесь на наши обновления
            </div>
            <form className='footer__email__subscription__form'>
              <input type="email" name="subEmail" id="emailInput" />
              <button type="submit">Подписаться</button>
            </form>
          </div>
          <div className="footer__localization">
            <a href="/" className='current-language'>Ru</a>
            <a href="/">En</a>
          </div>
        </div>
        <div className="footer__nav">
          <ul className="footer__nav__list">
            <li>Продукты</li>
            <li>
              <NavLink to="/plonq400">Plonq 400</NavLink>
            </li>
            <li>
              <NavLink to="/plonq500">Plonq 500</NavLink>
            </li>
            <li>
              <NavLink to="/plonqX">Plonq X</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Технологии</li>
            <li>
              <NavLink to="/application">О приложении</NavLink>
            </li>
            <li>
              <NavLink to="/about-cigarette">Об электронных сигаретах</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Поддержка</li>
            <li>
              <NavLink to="/contact-us">Связаться с нами</NavLink>
            </li>
            <li>
              <NavLink to="/refund">Условия возврата</NavLink>
            </li>
            <li>
              <NavLink to="/policy">Политика конфиденциальности</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Прочее</li>
            <li>
              <NavLink to="/market-places">Точки продаж</NavLink>
            </li>
            <li>
              <NavLink to="/company">О компании</NavLink>
            </li>
            <li>
              <NavLink to="/wholesale-customers">Оптовым покупателям</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='/'>
              <img src={Appstore} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for IOS
                </div>
              </div>
            </a>
            <a href='/'>
              <img src={PlayMarket} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for Android
                </div>
              </div>
            </a>
          </div>
          <div className="footer__copyright">
            <div className="footer__socials">
              <a href='/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              © 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__warning__text">
        ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.<br/>
        Сайт используется исключительно в целях информирования действующих потребителей продукции PLONQ<br/>
        Защищено выпущенными и/или находящимися на одобрении международными патентами..
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={580}>
        <div className="footer__email__subscription">
          <div className="footer__email__subscription__text">
            Подпишитесь на наши обновления
          </div>
          <form className='footer__email__subscription__form'>
            <input type="email" name="subEmail" id="emailInput" />
            <button type="submit">Подписаться</button>
          </form>
        </div>
        <div className="footer__nav">
          <ul className="footer__nav__list">
            <li>Продукты</li>
            <li>
              <NavLink to="/plonq400">Plonq 400</NavLink>
            </li>
            <li>
              <NavLink to="/plonq500">Plonq 500</NavLink>
            </li>
            <li>
              <NavLink to="/plonqX">Plonq X</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Технологии</li>
            <li>
              <NavLink to="/application">О приложении</NavLink>
            </li>
            <li>
              <NavLink to="/about-cigarette">Об электронных сигаретах</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Поддержка</li>
            <li>
              <NavLink to="/contact-us">Связаться с нами</NavLink>
            </li>
            <li>
              <NavLink to="/refund">Условия возврата</NavLink>
            </li>
            <li>
              <NavLink to="/policy">Политика конфиденциальности</NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>Прочее</li>
            <li>
              <NavLink to="/market-places">Точки продаж</NavLink>
            </li>
            <li>
              <NavLink to="/company">О компании</NavLink>
            </li>
            <li>
              <NavLink to="/wholesale-customers">Оптовым покупателям</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='/'>
              <img src={Appstore} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for IOS
                </div>
              </div>
            </a>
            <a href='/'>
              <img src={PlayMarket} alt="" />
              <div className="footer__app__text">
                <div className="footer__app__title">
                  Coming soon
                </div>
                <div className="footer__app__platform">
                  for Android
                </div>
              </div>
            </a>
          </div>
          <div className="footer__copyright">
            <div className="footer__socials">
              <a href='/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              © 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__localization">
          <a href="/" className='current-language'>Ru</a>
          <a href="/">En</a>
        </div>
        <div className="footer__warning__text">
        ПРОДАЖА НЕСОВЕРШЕННОЛЕТНИМ ЗАПРЕЩЕНА.<br/>
        Сайт используется исключительно в целях информирования действующих потребителей продукции PLONQ<br/>
        Защищено выпущенными и/или находящимися на одобрении международными патентами..
        </div>
      </MediaQuery>
    </footer>
  )
}