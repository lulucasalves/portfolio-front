import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { IMyContext, MyContext } from '../../store/config'

interface IModalStatus {
  status: boolean
  setStatus: (value: boolean) => void
}

export function Lang({ status, setStatus }: IModalStatus) {
  const [modal, setModal] = useState<boolean>(false)
  const { changeLang, lang } = useContext<IMyContext>(MyContext)

  useEffect(() => {
    setModal(status)
  }, [status])

  return (
    <div
      className="lang"
      onClick={() => {
        setModal(!modal)
        setStatus(!modal)
      }}
    >
      <div className="langGroup">
        <Image
          width={35}
          height={35}
          className="flag"
          src={`/flags/${lang === 'en' ? 'usa' : 'brazil'}.svg`}
        />
        <MdOutlineArrowDropDown className="arrow" />

        {modal ? (
          <div className="modal">
            <div
              className="flagOpt"
              onClick={() => changeLang && changeLang('en')}
            >
              <Image
                width={30}
                height={30}
                className="flagsm"
                src="/flags/usa.svg"
              />
              <p>en</p>
            </div>
            <div className="borderSeparation" />
            <div
              className="flagOpt"
              onClick={() => changeLang && changeLang('pt')}
            >
              <Image
                width={30}
                height={30}
                className="flagsm"
                src="/flags/brazil.svg"
              />
              <p>pt</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
