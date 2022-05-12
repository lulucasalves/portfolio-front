import { useState } from 'react'
import { animated } from 'react-spring'
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from 'react-icons/md'

export function Curriculum() {
  const [positions, setPositions] = useState({ x: 0, y: 0, s: 1, t: '0s' })

  const calc = (x: number, y: number) => {
    return {
      x: -(y - window.innerHeight / 2) / 30,
      y: (x - window.innerWidth / 2) / 10,
      s: 1,
      t: '0s'
    }
  }

  const trans = (x: string, y: string, s: string) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <div className="curriculumDiv">
      <div className="curriculumContent">
        <h2>
          Quer saber mais?
          <br />
          Baixe meu currículo
        </h2>

        <div className="curriculumType">
          <animated.div
            className="animatedCard"
            onMouseMove={({ clientX: x, clientY: y }) =>
              setPositions(calc(x, y))
            }
            onMouseLeave={() => setPositions({ x: 0, y: 0, s: 1, t: '0.5s' })}
            style={{
              transition: positions.t,
              transform: trans(
                String(positions.x),
                String(positions.y),
                String(positions.s)
              )
            }}
          >
            <div className="curriculumImage" />
          </animated.div>
          <div className="curriculumActions">
            <p>
              Acesse online ou
              <br />
              baixe o documento
            </p>
            <div className="buttons">
              <button>
                <MdOutlineFileDownload />
                Baixar
              </button>
              <button>
                <MdOutlineRemoveRedEye />
                Visualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
