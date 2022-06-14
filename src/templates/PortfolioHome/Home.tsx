import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { HomeContent } from '../../components/HomeContent'
import { Theme } from '../../components/Theme'
import { Lang } from '../../components/Lang'
import OnOutsiceClick from 'react-outclick'
import { IoExitOutline } from 'react-icons/io5'
import Link from 'next/link'
import { PortfolioHome } from '../../components/PortfolioHome'

export function HomePage() {
  const [modal, setModal] = useState(false)

  return (
    <div id="home">
      <div className="container">
        <div className="navbar">
          <nav className="menu">
            <Logo text="portfolio" />

            <div className="menuOpt">
              <OnOutsiceClick
                onOutsideClick={() => {
                  setModal(false)
                }}
              >
                <Lang status={modal} setStatus={setModal} />
              </OnOutsiceClick>
              <Theme />
              <Link href="/">
                <IoExitOutline className="exitIcon" />
              </Link>
            </div>
          </nav>
        </div>
        <section className="portfolio-container">
          <PortfolioHome />
        </section>
      </div>
    </div>
  )
}