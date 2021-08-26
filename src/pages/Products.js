import { useContext } from "react";

import { PageContext } from '../components/Context';

import '../styles/products.scss';

import PlonqXDuo from '../images/products_plonq_x_duo.png';
import PlonqPod from '../images/products_plonq_pod.png';
import Plonq500 from '../images/products_plonq_500_colorful.png';
import Certificate1 from '../images/certificate_1.png';
import Certificate2 from '../images/certificate_2.png';
import Certificate3 from '../images/certificate_3.png';

export default function Products() {
  const {t} = useContext(PageContext);

  return (
    <div className="products__wrapper">
      <div className="products__device__plonqX products__device">
        <div className="products__device__plonqX__text products__device__text">
          <h2>
            {t('products.plonqX.header')}
          </h2>
          <p className="products__device__description">
            {t('products.plonqX.description')}
          </p>
          <p className="products__device__features">
            {t('products.plonqX.p.1')}
          </p>
          <p className="products__device__features">
            {t('products.plonqX.p.2')}
          </p>
        </div>
        <div className="products__device__plonqX__img">
          <img src={PlonqXDuo} alt="" />
        </div>
      </div>
      <div className="products__device__plonq-pod products__device">
        <div className="products__device__plonq-pod__img">
          <img src={PlonqPod} alt="" />
        </div>
        <div className="products__device__plonq-pod__text products__device__text">
          <h2>
            {t('products.plonqPod.header')}
          </h2>
          <p className="products__device__description">
            {t('products.plonqPod.description')}
          </p>
          <p className="products__device__features">
            {t('products.plonqPod.p.1')}
          </p>
        </div>
      </div>
      <div className="products__device__plonq500 products__device">
        <div className="products__device__plonq500__text products__device__text">
          <h2>
            {t('products.plonq500.header')}
          </h2>
          <p className="products__device__description">
            {t('products.plonq500.description')}
          </p>
          <p className="products__device__features">
            {t('products.plonq500.p.1')}
          </p>
        </div>
        <div className="products__device__plonq500__img">
          <img src={Plonq500} alt="" />
        </div>
      </div>
      <div className="products__fluid-composition__wrapper">
        <div className="products__fluid-composition__container">
          <h2>
            {t('products.composition.header')}
          </h2>
          <div className="products__fluid-composition__elements">
            <div className="products__fluid-composition__element">
              <h3>
                {t('products.composition.elements.1.header')}
              </h3>
              <p>
                {t('products.composition.elements.1.description.1')}
              </p>
            </div>
            <div className="products__fluid-composition__element">
              <h3>
                {t('products.composition.elements.2.header')}
              </h3>
              <p>
                {t('products.composition.elements.2.description.1')}
              </p>
              <p>
                {t('products.composition.elements.2.description.2')}
              </p>
            </div>
            <div className="products__fluid-composition__element">
              <h3>
                {t('products.composition.elements.3.header')}
              </h3>
              <p>
                {t('products.composition.elements.3.description.1')}
              </p>
            </div>
            <div className="products__fluid-composition__element">
              <h3>
                {t('products.composition.elements.4.header')}
              </h3>
              <p>
                {t('products.composition.elements.4.description.1')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="quality-certificates__wrapper">
        <h2>
          {t('products.quality')}
        </h2>
        <div className="quality-certificates__container">
          <div className="quality-certificate">
            <img src={Certificate1} alt="" />
          </div>
          <div className="quality-certificate">
            <img src={Certificate2} alt="" />
          </div>
          <div className="quality-certificate">
            <img src={Certificate3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}