import { IFormationModal } from '../../pages'
import { ExperienceCard } from '../ExperienceCard'

interface IExperienceModal {
  modal: IFormationModal
  setModal: (event: IFormationModal) => void
}

export function Experience({ modal, setModal }: IExperienceModal) {
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

      return `${year} ${year > 1 ? 'anos' : 'ano'} e ${months} ${
        months > 1 ? 'meses' : 'mês'
      }`
    }

    return `${total} ${total > 1 ? 'meses' : 'mês'}`
  }

  return (
    <div className="experienceDiv">
      <h3>Experiência</h3>
      <div className="experienceContent">
        <div className="cardsExp">
          <div className="cardFilter">
            <select defaultValue="de">
              <option value="de" disabled>
                De:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <select defaultValue="até">
              <option value="até" disabled>
                Até:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="selectCards">
            <ExperienceCard
              title="Desenvolvedor Frontend"
              company="ZB Negócios Digitais"
              image="companys/zb.png"
              period={getPeriod('2021-10-01')}
              setModal={() => setModal({ card: modal.card, active: true })}
              card={2}
            />
          </div>
        </div>

        <p className="descriptionUser">
          Estou fazendo estágio na empresa ZB Negócios Digitais como
          desenvolvedor frontend, hoje em dia sou desenvolvedor fullstack python
          e javascript como freelancer, também já trabalhei com design e
          marketing com 14 até 17 anos.
        </p>
      </div>
    </div>
  )
}
