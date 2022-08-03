import { useEffect, useState } from 'react'
import OnOutsiceClick from 'react-outclick'
import { Lang } from '../Lang'
import { MenuItem } from '../MenuItem'
import { Theme } from '../Theme'

interface IModalFormation {
  state: boolean
  setState: (event: boolean) => void
}

export function MobileMenu({ state, setState }: IModalFormation) {
  const [getLang, setGetLang] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    setModal(state)
  }, [state])

  return (
    <>
      {modal && (
        <div className="overlayMobile">
          <OnOutsiceClick
            onOutsideClick={() => {
              setState(false)
            }}
          >
            <div className="mobileModal">
              <div className="firstOpt">
                <div className="langDiv">
                  <OnOutsiceClick
                    onOutsideClick={() => {
                      setGetLang(false)
                    }}
                  >
                    <Lang status={getLang} setStatus={setGetLang} />
                  </OnOutsiceClick>
                </div>
                <div className="themeDiv">
                  <Theme />
                </div>
              </div>

              <div className="navigation">
                <ul
                  onClick={() => {
                    setState(false)
                  }}
                >
                  <MenuItem href="#home" className="home" name="home" />
                  <MenuItem href="#aboutMe" className="aboutMe" name="about" />
                  <MenuItem href="#skills" className="skills" name="skills" />
                  <MenuItem
                    href="#portfolio"
                    className="portfolio"
                    name="portfolio"
                  />
                  <MenuItem
                    href="#formation"
                    className="formation"
                    name="experience"
                  />
                  <MenuItem
                    href="#contact"
                    className="contact"
                    name="contact"
                  />
                </ul>
              </div>
            </div>
          </OnOutsiceClick>
        </div>
      )}
    </>
  )
}
