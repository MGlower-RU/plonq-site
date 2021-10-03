import { useContext } from "react";

import { PageContext } from '../components/Context';
import ContactForm from "../components/ContactForm";

import '../styles/wholesale-buyers.scss';

export default function WholesaleBuyers() {
  const {t} = useContext(PageContext);

  return (
    <div className="wholesale-buyers__wrapper">
      <div className="wholesale-buyers__text">
        <h2>
          {t('wholesaleBuyers.header.1')}<br/>
          {t('wholesaleBuyers.header.2')}
        </h2>
        <ul className='wholesale-buyers__list'>
          <li>
            {t('wholesaleBuyers.list.1')}
          </li>
          <li>
            {t('wholesaleBuyers.list.2')}
          </li>
          <li>
            {t('wholesaleBuyers.list.3')}
          </li>
          <li>
            {t('wholesaleBuyers.list.4')}
          </li>
        </ul>
        <p>
          {t('wholesaleBuyers.p.1')}
        </p>
        <p>
          {t('wholesaleBuyers.p.2')}
        </p>
      </div>
      <ContactForm formName='wholesaleBuyers' />
    </div>
  )
}