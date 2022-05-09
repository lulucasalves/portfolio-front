import { useState } from 'react'
import { IFormationModal } from '../../templates/Formation/Formation'
import { ExperienceCard } from '../ExperienceCard'

export function Experience() {
  const [modal, setModal] = useState<IFormationModal>({
    active: false,
    card: 1
  })

  return (
    <div className="experienceDiv">
      <h3>Experiência</h3>
      <div className="experienceContent">
        <div className="cardsExp">
          <div className="cardFilter">
            <select>
              <option selected value="" disabled>
                De:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <select>
              <option selected value="" disabled>
                Até:
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="selectCards">
            <div className="cardsSquares">
              <div className="cardSquare" />
            </div>
            <ExperienceCard
              title="Desenvolvedor Frontend"
              university="ZB Negócios Digitais"
              image="https://images.pexels.com/photos/2078774/pexels-photo-2078774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              init="10/2021"
              finish="atualmente"
              setModal={() => setModal}
              card={2}
            />
          </div>
        </div>

        <p className="descriptionUser">
          Estou fazendo estágio na empresa ZB Negócios Digitais como desenvolvedor
          frontend, hoje em dia sou desenvolvedor fullstack python e javascript
          como freelancer, também já trabalhei com design e marketing com 14 até
          17 anos.
        </p>
      </div>
    </div>
  )
}
