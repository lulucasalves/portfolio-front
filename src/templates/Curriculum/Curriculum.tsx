import { useContext, useState } from 'react'
import { animated } from 'react-spring'
import { MdOutlineFileDownload, MdOutlineRemoveRedEye } from 'react-icons/md'
import { IMyContext, MyContext } from '../../store/config'
import { Trans } from '../../components/Trans'

export function Curriculum() {
  const [positions, setPositions] = useState({ x: 0, y: 0, s: 1, t: '0s' })
  const { lang } = useContext<IMyContext>(MyContext)

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
          <Trans text="know-more" />
          <br />
          <Trans text="download-curriculum" />
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
              <Trans text="access" />
              <br />
              <Trans text="download-doc" />
            </p>
            <div className="buttons">
              <a
                href='https://github.com/lulucasalves/portfolio-front/blob/main/.github/curriculum.pdf'
              >
                <MdOutlineFileDownload />
                <Trans text="download" />
              </a>

              <a
                href='https://drive.google.com/file/d/1giw8dguR_m68BaPVCBcPupDQ71AKl3yv/view?usp=sharing'
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineRemoveRedEye />
                <Trans text="visualization" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
