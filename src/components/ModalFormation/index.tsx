import { IFormationModal } from '../../pages'
import { IoCloseOutline } from 'react-icons/io5'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'
interface IModalFormation {
  state: IFormationModal
  setState: (event: IFormationModal) => void
}
import * as formData from '../../data/formation.json'

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
    status: false,
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
              <p className="title">{info.course} </p>
              <p className="subtitle">{info.university}</p>

              <div className="content">
                <div className="column">
                  <p className="category">Instituição de ensino:</p>
                  <ul>
                    <li>
                      Instituição:
                      <span> {info.university}</span>
                    </li>
                    <li>
                      IGC: <span>{info.igc}</span>
                    </li>
                    <li>
                      Nota no mec: <span>{info.mec}</span>
                    </li>
                    <li>
                      Local: <span>{info.address}</span>
                    </li>
                    <a href={info.mecLink}>Confira a regulamentação no mec</a>
                  </ul>
                </div>
                <div className="column">
                  <p className="category">Sobre o curso:</p>
                  <ul>
                    <li>
                      Duração: <span>{info.courseYears} anos</span>
                    </li>
                    <li>
                      Carga horária: <span>{info.courseTime}h</span>
                    </li>
                    <li>
                      Status:
                      <span> {info.status ? 'Finalizado' : 'Em curso'}</span>
                    </li>
                    <li>
                      Data de início: <span>{info.init}</span>
                    </li>
                    <li>
                      Data de término: <span>{info.finish}</span>
                    </li>
                    <div className="groupButtons">
                      <button type="button" disabled={!info.status}>
                        Grade currícular
                      </button>
                      <button
                        type="button"
                        style={{ marginLeft: '15px' }}
                        disabled={!info.status}
                      >
                        Credencial
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
