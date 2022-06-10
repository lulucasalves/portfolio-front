import { useState } from 'react'
import { Wave } from '../../components/Wave'

export function About() {
  const [textSize, setTextSize] = useState(3)

  function returnDescription() {
    if (textSize === 1) {
      return (
        <p className="descriptionText">
          Meu nome é Lucas, tenho 19 anos e sou estudante de análise e
          desenvolvimento de sistemas e design gráfico.
          <br />
          Atualmente trabalho como desenvolvedor frontend na empresa ZB Negócios
          digitais (estágio) e como freelancer atuo como desenvolvedor
          fullstack, minha stack é baseada nas linguagens Javascript e Python.
        </p>
      )
    }

    if (textSize === 2) {
      return (
        <p className="descriptionText">
          Meu nome é Lucas, tenho 19 anos e sou estudante de análise e
          desenvolvimento de sistemas e design gráfico.
          <br />
          Atualmente trabalho como desenvolvedor frontend na empresa ZB Negócios
          digitais (estágio) e como freelancer atuo como desenvolvedor
          fullstack, minha stack é baseada nas linguagens Javascript e Python.
          <br />
          Estudando na prática frameworks de Javascript e Python, data science,
          data analytics, desenvolvimento de api, desenvolvimento mobile e
          arquitetura de sistemas. Focando em habilidades para me tornar um
          desenvolvedor pleno.
        </p>
      )
    }

    return (
      <p className="descriptionText">
        Meu nome é Lucas, tenho 19 anos e sou estudante de análise e
        desenvolvimento de sistemas e design gráfico.
        <br />
        Atualmente trabalho como desenvolvedor frontend na empresa ZB Negócios
        digitais (estágio) e como freelancer atuo como desenvolvedor fullstack,
        minha stack é baseada nas linguagens Javascript e Python.
        <br />
        Estudando na prática frameworks de Javascript e Python, data science,
        data analytics, desenvolvimento de api, desenvolvimento mobile e
        arquitetura de sistemas. Focando em habilidades para me tornar um
        desenvolvedor pleno.
        <br />
        Além de habilidades técnicas, estou me aperfeiçoando nos idioma Inglês e
        Alemão.
        <br />
        Curioso pela tecnologia desde cedo, às vezes passo o tempo fazendo
        projetos em arduino usando C++ e participando de desafios de
        programação.
      </p>
    )
  }

  return (
    <div id="aboutMe" className="aboutContainer">
      <section className="aboutSection">
        <div className="photo">
          <div className="perfilPhoto" />
          <div className="textAbout">
            <div className="textOptions">
              <p>ajuste o tamanho da descrição</p>
              <div className="ballsDiv">
                <p>pequena</p>
                <div
                  onClick={() => setTextSize(1)}
                  className={`balltext ${textSize == 1 ? 'active' : ''}`}
                />
                <div
                  onClick={() => setTextSize(2)}
                  className={`balltext ${textSize == 2 ? 'active' : ''}`}
                />
                <div
                  onClick={() => setTextSize(3)}
                  className={`balltext ${textSize == 3 ? 'active' : ''}`}
                />
                <p>grande</p>
              </div>
            </div>
            {returnDescription()}
          </div>
        </div>
      </section>
    </div>
  )
}
