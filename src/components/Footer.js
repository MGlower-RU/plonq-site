import React, { useContext, useState } from 'react';

import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { PageContext } from './Context';
import { Alert } from '@material-ui/lab';
import { Slide } from '@material-ui/core';

import Logo from '../images/logo.svg';
import Appstore from '../images/appstore.svg';
import PlayMarket from '../images/play_market.svg';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';

export default function Footer() {
  const {lngDetect, t, Trans} = useContext(PageContext);

  const lngs = [
    {
      short: 'ru',
      lngName: 'Ru'
    },
    {
      short: 'en',
      lngName: 'En'
    },
  ]

  function changeLanguage(e, lng) {
    e.preventDefault();
    lngDetect.changeLanguage(lng.short)
  }

  return (
    <footer className="footer">
      <MediaQuery minWidth={1281}>
        <div className="footer__features">
          <NavLink to='/' className="footer__logo">
            <img src={Logo} alt="" />
          </NavLink>
          <SubscriptionForm />
          <div className="footer__localization">
            {lngs.map(lng => {
              return (
                <a
                  href="/"
                  key={lng.short}
                  className={lngDetect.language === lng.short ? 'current-language' : ''}
                  onClick={e => changeLanguage(e, lng)}
                >
                  {lng.lngName}
                </a>
              )})}
          </div>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a
              href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noreferrer'
            >
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
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noreferrer'
            >
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
              <li>
                {t('footer.nav.products.header')}
              </li>
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
              <li>
                {t('footer.nav.techs.header')}
              </li>
              <li>
                <NavLink to="/application">
                  {t('footer.nav.techs.app')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-cigarettes">
                  {t('footer.nav.techs.cigarettes')}
                </NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>
                {t('footer.nav.support.header')}
              </li>
              <li>
                <NavLink to="/contact-us">
                  {t('footer.nav.support.contact')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/refund">
                  {t('footer.nav.support.refund')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/policy">
                  {t('footer.nav.support.policy')}
                </NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>
                {t('footer.nav.other.header')}
              </li>
              <li>
                <NavLink to="/market-places">
                  {t('footer.nav.other.places')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/company">
                  {t('footer.nav.other.company')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/wholesale-customers">
                  {t('footer.nav.other.wholesaleBuyers')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            <div className="footer__socials">
              <a href='https://twitter.com/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='https://instagram.com/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              ?? 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__warning__text">
          <Trans i18nKey="footer.warning.1">
            ?????????????? ???????????????????????????????????? ??????????????????.
          </Trans><br/>
          <Trans i18nKey="footer.warning.2">
            ???????? ???????????????????????? ?????????????????????????? ?? ?????????? ????????????????????????????
          </Trans>
          <Trans i18nKey="footer.warning.3">
             ?????????????????????? ???????????????????????? ?????????????????? PLONQ
          </Trans><br/>
          <Trans i18nKey="footer.warning.4">
            ???????????????? ?????????????????????? ??/?????? ???????????????????????? ???? ?????????????????? ???????????????????????????? ??????????????????..
          </Trans>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={961} maxWidth={1280}>
        <div className="footer__features">
          <NavLink to='/' className="footer__logo">
            <img src={Logo} alt="" />
          </NavLink>
          <SubscriptionForm />
          <div className="footer__localization">
            {lngs.map(lng => {
              return (
                <a
                  href="/"
                  key={lng.short}
                  className={lngDetect.language === lng.short ? 'current-language' : ''}
                  onClick={e => changeLanguage(e, lng)}
                >
                  {lng.lngName}
                </a>
              )})}
          </div>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noreferrer'
            >
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
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noreferrer'
            >
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
              <li>
                {t('footer.nav.products.header')}
              </li>
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
              <li>
                {t('footer.nav.techs.header')}
              </li>
              <li>
                <NavLink to="/application">
                  {t('footer.nav.techs.app')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-cigarettes">
                  {t('footer.nav.techs.cigarettes')}
                </NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>
                {t('footer.nav.support.header')}
              </li>
              <li>
                <NavLink to="/contact-us">
                  {t('footer.nav.support.contact')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/refund">
                  {t('footer.nav.support.refund')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/policy">
                  {t('footer.nav.support.policy')}
                </NavLink>
              </li>
            </ul>
            <ul className="footer__nav__list">
              <li>
                {t('footer.nav.other.header')}
              </li>
              <li>
                <NavLink to="/market-places">
                  {t('footer.nav.other.places')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/company">
                  {t('footer.nav.other.company')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/wholesale-customers">
                  {t('footer.nav.other.wholesaleBuyers')}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__socials">
            <a href='https://twitter.com/' className="footer__social">
              <Twitter viewBox='2 2 20 20' />
            </a>
            <a href='https://instagram.com/' className="footer__social">
              <Instagram viewBox='2 2 20 20' />
            </a>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__warning__text">
            <Trans i18nKey="footer.warning.1">
              ?????????????? ???????????????????????????????????? ??????????????????.
            </Trans><br/>
            <Trans i18nKey="footer.warning.2">
              ???????? ???????????????????????? ?????????????????????????? ?? ?????????? ????????????????????????????
            </Trans><br/>
            <Trans i18nKey="footer.warning.3">
              ?????????????????????? ???????????????????????? ?????????????????? PLONQ
            </Trans><br/>
            <Trans i18nKey="footer.warning.4">
              ???????????????? ?????????????????????? ??/?????? ???????????????????????? ???? ?????????????????? ???????????????????????????? ??????????????????..
            </Trans>
          </div>
          <div className="footer__copyright__text">
            ?? 2021 PLONQ LLC<br/>
            40900 Woodward Avenue Suite<br/>
            111 Bloomfield Hills<br/>
            MI 48304 USA<br/>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={581} maxWidth={960}>
        <div className="footer__features">
          <SubscriptionForm />
          <div className="footer__localization">
            {lngs.map(lng => {
              return (
                <a
                  href="/"
                  key={lng.short}
                  className={lngDetect.language === lng.short ? 'current-language' : ''}
                  onClick={e => changeLanguage(e, lng)}
                >
                  {lng.lngName}
                </a>
              )})}
          </div>
        </div>
        <div className="footer__nav">
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.products.header')}
            </li>
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
            <li>
              {t('footer.nav.techs.header')}
            </li>
            <li>
              <NavLink to="/application">
                {t('footer.nav.techs.app')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-cigarettes">
                {t('footer.nav.techs.cigarettes')}
              </NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.support.header')}
            </li>
            <li>
              <NavLink to="/contact-us">
                {t('footer.nav.support.contact')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/refund">
                {t('footer.nav.support.refund')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy">
                {t('footer.nav.support.policy')}
              </NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.other.header')}
            </li>
            <li>
              <NavLink to="/market-places">
                {t('footer.nav.other.places')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/company">
                {t('footer.nav.other.company')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/wholesale-customers">
                {t('footer.nav.other.wholesaleBuyers')}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noreferrer'
            >
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
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noreferrer'
            >
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
              <a href='https://twitter.com/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='https://instagram.com/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              ?? 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__warning__text">
          <Trans i18nKey="footer.warning.1">
            ?????????????? ???????????????????????????????????? ??????????????????.
          </Trans><br/>
          <Trans i18nKey="footer.warning.2">
            ???????? ???????????????????????? ?????????????????????????? ?? ?????????? ????????????????????????????
          </Trans>
          <Trans i18nKey="footer.warning.3">
             ?????????????????????? ???????????????????????? ?????????????????? PLONQ
          </Trans><br/>
          <Trans i18nKey="footer.warning.4">
            ???????????????? ?????????????????????? ??/?????? ???????????????????????? ???? ?????????????????? ???????????????????????????? ??????????????????..
          </Trans>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={580}>
        <SubscriptionForm />
        <div className="footer__nav">
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.products.header')}
            </li>
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
            <li>
              {t('footer.nav.techs.header')}
            </li>
            <li>
              <NavLink to="/application">
                {t('footer.nav.techs.app')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-cigarettes">
                {t('footer.nav.techs.cigarettes')}
              </NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.support.header')}
            </li>
            <li>
              <NavLink to="/contact-us">
                {t('footer.nav.support.contact')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/refund">
                {t('footer.nav.support.refund')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy">
                {t('footer.nav.support.policy')}
              </NavLink>
            </li>
          </ul>
          <ul className="footer__nav__list">
            <li>
              {t('footer.nav.other.header')}
            </li>
            <li>
              <NavLink to="/market-places">
                {t('footer.nav.other.places')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/company">
                {t('footer.nav.other.company')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/wholesale-customers">
                {t('footer.nav.other.wholesaleBuyers')}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__general">
          <div className="footer__apps">
            <a href='https://www.apple.com/app-store/'
              target='_blank'
              rel='noreferrer'
            >
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
            <a
              href='https://play.google.com/store'
              target='_blank'
              rel='noreferrer'
            >
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
              <a href='https://twitter.com/' className="footer__social">
                <Twitter viewBox='2 2 20 20' />
              </a>
              <a href='https://instagram.com/' className="footer__social">
                <Instagram viewBox='2 2 20 20' />
              </a>
            </div>
            <div className="footer__copyright__text">
              ?? 2021 PLONQ LLC<br/>
              40900 Woodward Avenue Suite<br/>
              111 Bloomfield Hills<br/>
              MI 48304 USA<br/>
            </div>
          </div>
        </div>
        <div className="footer__localization">
          {lngs.map(lng => {
            return (
              <a
                href="/"
                key={lng.short}
                className={lngDetect.language === lng.short ? 'current-language' : ''}
                onClick={e => changeLanguage(e, lng)}
              >
                {lng.lngName}
              </a>
            )})}
        </div>
        <div className="footer__warning__text">
          <Trans i18nKey="footer.warning.1">
            ?????????????? ???????????????????????????????????? ??????????????????.
          </Trans><br/>
          <Trans i18nKey="footer.warning.2">
            ???????? ???????????????????????? ?????????????????????????? ?? ?????????? ????????????????????????????
          </Trans>
          <Trans i18nKey="footer.warning.3">
             ?????????????????????? ???????????????????????? ?????????????????? PLONQ
          </Trans><br/>
          <Trans i18nKey="footer.warning.4">
            ???????????????? ?????????????????????? ??/?????? ???????????????????????? ???? ?????????????????? ???????????????????????????? ??????????????????..
          </Trans>
        </div>
      </MediaQuery>
    </footer>
  )
}

function SubscriptionForm() {
  const {t} = useContext(PageContext)

  const [emailValue, setEmailValue] = useState('')
  const [isFormValid, setIsFormValid] = useState(true)
  const [formSubmissionAlert, setFormSubmissionAlert] = useState(false)

  function isEmailValid(e) {
    setEmailValue(e.target.value);
    (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) ? setIsFormValid(true) : setIsFormValid(false);
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        "email": emailValue
      })
    })
    .then(() => {
      setEmailValue('')
      setIsFormValid(true)
      setFormSubmissionAlert(true)
      setTimeout(() => {
        setFormSubmissionAlert(false)
      }, 4000)
    })
    .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <div className="footer__email__subscription">
      {formSubmissionAlert &&
        <Slide
          direction="up"
          in={formSubmissionAlert}
          timeout={500}
          mountOnEnter
          unmountOnExit
         >
          <Alert severity="success" onClose={() => setFormSubmissionAlert(false)}>
            {t('footer.emailSubscription.alert')}
          </Alert>
        </Slide>
      }
      <div className="footer__email__subscription__text">
        {t('footer.emailSubscription.p')}
      </div>
      <form
        className='footer__email__subscription__form'
        name='emailSubscription'
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="emailSubscription" />
        <input
          type="text"
          name='email'
          id="emailInput"
          value={emailValue}
          onChange={isEmailValid} />
        <button type="submit" disabled={isFormValid}>
          {t('footer.emailSubscription.button')}
        </button>
      </form>
    </div>
  )
}