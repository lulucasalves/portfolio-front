import { useIntl } from 'react-intl'
import { IFormationModal } from '../../pages'
import { ExperienceCard } from '../ExperienceCard'
import { Trans } from '../Trans'

interface IExperienceModal {
  modal: IFormationModal
  setModal: (event: IFormationModal) => void
}

export function Experience({ modal, setModal }: IExperienceModal) {
  const { formatMessage } = useIntl()
  const monthT = formatMessage({ id: 'month' })
  const monthsT = formatMessage({ id: 'months' })
  const yearT = formatMessage({ id: 'year' })
  const yearsT = formatMessage({ id: 'years' })
  const andT = formatMessage({ id: 'and' })

  function getPeriod(passDate: string) {
    const data1 = new Date()
    const data2 = new Date(passDate)

    let total =
      (data2.getFullYear() - data1.getFullYear()) * 12 +
      (data2.getMonth() - data1.getMonth())

    total = -total

    if (total > 12) {
      const year = parseInt(String(total / 12))
      const months = parseInt(String(total - year * 12))

      return `${year} ${year > 1 ? yearsT : yearT} ${andT} ${months} ${
        months > 1 ? monthsT : monthT
      }`
    }

    return `${total} ${total > 1 ? monthsT : monthT}`
  }

  return (
    <div className="experienceDiv">
      <h3>
        <Trans text="experience" />
      </h3>
      <div className="experienceContent">
        <div className="cardsExp">
          <div className="cardFilter">
            <select defaultValue="de">
              <option value="de" disabled>
                <Trans text="from" />:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <select defaultValue="até">
              <option value="até" disabled>
                <Trans text="to" />:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="selectCards">
            <ExperienceCard
              title="frontend"
              company="experience-2"
              image="companys/zb.png"
              period={getPeriod('2021-10-01')}
              setModal={() => setModal({ card: modal.card, active: true })}
              card={2}
            />
          </div>
        </div>

        <p className="descriptionUser">
          <Trans text="experience-description" />
        </p>
      </div>
    </div>
  )
}
