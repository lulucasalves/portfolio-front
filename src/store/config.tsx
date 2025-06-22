import { createContext, ReactNode, useEffect, useState } from 'react'

export const MyContext = createContext({})

interface IContext {
  children?: ReactNode
}

export interface IMyContext {
  theme?: string
  changeTheme?: (type: string) => void
  lang?: string
  changeLang?: (language: string) => void
}

export function Provider({ children }: IContext) {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('en')

  function changeTheme(type: string) {
    localStorage.setItem('theme', type)
    setTheme(type)
  }

  useEffect(() => {
    const htmlTag = document.documentElement
    htmlTag.setAttribute('data-color', theme || 'dark')
  }, [theme])

  useEffect(() => {
    const getTheme = localStorage.getItem('theme')

    if (getTheme) {
      setTheme(getTheme)
    }
  }, [])

  useEffect(() => {
    const getLang = localStorage.getItem('lang')

    if (getLang) {
      setLang(getLang)
    }
  }, [])

  function changeLang(type: string) {
    localStorage.setItem('lang', type)
    setLang(type)
  }

  return (
    <MyContext.Provider value={{ theme, changeTheme, lang, changeLang }}>
      {children}
    </MyContext.Provider>
  )
}
