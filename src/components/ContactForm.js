import { useContext } from "react";
import { PageContext } from './Context';

import '../styles/contact-form.scss';

export default function ContactForm() {
  const {t} = useContext(PageContext);

  return (
    <form className="contact-form__wrapper">
      <div className="contact-form__label__name">
        {t('defaults.contactForm.name')}
      </div>
      <input
        type="text"
        placeholder={t('defaults.contactForm.placeholderName')}
        className='contact-form__input__name' 
      />

      <div className="contact-form__label__tel">
        {t('defaults.contactForm.number')}
      </div>
      <input
        type="tel"
        placeholder='+7 999 999-99-99'
        className='contact-form__input__tel'
      />

      <div className="contact-form__label__email">
        E-mail
      </div>
      <input
        type='email'
        placeholder='mail@gmail.com'
        className='contact-form__input__email'
      />

      <div className="contact-form__label__message">
        {t('defaults.contactForm.message')}
      </div>
      <textarea className="contact-form__input__message" />
      <button type='submit'>
        {t('defaults.contactForm.submitBtn')}
      </button>
    </form>
  )
}