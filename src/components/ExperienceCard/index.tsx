import Image from 'next/image'
import { IFormationModal } from '../../pages'
import { Trans } from '../Trans'

interface IExperience {
  card: number
  title: string
  company: string
  period: string
  image: string
  setModal: (event: IFormationModal) => void
  link: string
}

export function ExperienceCard({
  title,
  image,
  company,
  period,
  link,
}: IExperience) {
  return (
    <div className="cardexp">
      <div className="image">
        <Image src={image} layout="fill" />
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
        <button onClick={() => window.open(link, '_blank')}>
          <Trans text="about-button" />
        </button>
      </div>
    </div >
  )
}
