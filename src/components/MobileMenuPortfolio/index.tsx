import { useEffect, useState } from 'react'
import OnOutsiceClick from 'react-outclick'
import { Lang } from '../Lang'
import { MenuItem } from '../MenuItem'
import { Theme } from '../Theme'

interface IModalFormation {
  state: boolean
  setState: (event: boolean) => void
}

export function MobileMenuPortfolio({ state, setState }: IModalFormation) {
  const [getLang, setGetLang] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    setModal(state)
  }, [state])

  return (
    <>
      {modal && (
        <div className="overlayMobile mobilePortfolio">
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
                  <MenuItem href="/" className="exitPort" name="Sair" />
                </ul>
              </div>
            </div>
          </OnOutsiceClick>
        </div>
      )}
    </>
  )
}
