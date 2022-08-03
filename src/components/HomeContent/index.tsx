import { useState, useEffect } from 'react'
import { Button } from '../Button'
import { RotateTitle } from '../RotateTitle'
import { Trans } from '../Trans'

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
            <p>
              <Trans text="hi" />
            </p>
            <p>
              <Trans text="lucas" />
            </p>
            <RotateTitle />
            <Button text="see-more" />
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
                    <Trans text="terminal-1" />
                  </span>
                  <br />
                  <span className="bash bash1">bash: ~$</span>{' '}
                  <span className="dynamic-txts2">ls</span>
                  <br />
                  <span className="appearMenu">
                    <Trans text="terminal-2" />
                    <br />
                    <Trans text="terminal-3" />
                    <br />
                    <Trans text="terminal-4" />
                    <br />
                    <Trans text="terminal-5" />
                    <br />
                    <Trans text="terminal-6" />
                    <br />
                    <Trans text="terminal-7" />
                  </span>
                  <br />
                  <span className="bash bash2">bash: ~$</span>{' '}
                  <span className="dynamic-txts3">
                    cd <Trans text="terminal-2" />/
                  </span>
                  <br />
                  <span className="apresentation2">
                    <Trans text="terminal-8" />
                    \o/
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
