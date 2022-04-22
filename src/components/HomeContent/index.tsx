import { Button } from '../Button'

export function HomeContent() {
  return (
    <div className="main">
      <header>
        <div className="overlay">
          <div className="lucasRef">
            <p>
              Olá, sou o Lucas
              <br /> e trabalho como <br />
              <span>desenvolvedor fullstack</span>
            </p>
            <Button text="Sobre mim" />
          </div>
          <div className="terminal">
            <div className="terminalOptions">
              <div className="spaceTerminal" />
              <p>bash</p>
              <div>
                <div className="terminalBall green" />
                <div className="terminalBall yellow" />
                <div className="terminalBall red" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
