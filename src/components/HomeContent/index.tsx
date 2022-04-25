import { Button } from '../Button'
import { RotateTitle } from '../RotateTitle'

export function HomeContent() {
  return (
    <div className="main">
      <header>
        <div className="overlay">
          <div className="lucasRef">
            <p>Olá, me chamo</p>
            <p> Lucas e sou</p>
            <RotateTitle />

            <Button text="Ver mais" />
          </div>
          <div className="terminalThemes">
            <div className="terminal">
              <div className="terminalOptions">
                <div className="ballsGroup">
                  <div className="terminalBall red" />
                  <div className="terminalBall yellow" />
                  <div className="terminalBall green" />
                </div>
                <p>bash</p>
                <div className="spaceTerminal" />
              </div>
              <div className="terminalContent wrapper">
                <p>
                  <span className="bash">bash: ~$</span>{' '}
                  <span className="dynamic-txts1">hello world</span>
                  <br />
                  <span className="apresentation">
                    olá seja bem vindo(a) ao meu site, aqui você verá uma
                    apresentação minha e dos meus trabalhos na área da
                    tecnologia
                  </span>
                  <br />
                  <span className="bash bash1">bash: ~$</span>{' '}
                  <span className="dynamic-txts2">ls</span>
                  <br />
                  <span className="appearMenu">
                    sobre mim
                    <br />
                    projetos
                    <br />
                    formação
                    <br />
                    experiência
                    <br />
                    contato
                  </span>
                  <br />
                  <span className="bash bash2">bash: ~$</span>{' '}
                  <span className="dynamic-txts3">cd sobre mim/</span>
                  <br />
                  <span className="apresentation2">
                    aqui em baixo você vai ter uma breve descrição sobre mim{' '}
                    <br />
                    :)
                  </span>
                </p>
              </div>
            </div>
            <div className="themes">
              <div className="theme purple" />
              <div className="theme black activated" />
              <div className="theme green" />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
