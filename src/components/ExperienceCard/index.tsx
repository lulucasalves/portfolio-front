import { IFormationModal } from '../../templates/Formation/Formation'

interface IExperience {
  card: number
  title: string
  university: string
  init: string
  finish: string
  image: string
  setModal: (event: IFormationModal) => void
}

export function ExperienceCard({
  title,
  image,
  university,
  init,
  finish,
  card,
  setModal
}: IExperience) {
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
            <span>De</span>
            <br />
            {init}
          </p>
          <p>
            <span>Até</span>
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
