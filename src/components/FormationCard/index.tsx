import { IFormationModal } from '../../templates/Formation/Formation'

interface IFormation {
  card: number
  title: string
  university: string
  init: string
  finish: string
  image: string
  setModal: (event: IFormationModal) => void
}

export function FormationCard({
  title,
  image,
  university,
  init,
  finish,
  card,
  setModal
}: IFormation) {
  return (
    <div className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <p className="titleCourse">{title}</p>
        <p className="descriptionCourse">{university}</p>
        <div className="dates">
          <p>
            <span className="active">Início</span>
            <br />
            {init}
          </p>
          <p>
            <span>Final</span>
            <br />
            {finish}
          </p>
        </div>
        <button onClick={() => setModal({ active: true, card: card })}>
          Sobre
        </button>
      </div>
    </div>
  )
}
