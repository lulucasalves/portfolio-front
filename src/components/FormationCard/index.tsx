import { IFormationModal } from '../../pages'
import { Trans } from '../Trans'

interface IFormation {
  card: number
  title: string
  university: string
  init: string
  finish: string
  image: string
  setState: (event: IFormationModal) => void
}

export function FormationCard({
  title,
  image,
  university,
  init,
  finish,
  card,
  setState
}: IFormation) {
  return (
    <div className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <p className="titleCourse">
          <Trans text={title} />
        </p>
        <p className="descriptionCourse">
          <Trans text={university} />
        </p>
        <div className="dates">
          <p>
            <span className="active">
              <Trans text="init" />
            </span>
            <br />
            {init}
          </p>
          <p>
            <span>
              <Trans text="finish" />
            </span>
            <br />
            {finish}
          </p>
        </div>
        <button onClick={() => setState({ active: true, card })}>
          <Trans text="about-button" />
        </button>
      </div>
    </div>
  )
}
