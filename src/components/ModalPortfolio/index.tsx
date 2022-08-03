import { IoCloseOutline } from 'react-icons/io5'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'
import { IModalPortfolio } from '../../pages/portfolio'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Trans } from '../Trans'

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

  const [title] = state.title.split('-')

  function getType() {
    if (state.search.includes('front')) {
      return 'Front-End'
    }

    if (state.search.includes('back')) {
      return 'Back-End'
    }

    return 'Mobile'
  }

  useEffect(() => {
    setAppear(active)
  }, [active])

  useEffect(() => {
    if (!appear) {
      setState(defaultState)
    }
  }, [appear])

  function getCode() {
    window.open(`https://gitpod.io/#${state.code}`, '_blank')
  }

  function getGithub() {
    window.open(state.code, '_blank')
  }

  function getSite() {
    if (state.site) {
      window.open(state.site, '_blank')
    }
  }

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
              <p className="title">{title}</p>
              <p className="subtitle">{getType()}</p>

              <div className="content">
                {(state.gif || state.image) && (
                  <img
                    style={{ width: '100%' }}
                    src={state.gif || state.image}
                  />
                )}
                <p className="categoriesP">
                  {state.search.map((res) => {
                    return <>{` ${res} /`}</>
                  })}
                </p>
                <p>{state.description}</p>
                <div className="buttonsGroupP">
                  <button onClick={() => getCode()}>
                    <Trans text="code" />
                    <BsBoxArrowUpRight onClick={() => getSite()} />
                  </button>
                  {state.site && (
                    <button onClick={() => getSite()}>
                      <Trans text="access-button" />
                      <BsBoxArrowUpRight onClick={() => getSite()} />
                    </button>
                  )}
                  <button onClick={() => getGithub()}>
                    <Trans text="repository" />
                    <BsBoxArrowUpRight onClick={() => getSite()} />
                  </button>
                </div>
              </div>
            </div>
          </OnOutsiceClick>
        </div>
      )}
    </div>
  )
}
