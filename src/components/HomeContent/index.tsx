import { useState, useEffect } from 'react'
import { Button } from '../Button'
import { RotateTitle } from '../RotateTitle'

export function HomeContent() {
  const [terminal, setTerminal] = useState('default')

  useEffect(() => {
    const localstorage = localStorage.getItem('terminal-theme')

    if (localstorage) {
      setTerminal(localstorage)
    }
  }, [])

  function changeTheme(val: string) {
    localStorage.setItem('terminal-theme', val)

    setTerminal(val)
  }

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
            <div className={`terminal ${terminal}`}>
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
                    habilidades
                    <br />
                    portfolio
                    <br />
                    experiencia
                    <br />
                    curriculo
                    <br />
                    contato
                  </span>
                  <br />
                  <span className="bash bash2">bash: ~$</span>{' '}
                  <span className="dynamic-txts3">cd sobre mim/</span>
                  <br />
                  <span className="apresentation2">
                    aqui em baixo você vai ter uma breve descrição sobre mim \o/
                  </span>
                </p>
              </div>
            </div>
            <div className="themes">
              <div
                onClick={() => changeTheme('ubuntu')}
                className={`theme purple ${
                  terminal === 'ubuntu' ? 'activated' : ''
                }`}
              />
              <div
                onClick={() => changeTheme('default')}
                className={`theme black ${
                  terminal === 'default' ? 'activated' : ''
                }`}
              />
              <div
                onClick={() => changeTheme('hacker')}
                className={`theme green ${
                  terminal === 'hacker' ? 'activated' : ''
                }`}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
