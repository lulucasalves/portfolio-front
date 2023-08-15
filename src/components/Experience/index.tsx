import { FormationCard } from "../../components/FormationCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IFormationModal } from "../../pages";
import { Trans } from "../../components/Trans";
import { ExperienceCard } from "../ExperienceCard";
import { useIntl } from "react-intl";

interface IModal {
  modal: IFormationModal;
  setModal: (event: IFormationModal) => void;
}

export function Experience({ modal, setModal }: IModal) {
  const { formatMessage } = useIntl();
  const monthT = formatMessage({ id: "month" });
  const monthsT = formatMessage({ id: "months" });
  const yearT = formatMessage({ id: "year" });
  const yearsT = formatMessage({ id: "years" });
  const andT = formatMessage({ id: "and" });

  function getPeriod(passDate: string) {
    const data1 = new Date();
    const data2 = new Date(passDate);

    let total =
      (data2.getFullYear() - data1.getFullYear()) * 12 +
      (data2.getMonth() - data1.getMonth()) -
      1;

    total = -total;

    if (total > 12) {
      const year = parseInt(String(total / 12));
      const months = parseInt(String(total - year * 12));

      return `${year} ${year > 1 ? yearsT : yearT} ${andT} ${months} ${
        months > 1 ? monthsT : monthT
      }`;
    }

    return `${total} ${total > 1 ? monthsT : monthT}`;
  }

  function returnCard() {
    if (modal.card === 3) {
      return (
        <ExperienceCard
          link="https://www.linkedin.com/company/zbnegocios"
          company="experience-2"
          period={`1 ${yearT}`}
          title="experience-1"
          image="/companys/zb.jpeg"
          setModal={setModal}
          card={3}
        />
      );
    } else if (modal.card === 2) {
      return (
        <ExperienceCard
          link="https://www.linkedin.com/company/hypesoft"
          period={`1 ${yearT}`}
          company="experience-2-2"
          title="experience-1-2"
          image="/companys/hypesoft.jpeg"
          setModal={setModal}
          card={2}
        />
      );
    } else if (modal.card === 1) {
      return (
        <ExperienceCard
          link="https://www.linkedin.com/company/labs-lumi"
          period={getPeriod("2023-09-01")}
          company="experience-2-3"
          title="experience-1-3"
          image="/companys/lumi.jpeg"
          setModal={setModal}
          card={1}
        />
      );
    }
  }

  function prevCard() {
    if (modal.card > 1) {
      return modal.card - 1;
    }

    return modal.card;
  }

  function nextCard() {
    if (modal.card < 3) {
      return modal.card + 1;
    }
    return modal.card;
  }

  return (
    <div className="formExp">
      <div className="formationDiv experienceDiv">
        <h3>
          <Trans text="experience" />
        </h3>
        <div className="formationContent experienceContent">
          <p className="descriptionUser">
            <Trans text="experience-description" />
          </p>

          <div className="cardsForm">
            <div className="cardsSection">
              <IoIosArrowBack
                className={`${modal.card < 2 && "not-active"}`}
                onClick={() =>
                  setModal({ active: false, card: prevCard() || 1 })
                }
              />
              {returnCard()}
              <IoIosArrowForward
                className={`${modal.card > 2 && "not-active"}`}
                onClick={() =>
                  setModal({ active: false, card: nextCard() || 1 })
                }
              />
            </div>
            <div className="statusFormation">
              <div
                onClick={() => setModal({ active: false, card: 1 })}
                className={`ball ${modal.card === 1 && "active"}`}
              />
              <div
                onClick={() => setModal({ active: false, card: 2 })}
                className={`ball ${modal.card === 2 && "active"}`}
              />
              <div
                onClick={() => setModal({ active: false, card: 3 })}
                className={`ball ${modal.card === 3 && "active"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
