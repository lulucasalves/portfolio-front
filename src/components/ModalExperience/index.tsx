import { IFormationModal } from '../../pages'
import { IoCloseOutline } from 'react-icons/io5'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'
import { Trans } from '../Trans'
interface IModalFormation {
  state: IFormationModal
  setState: (event: IFormationModal) => void
}


export function ModalExperience({ state, setState }: IModalFormation) {
  const [appear, setAppear] = useState<boolean>(false)

  useEffect(() => {
    setAppear(state.active)
  }, [state])

  useEffect(() => {
    if (!appear) {
      setState({ card: state.card, active: false })
    }
  }, [appear])


  return (
    <div>
      {appear && (
        <div className="focusModalExp">
          <OnOutsiceClick
            onOutsideClick={() => {
              setAppear(false)
            }}
          >
            <div className="modalFormation">
              <IoCloseOutline
                className="closeIcon"
                onClick={() => setState({ card: state.card, active: false })}
              />
              <p className="title">
                <Trans text={`experience-1${state.card === 1 ? '-2' : ''}`} />
              </p>
              <p className="subtitle">
                <Trans text={`experience-2${state.card === 1 ? '-2' : ''}`} />
              </p>

              <div className="content">
                <p className="category">
                  <Trans text={`experience-3`} />
                </p>
                <p>
                  React, Javascript, React Native, HTML, CSS, Jquery e Api Rest
                </p>
                <br />
                <p className="category">
                  <Trans text="responsible" />:
                </p>
                <p>
                  <Trans text={`experience-4${state.card === 1 ? '-2' : ''}`} />
                </p>
                <br />
                <p className="category">
                  <Trans text={`experience-5${state.card === 1 ? '-2' : ''}`} />:
                </p>
                <p>
                  <Trans text={`experience-6${state.card === 1 ? '-2' : ''}`} />
                </p>
                <br />
                <div className="timeGroup">
                  <div style={{ marginRight: '50px' }}>
                    <p className="category">
                      <Trans text="init-date" />:
                    </p>
                    <p>10/2021</p>
                  </div>
                  <div>
                    <p className="category">
                      <Trans text="finish-date" />:
                    </p>
                    <p>
                      <Trans text="current" />
                    </p>
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
