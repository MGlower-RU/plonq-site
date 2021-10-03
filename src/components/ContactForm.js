import { useContext, useState } from "react";
import { PageContext } from './Context';

import '../styles/contact-form.scss';

export default function ContactForm({formName}) {
  const {t} = useContext(PageContext);

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isFormValid, setIsFormValid] = useState({
    name: false,
    phone: false,
    email: false,
    message: false
  })

  function isNameValid(e) {
    const value = e.target.value.toString().trimLeft()
    setFormValues({...formValues, name: value})
    value.split(' ').length > 1 ? setIsFormValid({...isFormValid, name: true}) : setIsFormValid({...isFormValid, name: false})
  }

  function isEmailValid(e) {
    const value = e.target.value
    setFormValues({...formValues, email: value})
    const emailIsValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    emailIsValid ? setIsFormValid({...isFormValid, email: true}) : setIsFormValid({...isFormValid, email: false})
  }

  function isPhoneValid(e) {
    const value = e.target.value.replace(/[^0-9]+/g, '')
    setFormValues({...formValues, phone: value})
    const phoneIsValid = value.length > 9
    phoneIsValid ? setIsFormValid({...isFormValid, phone: true}) : setIsFormValid({...isFormValid, phone: false})
  }

  function isMsgValid(e) {
    const value = e.target.value
    setFormValues({...formValues, message: value})
    String(value).trim().length > 12 ? setIsFormValid({...isFormValid, message: true}) : setIsFormValid({...isFormValid, message: false})
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
        "name": formValues.name,
        "phone": formValues.phone,
        "email": formValues.email,
        "msg": formValues.message
      })
    })
    .then(() => {
      setFormValues({name: '', phone: '', email: '', message: ''})
      setIsFormValid({name: false, phone: false, email: false, message: false})
    })
    .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <form
      className="contact-form__wrapper"
      name={formName}
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <div className="contact-form__label__name">
        {t('defaults.contactForm.name')}
      </div>
      <input
        type="text"
        value={formValues.name}
        onChange={isNameValid}
        name='fullName'
        placeholder={t('defaults.contactForm.placeholderName')}
        className='contact-form__input__name'
      />

      <div className="contact-form__label__tel">
        {t('defaults.contactForm.number')}
      </div>
      <input
        maxLength="11"
        value={formValues.phone}
        onChange={isPhoneValid}
        type="tel"
        name="tel"
        placeholder='+7 999 999-99-99'
        className='contact-form__input__tel'
      />

      <div className="contact-form__label__email">
        E-mail
      </div>
      <input
        type='email'
        name="email"
        value={formValues.email}
        onChange={isEmailValid}
        placeholder='mail@gmail.com'
        className='contact-form__input__email'
      />

      <div className="contact-form__label__message">
        {t('defaults.contactForm.message')}
      </div>
      <textarea
        className="contact-form__input__message"
        name="msg"
        value={formValues.message}
        onChange={isMsgValid}
      />
      <button type='submit' disabled={(isFormValid.email && isFormValid.message && isFormValid.name && isFormValid.phone) === false}>
        {t('defaults.contactForm.submitBtn')}
      </button>
    </form>
  )
}