import { useContext } from "react";

import { PageContext } from '../components/Context';
import ContactForm from "../components/ContactForm";

import '../styles/contact-us.scss';

export default function ContactUs() {
  const {t} = useContext(PageContext);

  return (
    <div className="contact-us__wrapper">
      <div className="contact-us__text">
        <h2>
          {t('contactUs.header')}
        </h2>
        <p>
          {t('contactUs.p.1')}
        </p>
        <p>
          {t('contactUs.p.2')}
        </p>
      </div>
      <ContactForm formName='contactUs' />
    </div>
  )
}