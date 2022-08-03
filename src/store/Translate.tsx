import { ReactElement, useContext } from 'react'
import { IntlProvider } from 'react-intl'

import * as enMessages from '../data/en.json'
import * as ptMessages from '../data/pt.json'
import { IMyContext, MyContext } from './config'

const messages = {
  pt: ptMessages,
  en: enMessages
}

interface ILangProvider {
  children: ReactElement
}

export function LangProvider({ children }: ILangProvider) {
  const { lang } = useContext<IMyContext>(MyContext)

  return (
    <IntlProvider
      locale={lang || 'pt'}
      messages={
        lang != undefined ? messages[lang as keyof typeof messages] : {}
      }
    >
      {children}
    </IntlProvider>
  )
}
