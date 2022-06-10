import { IFormationModal } from '../../templates/Formation/Formation'

interface IExperience {
  card: number
  title: string
  company: string
  period: string
  image: string
  setModal: (event: IFormationModal) => void
}

export function ExperienceCard({
  title,
  image,
  company,
  period,
  card,
  setModal
}: IExperience) {
  return (
    <div className="cardexp">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <p className="titleCourse">{title}</p>
        <p className="descriptionCourse">{company}</p>
        <div className="dates">
          <p>
            <span>Periodo</span>
            <br />
            {period}
          </p>
        </div>
        <button onClick={() => setModal({ active: true, card: card })}>
          Sobre
        </button>
      </div>
    </div>
  )
}
