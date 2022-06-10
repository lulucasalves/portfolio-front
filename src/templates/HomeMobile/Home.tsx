import { useEffect, useState } from 'react'
import { Logo } from '../../components/Logo'
import { MenuItem } from '../../components/MenuItem'
import { HomeContent } from '../../components/HomeContent'
import { Theme } from '../../components/Theme'
import { Lang } from '../../components/Lang'
import OnOutsiceClick from 'react-outclick'

export function HomeMobile() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <div id="home">
        <div className="container">
          <div className="navbar">
            <nav className="menu">
              <Logo />

              <div className="menuOpt">
                <div
                  onClick={() => {
                    setMenuActive(!menuActive)
                  }}
                  className="hamburger-menu"
                >
                  <div className={`bar ${menuActive ? 'active' : ''}`} />
                </div>
              </div>
            </nav>
          </div>
          <section className="main-container">
            <HomeContent />
          </section>
        </div>
      </div>
      <div className="halfLine" />
    </>
  )
}
