import { useEffect, useState } from 'react'
import { Logo } from '../../components/Logo'
import { MenuItem } from '../../components/MenuItem'
import { HomeContent } from '../../components/HomeContent'
import { Theme } from '../../components/Theme'
import { Lang } from '../../components/Lang'
import OnOutsiceClick from 'react-outclick'

export function HomePage() {
  const [menuActive, setMenuActive] = useState(false)
  const [modal, setModal] = useState(false)

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
            <nav className="menu">
              <Logo />

              <div className="menuOpt">
                <OnOutsiceClick
                  onOutsideClick={() => {
                    setModal(false)
                  }}
                >
                  <Lang status={modal} setStatus={setModal} />
                </OnOutsiceClick>
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
            </nav>
          </div>
          <section className="main-container">
            <HomeContent />
            <div className="shadow one"></div>
            <div className="shadow two"></div>
          </section>
          <nav
            onClick={() => {
              setMenuActive(false)
            }}
            className="links"
          >
            <ul>
              <MenuItem href="#home" className="home" name="Início" />
              <MenuItem href="#aboutMe" className="aboutMe" name="Sobre mim" />
              <MenuItem href="#skills" className="skills" name="Habilidades" />
              <MenuItem
                href="#portfolio"
                className="portfolio"
                name="Portfólio"
              />
              <MenuItem
                href="#formation"
                className="formation"
                name="Experiência"
              />
              <MenuItem href="#contact" className="contact" name="Contato" />
            </ul>
          </nav>
        </div>
      </div>
      <div className="halfLine" />
    </>
  )
}
