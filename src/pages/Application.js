import React, { useContext } from 'react';

import CurveLineChart from '../components/CurveLineChart';
import { PageContext } from '../components/Context';
import MediaQuery from 'react-responsive';
import Carousel from 'react-material-ui-carousel';

import '../styles/application.scss';

import AppPhoneSmall from '../images/application_app_1.png';
import AppPhone from '../images/application_app_2.png';
import PlonqUpdate from '../images/application_phone_update.png';
import PairingPhone from '../images/application_header.png';
import workingAI from '../images/application_working_ai.png';

export default function Application() {
  const {t} = useContext(PageContext);

  const howItWorksArray = [
    {
      img: workingAI,
      localisationId: 0
    },
    {
      img: workingAI,
      localisationId: 1
    },
    {
      img: workingAI,
      localisationId: 2
    },
  ]

  return (
    <div className="application__wrapper">
      <MediaQuery maxWidth={960}>
        <div className="application__header">
          <img src={PairingPhone} alt="" />
        </div>
      </MediaQuery>
      <div className="application__compare__wrapper">
        <h2>
          {t('application.compare.header')}
        </h2>
        <div className="application__compare__container">
          <MediaQuery minWidth={961}>
            <div className="application__compare__chart">
              <h3>
                {t('application.compare.chart.labels.top')}
              </h3>
              <CurveLineChart />
              <h3>
                {t('application.compare.chart.labels.right')}
              </h3>
            </div>
            <div className="application__compare__chart-legend">
              <div className="application__compare__chart-legend__items">
                <p>
                  {t('application.compare.chart.legend.1')}
                </p>
                <p>
                  {t('application.compare.chart.legend.2')}
                </p>
                <p>
                  {t('application.compare.chart.legend.3')}
                </p>
              </div>
              <a href="https://google.com">
                {t('application.compare.chart.link')}
              </a>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={960}>
            <div className="application__compare__chart-legend__items">
                <p>
                  {t('application.compare.chart.legend.1')}
                </p>
                <p>
                  {t('application.compare.chart.legend.2')}
                </p>
                <p>
                  {t('application.compare.chart.legend.3')}
                </p>
            </div>
            <div className="application__compare__chart">
              <h3>
                {t('application.compare.chart.labels.top')}
              </h3>
              <CurveLineChart />
              <h3>
                {t('application.compare.chart.labels.right')}
              </h3>
            </div>
            <a href="https://google.com">
              {t('application.compare.chart.link')}
            </a>
          </MediaQuery>
        </div>
      </div>
      <div className="application__therapist__wrapper">
        <div className="application__therapist__text">
          <h2>
            {t('application.therapist.header')}
          </h2>
          <h3>
            {t('application.therapist.title')}
          </h3>
          <p>
            {t('application.therapist.description')}
          </p>
        </div>
        <div className="application__therapist__imgs">
          <img src={AppPhoneSmall} alt="" />
          <img src={AppPhone} alt="" />
        </div>
      </div>
      <div className="application__how-it-works__wrapper">
        <h2>
          {t('application.howItWorks.header')}
        </h2>
        <Carousel
          className='application__how-it-works__carousel'
          animation='slide'
          reverseEdgeAnimationDirection={false}
          fullHeightHover={false}
          autoPlay={false}
          indicators={false}
          navButtonsAlwaysVisible={true}
          navButtonsWrapperProps={{
            className: 'application__how-it-works__carousel__button-wrapper',
            style: {
              borderRadius: '50%',
              top: 'auto',
              position: 'relative'
            }
          }}
          navButtonsProps={{
            className: 'application__how-it-works__carousel__button',
            style: {
              backgroundColor: 'rgb(255, 255, 255)',
              color: 'black',
              display: 'flex',
              margin: '0',
              width: '100%',
              height: '100%'
            }
          }}
        >
          {
            howItWorksArray.map((el, i) => {
              return (
                <div
                  key={i}
                  className="application__slider__item"
                >
                  <div className="application__slider__item__img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="application__slider__item__text">
                    <h2>
                      {t(`application.howItWorks.${el.localisationId}.title`)}
                    </h2>
                    <p>
                      {t(`application.howItWorks.${el.localisationId}.p`)}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="application__update__wrapper">
        <div className="application__update__text">
          <h2>
            {t('application.update.header')}
          </h2>
          <p>
            {t('application.update.description.1')}
          </p>
          <p>
            {t('application.update.description.2')}
          </p>
          <p>
            {t('application.update.description.3')}
          </p>
        </div>
        <div className="application__update__img">
          <img src={PlonqUpdate} alt="" />
        </div>
      </div>
    </div>
  )
}