import { useState } from 'react'
import { Experience } from '../../components/Experience'
import { FormationCard } from '../../components/FormationCard'

export interface IFormationModal {
  active: boolean
  card: number
}

export function Formation() {
  const [modal, setModal] = useState<IFormationModal>({
    active: false,
    card: 1
  })

  function returnCard() {
    // if (modal.card === 1) {
    //   return (
    //     <FormationCard
    //       title="Design gráfico"
    //       university="Universidade Internacional"
    //       image="https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    //       init="02/2021"
    //       finish="02/2023"
    //       setModal={() => setModal}
    //       card={1}
    //     />
    //   )
    // } else if (modal.card === 2) {
    //   return (
    //     <FormationCard
    //       title="Análise de sistemas"
    //       university="Universidade Internacional"
    //       image="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    //       init="06/2021"
    //       finish="02/2024"
    //       setModal={() => setModal}
    //       card={2}
    //     />
    //   )
    // }

    return (
      <>
        <FormationCard
          title="Design gráfico"
          university="Uninter"
          image="https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          init="02/2021"
          finish="02/2023"
          setModal={() => setModal}
          card={1}
        />

        <FormationCard
          title="Análise de sistemas"
          university="Uninter"
          image="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          init="06/2021"
          finish="02/2024"
          setModal={() => setModal}
          card={2}
        />
      </>
    )
  }

  return (
    <>
      <div className="halfLine" />
      <div className="formExp">
        <div className="formationDiv">
          <h3>Formação</h3>
          <div className="formationContent">
            <p className="descriptionUser">
              Atualmente estou cursando design gráfico e análise e
              desenvolvimento de sistemas na Universidade Internacional, a
              previsão da minha formação em design será em fevereiro de 2023, e
              para análise e desenvolvimento de sistemas será em fevereiro de
              2024, busco me aprofundar cada vez mais no mundo da tecnologia e
              estou atraz sempre de algo mais difícil e complexo, pretendo
              cursar uma pós graduação de engenharia de software, logo após eu
              me formar em minhas graduações.
            </p>

            <div className="cardsForm">{returnCard()}</div>
          </div>
        </div>
        <Experience />
      </div>
    </>
  )
}
