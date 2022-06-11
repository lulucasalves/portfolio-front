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
              setModal(false)
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
                    setModal(false)
                    setState(false)
                  }}
                >
                  <MenuItem href="#home" className="home" name="Início" />
                  <MenuItem
                    href="#aboutMe"
                    className="aboutMe"
                    name="Sobre mim"
                  />
                  <MenuItem
                    href="#skills"
                    className="skills"
                    name="Habilidades"
                  />
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
                  <MenuItem
                    href="#contact"
                    className="contact"
                    name="Contato"
                  />
                </ul>
              </div>
            </div>{' '}
          </OnOutsiceClick>
        </div>
      )}
    </>
  )
}
