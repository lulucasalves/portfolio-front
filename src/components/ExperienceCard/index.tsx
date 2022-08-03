import { IFormationModal } from '../../pages'
import { Trans } from '../Trans'

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
        <p className="titleCourse">
          <Trans text={title} />
        </p>
        <p className="descriptionCourse">
          <Trans text={company} />
        </p>
        <div className="dates">
          <p>
            <span>
              <Trans text="period" />
            </span>
            <br />
            {period}
          </p>
        </div>
        <button onClick={() => setModal({ active: true, card: card })}>
          <Trans text="about-button" />
        </button>
      </div>
    </div>
  )
}
