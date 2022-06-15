import { IoCloseOutline } from 'react-icons/io5'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'
import { IModalPortfolio } from '../../pages/portfolio'
interface IModal {
  active: boolean
  state: IModalPortfolio
  setState: (event: IModalPortfolio) => void
  setActive: (event: boolean) => void
}

export function ModalPortfolio({ active, state, setState, setActive }: IModal) {
  const [appear, setAppear] = useState<boolean>(false)
  const defaultState = {
    search: [''],
    title: '',
    image: '',
    description: '',
    site: '',
    code: '',
    gif: ''
  }

  useEffect(() => {
    setAppear(active)
  }, [active])

  useEffect(() => {
    if (!appear) {
      setState(defaultState)
    }
  }, [appear])

  return (
    <div>
      {appear && (
        <div className="focusModalExp">
          <OnOutsiceClick
            onOutsideClick={() => {
              setState(defaultState)
              setActive(false)

              setAppear(false)
            }}
          >
            <div className="modalFormation">
              <IoCloseOutline
                className="closeIcon"
                onClick={() => {
                  setActive(false)
                  setState(defaultState)
                }}
              />
              <p className="title">Desenvolvedor Frontend - Estágio</p>
              <p className="subtitle">ZB Negócios Digitais</p>

              <div className="content">
                <p className="category">Hábilidades utilizadas na função:</p>
                <p>
                  React, Javascript, React Native, HTML, CSS, Jquery e Api Rest
                </p>
                <br />
                <p className="category">Responsábilidades:</p>
                <p>
                  Responsável pela criação de telas em HTML e React, integração
                  de apis e desenvolvimento de sistemas em Javascript
                </p>
                <br />
                <p className="category">Sobre a empresa:</p>
                <p>
                  A ZB Negócios Digitais é uma rede de empresas que trabalha
                  vários tipos de ramos dentro do mundo digital, como:
                  marketing, sistemas de transações e análise de desempenho.
                </p>
                <br />
                <div className="timeGroup">
                  <div style={{ marginRight: '50px' }}>
                    <p className="category">Data de Início:</p>
                    <p>10/2021</p>
                  </div>
                  <div>
                    <p className="category">Data de Termino:</p>{' '}
                    <p>Atualmente</p>
                  </div>
                </div>
              </div>
            </div>
          </OnOutsiceClick>
        </div>
      )}
    </div>
  )
}
