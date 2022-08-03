import { Experience } from '../../components/Experience'
import { FormationCard } from '../../components/FormationCard'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { IFormationModal } from '../../pages'
import { Trans } from '../../components/Trans'

interface IModal {
  modal: IFormationModal
  expModal: IFormationModal
  setModal: (event: IFormationModal) => void
  setExpModal: (event: IFormationModal) => void
}

export function Formation({ modal, setModal, setExpModal, expModal }: IModal) {
  function returnCard() {
    if (modal.card === 1) {
      return (
        <FormationCard
          title="Design gráfico"
          university="Centro Universitário Internacional"
          image="https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          init="02/2021"
          finish="02/2023"
          setState={setModal}
          card={1}
        />
      )
    } else if (modal.card === 2) {
      return (
        <FormationCard
          title="Análise de sistemas"
          university="Centro Universitário Internacional"
          image="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          init="06/2021"
          finish="02/2024"
          setState={setModal}
          card={2}
        />
      )
    }
  }

  function prevCard() {
    if (modal.card > 1) {
      return modal.card - 1
    }

    return modal.card
  }

  function nextCard() {
    if (modal.card < 2) {
      return modal.card + 1
    }
    return modal.card
  }

  return (
    <>
      <div id="formation" className="halfLine" />
      <div className="formExp">
        <div className="formationDiv">
          <h3>
            <Trans text="formation" />
          </h3>
          <div className="formationContent">
            <p className="descriptionUser">
              <Trans text="formation-description" />
            </p>

            <div className="cardsForm">
              <div className="cardsSection">
                <IoIosArrowBack
                  className={`${modal.card < 2 && 'not-active'}`}
                  onClick={() =>
                    setModal({ active: false, card: prevCard() || 1 })
                  }
                />
                {returnCard()}
                <IoIosArrowForward
                  className={`${modal.card > 1 && 'not-active'}`}
                  onClick={() =>
                    setModal({ active: false, card: nextCard() || 1 })
                  }
                />
              </div>
              <div className="statusFormation">
                <div
                  onClick={() => setModal({ active: false, card: 1 })}
                  className={`ball ${modal.card === 1 && 'active'}`}
                />
                <div
                  onClick={() => setModal({ active: false, card: 2 })}
                  className={`ball ${modal.card === 2 && 'active'}`}
                />
              </div>
            </div>
          </div>
        </div>
        <Experience modal={expModal} setModal={setExpModal} />
      </div>
    </>
  )
}
