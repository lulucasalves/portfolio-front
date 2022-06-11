import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { HomeContent } from '../../components/HomeContent'
import { MobileMenu } from '../../components/MobileMenu'

export function HomeMobile() {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <div id="home">
        {menuActive && (
          <MobileMenu state={menuActive} setState={setMenuActive} />
        )}
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
