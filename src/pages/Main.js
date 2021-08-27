import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { PageContext } from '../components/Context';

import '../styles/main.scss';

import Logo from '../images/logo_white.svg';
import Logo500 from '../images/500.svg';
import New from '../images/new.svg';
import PlonqXLogo from '../images/plonqx_logo.svg';
import PlonqX from '../images/plonqx.png';
import Map from '../images/map.png';
import Leak from '../images/leak.png';
import Phone from '../images/phone_app.png';
import CatalogPlonq400 from '../images/catalog_plonq_400.png';
import CatalogPlonq500 from '../images/catalog_plonq_500.png';
import CatalogPlonqX from '../images/catalog_plonq_x.png';
import CatalogPlonqXCartridge from '../images/catalog_plonq_x_cartridge.png';
import ModelLogo400 from '../images/catalog_model_logo_400.svg';
import ModelLogo500 from '../images/catalog_model_logo_500.svg';

export default function Main() {
  const {t, Trans} = useContext(PageContext);

  const catalogItemsArray = [
    {
      id: 1,
      photo: CatalogPlonq400,
      logoModelImg: ModelLogo400,
      description: {
        text: 'Одноразовое устройство Plonq на 400 затяжек',
        localisation: 'plonq400.description'
      },
      isAvailable: true,
      price: '370',
    },
    {
      id: 2,
      photo: CatalogPlonq500,
      logoModelImg: ModelLogo500,
      description: {
        text: 'Одноразовое устройство Plonq на 500 затяжек',
        localisation: 'plonq500.description'
      },
      isAvailable: true,
      price: '430'
    },
    {
      id: 3,
      photo: CatalogPlonqX,
      logoModelImg: PlonqXLogo,
      description: {
        text: 'Стартовый набор Plonq X',
        localisation: 'plonqX.description'
      },
      isAvailable: false,
    },
    {
      id: 4,
      photo: CatalogPlonqXCartridge,
      logoModelImg: PlonqXLogo,
      description: {
        text: 'Два сменных картриджа для устройства Plonq X',
        localisation: 'plonqXCartridge.description'
      },
      isAvailable: false,
    },
  ]

  return (
    <div className="main__wrapper">
      <div className="main__header">
        <div className="main__header__text">
          <div className="main__header__logo">
            <img src={New} className="main__header__new" alt="" />
            <img src={Logo} className='main__header__logo__name' alt="" />
            <img src={Logo500} className='main__header__logo__model' alt="" />
          </div>
          <div className="main__header__description">
            {t('defaults.phrases.stick.standard.1')}<br/>
            {t('defaults.phrases.stick.standard.2')}
          </div>
        </div>
        <div className="main__header__links">
          <NavLink to='/plonq500' className="main__header__more-info">
            <span>
              {t('defaults.products.moreInfo')}
            </span>
            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 4.50003L1 8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>
          <NavLink to="/where-to-buy" className="main__header__where-to-buy btn__where-to-buy">
            {t('defaults.products.whereToBuy')}
          </NavLink>
        </div>
      </div>
      <MediaQuery minWidth={961}>
        <div className="main__plonqX__wrapper">
          <div className="main__plonqX__content">
            <div className="main__plonqX__logo">
              <img src={PlonqXLogo} className='main__plonqX__logo__name' alt="" />
            </div>
            <div className="main__plonqX__text">
              {t('defaults.phrases.stick.astonisment.1')}<br/>
              {t('defaults.phrases.stick.astonisment.2')}
            </div>
            <div className="main__plonqX__links">
              <NavLink to='/plonq500' className="main__more-info__link">
                <span>
                  {t('defaults.products.moreInfo')}
                </span>
                <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 4.50003L1 8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
              <div className="main__plonqX__soon main__item__soon">
                {t('defaults.products.soon')}
              </div>
            </div>
          </div>
          <div className="main__plonqX__img">
            <img src={PlonqX} alt="" />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <div className="main__plonqX__wrapper">
          <div className="main__plonqX__logo">
            <img src={PlonqXLogo} className='main__plonqX__logo__name' alt="" />
          </div>
          <div className="main__plonqX__text">
            {t('defaults.phrases.stick.astonisment.1')}<br/>
            {t('defaults.phrases.stick.astonisment.2')}
          </div>
          <div className="main__plonqX__img">
            <img src={PlonqX} alt="" />
          </div>
          <div className="main__plonqX__links">
            <NavLink to='/plonq500' className="main__more-info__link">
              <span>
                {t('defaults.products.moreInfo')}
              </span>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 4.50003L1 8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
            <div className="main__plonqX__soon main__item__soon">
              {t('defaults.products.soon')}
            </div>
          </div>
        </div>
      </MediaQuery>
      <div className="main__catalog__wrapper">
        <div className="main__catalog__container">
          <MediaQuery minWidth={426}>
          {
            catalogItemsArray.map(el => {
              return (
                <div key={el.id} className="main__catalog__item">
                  <div className="main__catalog__item__photo">
                    <img src={el.photo} alt="" />
                  </div>
                  <div className="main__catalog__item__text">
                    <div className="main__catalog__item__logo">
                      <img src={el.logoModelImg} alt="" />
                    </div>
                    <p>
                      <Trans i18nKey={`main.products.${el.description.localisation}`}>
                        {el.description.text}
                      </Trans>
                    </p>
                    {
                      el.isAvailable ? <IsProductAvailable el={el} /> :
                      <div className="main__catalog__item__soon main__item__soon">
                        {t('defaults.products.soon')}
                      </div>
                    }
                  </div>
                </div>
              )
            })
          }
          </MediaQuery>
          <MediaQuery maxWidth={425}>
          {
            catalogItemsArray.map(el => {
              return (
                <div key={el.id} className="main__catalog__item">
                  <div className="main__catalog__item__logo">
                    <img src={el.logoModelImg} alt="" />
                  </div>
                  <div className="main__catalog__item__photo">
                    <img src={el.photo} alt="" />
                  </div>
                  <div className="main__catalog__item__text">
                    <p>
                      <Trans i18nKey={`main.products.${el.description.localisation}`}>
                        {el.description.text}
                      </Trans>
                    </p>
                    {
                      el.isAvailable ? <IsProductAvailable el={el} /> :
                      <div className="main__catalog__item__soon main__item__soon">
                        {t('defaults.products.soon')}
                      </div>
                    }
                  </div>
                </div>
              )
            })
          }
          </MediaQuery>
        </div>
      </div>
      <div className="main__additional">
        <div className="main__map__wrapper">
          <div className="main__map__image">
            <img src={Map} alt="" />
          </div>
          <div className="main__map__stores">
            <div className="main__map__stores__text">
              {t('defaults.products.findStore.p.1')}<br/>
              {t('defaults.products.findStore.p.2')}
              <span> 4244</span>
              {t('defaults.products.findStore.p.3')}
            </div>
            <NavLink to='market-places' className="main__map__stores__link">
              {t('defaults.products.findStore.link')}
            </NavLink>
          </div>
        </div>
        <div className="main__about-cigarettes__wrapper main__feature-box">
          <div className="main__about-cigarettes__content main__feature-box__content">
            <h3>
              {t('defaults.products.about.cigarettes')}
            </h3>
            <p>
              {t('main.features.about.cigarette')}
            </p>
            <NavLink to='/about-cigarettes' className="main__more-info__link">
              <span>
                {t('defaults.products.moreInfo')}
              </span>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 4.50003L1 8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </div>
          <div className="main__about-cigarettes__img main__feature-box__img">
            <img src={Leak} alt="" />
          </div>
        </div>
        <div className="main__about-app__wrapper main__feature-box">
          <div className="main__about-app__content main__feature-box__content">
            <h3>
              {t('defaults.products.about.app')}
            </h3>
            <p>
              {t('main.features.about.app')}
            </p>
            <NavLink to='/application' className="main__more-info__link">
              <span>
                {t('defaults.products.moreInfo')}
              </span>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 4.50003L1 8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </div>
          <div className="main__about-app__img main__feature-box__img">
            <img src={Phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function IsProductAvailable({el}) {
  const {t} = useContext(PageContext);

  return (
    <>
      <div className="main__catalog__item__price">
        {el.price} ₽
      </div>
      <NavLink to='/where-to-buy' className='main__catalog__item__where-to-buy btn__where-to-buy'>
        {t('defaults.products.whereToBuy')}
      </NavLink>
    </>
  )
}