import React, { useContext, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { PageContext } from '../components/Context';
import MediaQuery from 'react-responsive';
import Carousel from 'react-material-ui-carousel';

import '../styles/plonq500.scss';

import HandUp from '../images/hand_up.png';
import HandDown from '../images/hand_down.png';
import Plonq500Header from '../images/plonq500_green_background.png';
import Plonq500Minimalistic from '../images/plonq500_minimalistic.png';
import NoSmoke from '../images/no_smoke.svg';
import NoButton from '../images/no_button.svg';
import NoService from '../images/no_service.svg';
import NoLoose from '../images/no_loose.svg';
import Certificate1 from '../images/certificate_1.png';
import Certificate2 from '../images/certificate_2.png';
import Certificate3 from '../images/certificate_3.png';
import Map from '../images/laptop_map.png';
import Tastes from '../images/tastes.png';
import Plonq500Mint from '../images/plonq500_carousel.png';
import Battery from '../images/specification_battery.svg';
import Smoke from '../images/specification_smoke.svg';
import Liquid from '../images/specification_liquid.svg';
import Ruble from '../images/specification_ruble.svg';
import Nicotine from '../images/specification_nicotine.svg';
import SpecsPlonq from '../images/specification_plonq_500.png';
import SpecsPlonqFull from '../images/specification_plonq_500__fullsize.png';
import Plonq500DesignMobile from '../images/design_plonq_500_mobile.png';
import Plonq500Design from '../images/design_plonq_500.png';
import Plonq500Components from '../images/plonq500_components.png';
import CottonComponent from '../images/components_cotton.svg';
import ControllerComponent from '../images/components_controller.svg';
import LowBatteryComponent from '../images/components_battery_low.svg';
import HighBatteryComponent from '../images/components_battery_high.svg';
import PlasticComponent from '../images/components_plastic.svg';
import MintBg from '../images/taste_mint.png';
import PineappleBg from '../images/taste_pineapple.png';
import MelonBg from '../images/taste_melon.png';
import MangoBg from '../images/taste_mango.png';
import TobaccoBg from '../images/taste_tobacco.png';
import CoffeeBg from '../images/taste_coffee.png';
import GreenTeaBg from '../images/taste_green_tea.png';
import GrapesBg from '../images/taste_grapes.png';
import EnergyBg from '../images/taste_energy.png';
import CherryBg from '../images/taste_cherry.png';
import ColaBg from '../images/taste_cola.png';
import LabLogo from '../images/composition_laboratory_logo.png';
import StickBody from '../images/plonq500_puff_stick_body.png';
import StickSmoke from '../images/plonq500_puff_stick_smoke.png';
import VaporStickBody from '../images/plonq500_vapor_stick_body.png';
import VaporStickSmoke from '../images/plonq500_vapor_stick_smoke.png';

export default function Plonq500() {
  const {t} = useContext(PageContext);
  const sliderRef = useRef(null)

  const tastesArray = [
    {
      img: Plonq500Mint,
      background: MintBg,
      color: 'rgb(191, 229, 215)',
      taste: 1,
    },
    {
      img: Plonq500Mint,
      background: PineappleBg,
      color: 'rgb(254, 246, 118)',
      taste: 2,
    },
    {
      img: Plonq500Mint,
      background: MelonBg,
      color: 'rgb(252, 199, 151)',
      taste: 3,
    },
    {
      img: Plonq500Mint,
      background: MangoBg,
      color: 'rgb(250, 147, 85)',
      taste: 4,
    },
    {
      img: Plonq500Mint,
      background: ColaBg,
      color: 'rgb(222, 48, 60)',
      taste: 5,
    },
    {
      img: Plonq500Mint,
      background: CherryBg,
      color: 'rgb(167, 51, 71)',
      taste: 6,
    },
    {
      img: Plonq500Mint,
      background: GrapesBg,
      color: 'rgb(03, 56, 90)',
      taste: 7,
    },
    {
      img: Plonq500Mint,
      background: EnergyBg,
      color: 'rgb(74, 74, 72)',
      taste: 8,
    },
    {
      img: Plonq500Mint,
      background: TobaccoBg,
      color: 'rgb(98, 85, 73)',
      taste: 9,
    },
    {
      img: Plonq500Mint,
      background: CoffeeBg,
      color: 'rgb(118, 80, 60)',
      taste: 10,
    },
    {
      img: Plonq500Mint,
      background: GreenTeaBg,
      color: 'rgb(209, 221, 174)',
      taste: 11,
    },
  ]

  const specificationsArray = [
    {
      img: Battery,
      localisationId: 1,
    },
    {
      img: Smoke,
      localisationId: 2,
    },
    {
      img: Liquid,
      localisationId: 3,
    },
    {
      img: Ruble,
      localisationId: 4,
    },
    {
      img: Nicotine,
      localisationId: 5,
    },
  ]

  const qualityComponentsArray = [
    {
      img: CottonComponent,
      localisationId: 1,
    },
    {
      img: ControllerComponent,
      localisationId: 2,
    },
    {
      img: [LowBatteryComponent, HighBatteryComponent],
      localisationId: 3,
    },
    {
      img: PlasticComponent,
      localisationId: 4,
    },
  ]

  return (
    <div className="plonq500__wrapper">
      <div className="plonq500__header">
        <img src={HandUp} draggable='false' className='plonq500__header__hand-up' alt="" />
        <img src={Plonq500Header} draggable='false'  className='plonq500__header__stick' alt="" />
        <img src={HandDown} draggable='false'  className='plonq500__header__hand-down' alt="" />
        <div className="plonq500__header__text">
          <h1>
            {t('defaults.phrases.stick.standard.1')}
          </h1>
          <h1>
            {t('defaults.phrases.stick.standard.2')}
          </h1>
          <div className="plonq500__header__text__more-info">
            <svg width="14" height="90" viewBox="0 0 14 90" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.2029 80.8111C13.2836 80.699 13.2581 80.5428 13.1461 80.4621C13.034 80.3815 12.8778 80.4069 12.7971 80.519L13.2029 80.8111ZM7 89.0001L6.7971 89.1461C6.84408 89.2114 6.91959 89.2501 7 89.2501C7.08041 89.2501 7.15592 89.2114 7.2029 89.1461L7 89.0001ZM1.2029 80.519C1.12223 80.4069 0.966001 80.3815 0.853944 80.4621C0.741886 80.5428 0.716437 80.699 0.797102 80.8111L1.2029 80.519ZM12.7971 80.519L6.7971 88.854L7.2029 89.1461L13.2029 80.8111L12.7971 80.519ZM7.2029 88.854L1.2029 80.519L0.797102 80.8111L6.7971 89.1461L7.2029 88.854Z" fill="#298B7A" fillOpacity="0.82"/>
              <path d="M6.9807 1L6.9807 88.7282" stroke="#298B7A" strokeOpacity="0.82" strokeWidth="0.5" strokeLinecap="round"/>
            </svg>
            <span>
              {t('defaults.products.moreInfo')}
            </span>
          </div>
        </div>
      </div>
      <div className="plonq500__advantages__wrapper">
        <h2>
          {t('plonq500.advantages.header')}
        </h2>
        <div className="plonq500__advantages__container">
          <div className="plonq500__advantages__img">
            <img src={Plonq500Minimalistic} alt="" />
          </div>
          <div className="plonq500__advantages">
            <div className="plonq500__advantage">
              <div className="plonq500__advantage__img">
                <img src={NoSmoke} alt="" />
              </div>
              <div className="plonq500__advantage__text">
                <h3>
                  {t('plonq500.advantages.1.header')}
                </h3>
                <p>
                  {t('plonq500.advantages.1.description')}
                </p>
              </div>
            </div>
            <div className="plonq500__advantage">
              <div className="plonq500__advantage__img">
                <img src={NoButton} alt="" />
              </div>
              <div className="plonq500__advantage__text">
                <h3>
                  {t('plonq500.advantages.2.header')}
                </h3>
                <p>
                  {t('plonq500.advantages.2.description')}
                </p>
              </div>
            </div>
            <div className="plonq500__advantage">
              <div className="plonq500__advantage__img">
                <img src={NoService} alt="" />
              </div>
              <div className="plonq500__advantage__text">
                <h3>
                  {t('plonq500.advantages.3.header')}
                </h3>
                <p>
                  {t('plonq500.advantages.3.description')}
                </p>
              </div>
            </div>
            <div className="plonq500__advantage">
              <div className="plonq500__advantage__img">
                <img src={NoLoose} alt="" />
              </div>
              <div className="plonq500__advantage__text">
                <h3>
                  {t('plonq500.advantages.4.header')}
                </h3>
                <p>
                  {t('plonq500.advantages.4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plonq500__design__wrapper">
        <div className="plonq500__design__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.design.header')}
          </h2>
          <div className="plonq500__design__content">
            <h3>
              {t('plonq500.design.tagline.1')}<br/>
              {t('plonq500.design.tagline.2')}
            </h3>
            <div className="plonq500__design__img">
              <MediaQuery minWidth={961}>
                <img src={Plonq500Design} alt="" />
              </MediaQuery>
              <MediaQuery maxWidth={960}>
                <img src={Plonq500DesignMobile} alt="" />
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
      <div className="plonq500__puff__wrapper">
        <img draggable='false' src={StickSmoke} className='plonq500__puff__img__smoke' alt="" />
        <img draggable='false' src={StickBody} className='plonq500__puff__img__body' alt="" />
        <div className="plonq500__puff__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.puff.header')}
          </h2>
          <p>
            {t('plonq500.puff.p')}
          </p>
          <div className="plonq500__puff__specifications">
            <div className="plonq500__puff__specification">
              <div className="plonq500__puff__specification__unit">
                ??0.4 {t('plonq500.puff.specifications.1.unit')}
              </div>
              <div className="plonq500__puff__specification__text">
                {t('plonq500.puff.specifications.1.specification')}
              </div>
            </div>
            <div className="plonq500__puff__specification">
              <div className="plonq500__puff__specification__unit">
                7-7.5 {t('plonq500.puff.specifications.2.unit')}
              </div>
              <div className="plonq500__puff__specification__text">
                {t('plonq500.puff.specifications.2.specification')}
              </div>
            </div>
            <div className="plonq500__puff__specification">
              <div className="plonq500__puff__specification__unit">
                =0.2 {t('plonq500.puff.specifications.3.unit')}
              </div>
              <div className="plonq500__puff__specification__text">
                {t('plonq500.puff.specifications.3.specification')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="plonq500__vapor__wrapper">
        <img draggable='false' src={VaporStickSmoke} className='plonq500__vapor__img__smoke' alt="" />
        <img draggable='false' src={VaporStickBody} className='plonq500__vapor__img__body' alt="" />
        <div className="plonq500__vapor__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.vapor.header')}
          </h2>
          <p>
            {t('plonq500.vapor.p')}
          </p>
        </div>
      </div>
      <div className="plonq500__components__wrapper">
        <div className="plonq500__components__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.components.header')}
          </h2>
          <div className="plonq500__components__content">
            <div className="plonq500__components__img">
              <img src={Plonq500Components} alt="" />
            </div>
            <div className="plonq500__components__items">
            {
              qualityComponentsArray.map((el, i) => {
                return (
                  <div key={i} className="plonq500__components__item">
                    <div className="plonq500__components__item__img">
                      {
                        !Array.isArray(el.img) ? <img src={el.img} alt="" /> :
                        el.img.map((el, i) => {
                          return (
                            <img key={i} src={el} alt="" />
                          )
                        })
                      }
                    </div>
                    <p>
                      {t(`plonq500.components.description.${el.localisationId}`)}
                    </p>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
      <div className="plonq500__composition__wrapper">
        <div className="plonq500__composition__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.composition.header')}
          </h2>
          <p>
            {t('plonq500.composition.p.1')}
          </p>
          <p>
            {t('plonq500.composition.p.2')}
          </p>
          <div className="plonq500__composition__img">
            <img src={LabLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="plonq500__nature-tastes__wrapper">
        <div className="plonq500__nature-tastes__container">
          <div className="plonq500__nature-tastes__text">
            <h2 className='plonq500__title__number'>
              {t('plonq500.natureTastes.header')}
            </h2>
            <p>
              {t('plonq500.natureTastes.p')}
            </p>
          </div>
          <div className="plonq500__nature-tastes">
            {
              tastesArray.map((el, i) => {
                return (
                  <div key={i} className="plonq500__nature-taste">
                    <div
                      className="plonq500__nature-taste__stick"
                      style={{backgroundImage: `url(${el.background})`}}
                    >
                      <span></span>
                    </div>
                    <div className="plonq500__nature-taste__name">
                      ??? {t(`plonq500.tastes.${el.taste}.taste`)}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="plonq500__quality__wrapper">
        <div className="plonq500__quality__container">
          <h2 className='plonq500__title__number'>
            {t('plonq500.quality.header')}
          </h2>
          <p>
            {t('plonq500.quality.p')}
          </p>
        </div>
      </div>
      <div className="plonq500__specifications__wrapper">
        <MediaQuery minWidth={426}>
          <div className="plonq500__specifications__container">
            <div className="plonq500__specifications__text">
              <h2>
                {t(`plonq500.specifications.header`)}
              </h2>
              <div className="plonq500__specifications__items">
                {
                  specificationsArray.map((el, i) => {
                    return (
                      <div key={i} className="plonq500__specification__item">
                        <div className="plonq500__specification__item__img">
                          <img src={el.img} alt="" />
                        </div>
                        <div className="plonq500__specification__item__text">
                          <p>
                            {t(`plonq500.specifications.${el.localisationId}.name`)}
                          </p>
                          <span>
                            {t(`plonq500.specifications.${el.localisationId}.description`)}
                          </span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="plonq500__specifications__img">
              <img src={SpecsPlonq} alt="" />
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={425}>
          <h2>
            {t(`plonq500.specifications.header`)}
          </h2>
          <div className="plonq500__specifications__container">
            <div className="plonq500__specifications__items">
              {
                specificationsArray.map((el, i) => {
                  return (
                    <div key={i} className="plonq500__specification__item">
                      <div className="plonq500__specification__item__img">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="plonq500__specification__item__text">
                        <p>
                          {t(`plonq500.specifications.${el.localisationId}.name`)}
                        </p>
                        <span>
                          {t(`plonq500.specifications.${el.localisationId}.description`)}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="plonq500__specifications__img">
              <img src={SpecsPlonqFull} alt="" />
            </div>
          </div>
        </MediaQuery>
      </div>
      <MediaQuery minWidth={961}>
        <div className="plonq500__tastes__wrapper">
          <h2>
            {t('plonq500.tastes.header')}
          </h2>
          <div className="plonq500__tastes__container">
            <div className="plonq500__tastes__img">
              <img src={Tastes} alt="" />
            </div>
            <div className="plonq500__tastes">
              {tastesArray.map((el, i) => {
                return (
                  <div key={i} className="plonq500__taste">
                    <span style={{backgroundColor: el.color}}></span>
                    <p>{t(`plonq500.tastes.${el.taste}.taste`)}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <NavLink to='market-places' className="plonq500__where-to-buy__link">
            {t('defaults.products.whereToBuy')}
          </NavLink>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={960}>
        <div className="plonq500__slider__wrapper">
          <Carousel
            ref={sliderRef}
            animation='slide'
            fullHeightHover={false}
            autoPlay={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
              style: {
                backgroundColor: 'transparent',
                display: 'flex',
                height: '100px',
                margin: '0'
              }
            }}
            navButtonsWrapperProps={{
              style: {
                height: 'auto'
              }
            }}
            PrevIcon={<CarouselButton />}
            NextIcon={<CarouselButton direction={true} />}
          >
            {
              tastesArray.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="plonq500__slider__item"
                  >
                    <div className="plonq500__slider__item__img">
                      <img src={el.img} alt="" />
                    </div>
                    <p>
                      {t(`plonq500.tastes.${el.taste}.taste`)}
                    </p>
                    <span>
                      {t(`plonq500.tastes.${el.taste}.description`)}
                    </span>
                  </div>
                )
              })
            }
          </Carousel>
          <NavLink
            to='market-places'
            className="plonq500__where-to-buy__link"
          >
            {t('defaults.products.whereToBuy')}
          </NavLink>
        </div>
      </MediaQuery>
      <div className="plonq500__quality-certificates__wrapper">
        <h2>
          {t('products.quality')}
        </h2>
        <div className="plonq500__quality-certificates__container">
          <div className="plonq500__quality-certificate">
            <img src={Certificate1} alt="" />
          </div>
          <div className="plonq500__quality-certificate">
            <img src={Certificate2} alt="" />
          </div>
          <div className="plonq500__quality-certificate">
            <img src={Certificate3} alt="" />
          </div>
        </div>
      </div>
      <div className="plonq500__where-to-buy__wrapper">
          <div className="plonq500__where-to-buy__text">
            {t('defaults.products.findStore.p.1')}<br/>
            {t('defaults.products.findStore.p.2')}
            <span> 4244</span>
            {t('defaults.products.findStore.p.3')}
          </div>
          <div className="plonq500__where-to-buy__img">
            <img src={Map} alt="" />
          </div>
          <NavLink to='market-places' className="plonq500__where-to-buy__link">
            {t('defaults.products.findStore.link')}
          </NavLink>
      </div>
    </div>
  )
}

function CarouselButton({direction}) {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{transform: `${direction ? 'rotateY(180deg)' : 'rotateY(0)'}`}}
    >
      <path
        d="M15 5L1 5"
        stroke="#494949"
        strokeLinecap="round"
      />
      <path d="M5.68765 0.609566C5.90328 0.437061 6.21793 0.472021 6.39043 0.687652C6.56294 0.903283 6.52798 1.21793 6.31235 1.39043L5.68765 0.609566ZM1 5L0.687653 5.39044C0.569046 5.29555 0.500001 5.15189 0.500001 5C0.500001 4.84811 0.569046 4.70445 0.687653 4.60957L1 5ZM6.31235 8.60957C6.52798 8.78207 6.56294 9.09672 6.39044 9.31235C6.21793 9.52798 5.90328 9.56294 5.68765 9.39043L6.31235 8.60957ZM6.31235 1.39043L1.31235 5.39044L0.687653 4.60957L5.68765 0.609566L6.31235 1.39043ZM1.31235 4.60957L6.31235 8.60957L5.68765 9.39043L0.687653 5.39044L1.31235 4.60957Z" fill="#494949"/>
    </svg>
  )
}