import { useState } from 'react'
import { Logo } from '../components/Logo'
import { MenuItem } from '../components/MenuItem'
import { HomeContent } from '../components/HomeContent'

export default function Home() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className={menuActive ? 'bodyActive' : ''}>
      <div className={`container ${menuActive ? 'active' : ''}`}>
        <div className="navbar">
          <div className="menu">
            <Logo />

            <div
              onClick={() => {
                window.document.body.style.overflow = 'hidden'
                window.scrollTo(0, 0)
                setMenuActive(!menuActive)
              }}
              className="hamburger-menu"
            >
              <div className="bar"></div>
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
            <MenuItem href="#formation" className="formation" name="Formação" />
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
  )
}
