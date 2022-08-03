import { useContext } from 'react'
import { IntlProvider } from 'react-intl'

import * as enMessages from '../data/en.json'
import * as ptMessages from '../data/pt.json'
import { IMyContext, MyContext } from './config'

const messages = {
  pt: ptMessages,
  en: enMessages
}

export function LangProvider({ children }: any) {
  const { lang } = useContext<IMyContext>(MyContext)

  return (
    <IntlProvider locale={lang || 'pt'} messages={messages[lang]}>
      {children}
    </IntlProvider>
  )
}
