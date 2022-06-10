import { IFormationModal } from '../../pages'

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
        <button onClick={() => setState({ active: true, card })}>Sobre</button>
      </div>
    </div>
  )
}
