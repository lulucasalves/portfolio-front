import { IFormationModal } from '../../pages'
import { IoCloseOutline } from 'react-icons/io5'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'

interface IModalFormation {
  state: IFormationModal
  setState: (event: IFormationModal) => void
}
import * as formData from '../../data/formation.json'
import { Trans } from '../Trans'

export function ModalFormation({ state, setState }: IModalFormation) {
  const [appear, setAppear] = useState<boolean>(false)
  let info = {
    course: '',
    university: '',
    igc: '',
    mec: '',
    address: '',
    init: '',
    finish: '',
    mecLink: '',
    courseYears: '',
    courseTime: '',
    status: false
  }

  useEffect(() => {
    setAppear(state.active)
  }, [state])

  useEffect(() => {
    if (!appear) {
      setState({ card: state.card, active: false })
    }
  }, [appear])

  if (state.card === 1) {
    info = formData.design
  }

  if (state.card === 2) {
    info = formData.ads
  }

  return (
    <div>
      {appear && (
        <div className="focusModal">
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
                <Trans text={info.course} />
              </p>
              <p className="subtitle">
                <Trans text={info.university} />
              </p>

              <div className="content">
                <div className="column">
                  <p className="category">
                    <Trans text="teach-institute" />:
                  </p>
                  <ul>
                    <li>
                      <Trans text="institute" />:
                      <span>
                        {' '}
                        <Trans text={info.university} />
                      </span>
                    </li>
                    <li>
                      IGC: <span>{info.igc}</span>
                    </li>
                    <li>
                      <Trans text="mec-grade" />: <span>{info.mec}</span>
                    </li>
                    <li>
                      <Trans text="address" />: <span>{info.address}</span>
                    </li>
                    <a href={info.mecLink} target="_blank">
                      <Trans text="mec-regulamentatation" />
                    </a>
                  </ul>
                </div>
                <div className="column">
                  <p className="category">
                    <Trans text="about-course" />:
                  </p>
                  <ul>
                    <li>
                      <Trans text="duration" />:{' '}
                      <span>
                        {info.courseYears} <Trans text="years" />
                      </span>
                    </li>
                    <li>
                      <Trans text="time-expended" />:{' '}
                      <span>{info.courseTime}h</span>
                    </li>
                    <li>
                      Status:
                      <span>
                        {' '}
                        {info.status ? (
                          <Trans text="finished" />
                        ) : (
                          <Trans text="in-course" />
                        )}
                      </span>
                    </li>
                    <li>
                      <Trans text="init-date" />: <span>{info.init}</span>
                    </li>
                    <li>
                      <Trans text="finish-date" />: <span>{info.finish}</span>
                    </li>
                    <div className="groupButtons">
                      <button type="button" disabled={!info.status}>
                        <Trans text="curriculum-grade" />
                      </button>
                      <button
                        type="button"
                        style={{ marginLeft: '15px' }}
                        disabled={!info.status}
                      >
                        <Trans text="credential" />
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </OnOutsiceClick>
        </div>
      )}
    </div>
  )
}
