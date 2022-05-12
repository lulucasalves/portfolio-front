import { useEffect, useState } from 'react'
import { Logo } from '../../components/Logo'
import { MenuItem } from '../../components/MenuItem'
import { HomeContent } from '../../components/HomeContent'
import { Theme } from '../../components/Theme'
import { Lang } from '../../components/Lang'

export function HomePage() {
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const element = window.document.querySelector('html')

    if (menuActive && element != null) {
      element.style.overflowY = 'hidden'
    } else if (element != null) {
      element.style.overflowY = 'scroll'
    }
  }, [menuActive])

  return (
    <>
      <div id="home" className={menuActive ? 'bodyActive' : ''}>
        <div className={`container ${menuActive ? 'active' : ''}`}>
          <div className="navbar">
            <div className="menu">
              <Logo />

              <div className="menuOpt">
                <Lang />
                <Theme />
                <div
                  onClick={() => {
                    window.scrollTo(0, 0)
                    window.document.body.style.overflow = 'hidden'
                    setMenuActive(!menuActive)
                  }}
                  className="hamburger-menu"
                >
                  <div className="bar" />
                </div>
              </div>
            </div>
          </div>

          <div className="main-container">
            <HomeContent />
            <div className="shadow one"></div>
            <div className="shadow two"></div>
          </div>

          <div
            onClick={() => {
              setMenuActive(false)
            }}
            className="links"
          >
            <ul>
              <MenuItem href="#home" className="home" name="Início" />
              <MenuItem href="#aboutMe" className="aboutMe" name="Sobre mim" />
              <MenuItem
                href="#portfolio"
                className="portfolio"
                name="Portfólio"
              />
              <MenuItem
                href="#formation"
                className="formation"
                name="Formação"
              />
              <MenuItem
                href="#experience"
                className="experience"
                name="Experiência"
              />
              <MenuItem href="#contact" className="contact" name="Contato" />
            </ul>
          </div>
        </div>
      </div>
      <div className="halfLine" />
    </>
  )
}
