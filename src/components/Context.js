import React, { createContext } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const PageContext = createContext();

export default function PageContextProvider(props) {
  const {t, i18n} = useTranslation();

  return (
    <PageContext.Provider value={{t: t, lngDetect: i18n, Trans: Trans}}>
      {props.children}
    </PageContext.Provider>
  )
}