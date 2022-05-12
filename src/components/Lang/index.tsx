import { useContext, useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { IMyContext, MyContext } from '../../store/config'

export function Lang() {
  const [modal, setModal] = useState<boolean>(false)
  const { changeLang, lang } = useContext<IMyContext>(MyContext)

  return (
    <div className="lang" onClick={() => setModal(!modal)}>
      <div className="langGroup">
        <img
          className="flag"
          src={`flags/${lang === 'en' ? 'usa' : 'brazil'}.svg`}
        />
        <MdOutlineArrowDropDown className="arrow" />

        {modal ? (
          <div className="modal">
            <div
              className="flagOpt"
              onClick={() => changeLang && changeLang('en')}
            >
              <img className="flagsm" src="flags/usa.svg" />
              <p>en</p>
            </div>
            <div className="borderSeparation" />
            <div
              className="flagOpt"
              onClick={() => changeLang && changeLang('pt')}
            >
              <img className="flagsm" src="flags/brazil.svg" />
              <p>pt</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
