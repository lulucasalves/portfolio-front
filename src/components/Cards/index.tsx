import {  useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface ISortObject {
  class: string
  dir: string
}

interface ISort {
  card1: ISortObject
  card2: ISortObject
  card3: ISortObject
}

export function Cards() {
  const [sort, setSort] = useState<ISort>({
    card1: { class: 'leftSide', dir: 'L' },
    card2: { class: 'center', dir: 'L' },
    card3: { class: 'rightSide', dir: 'L' }
  })

  function alternateSort(side: string) {
    if (side === 'left') {
      if (sort.card3.dir === 'R') {
        const card11 = sort.card3.class
        const card21 = sort.card1.class
        const card31 = sort.card2.class

        const card1 = card31
        const card2 = card11
        const card3 = card21

        setSort({
          card1: { class: card1, dir: 'L' },
          card2: { class: card2, dir: 'L' },
          card3: { class: card3, dir: 'L' }
        })
      } else {
        const card1 = sort.card3.class
        const card2 = sort.card1.class
        const card3 = sort.card2.class

        setSort({
          card1: { class: card1, dir: 'L' },
          card2: { class: card2, dir: 'L' },
          card3: { class: card3, dir: 'L' }
        })
      }
    }

    if (side === 'right') {
      if (sort.card3.dir === 'L') {
        const card11 = sort.card2.class
        const card21 = sort.card3.class
        const card31 = sort.card1.class

        const card1 = card21
        const card2 = card31
        const card3 = card11

        setSort({
          card1: { class: card1, dir: 'R' },
          card2: { class: card2, dir: 'R' },
          card3: { class: card3, dir: 'R' }
        })
      } else {
        const card1 = sort.card2.class
        const card2 = sort.card3.class
        const card3 = sort.card1.class

        setSort({
          card1: { class: card1, dir: 'R' },
          card2: { class: card2, dir: 'R' },
          card3: { class: card3, dir: 'R' }
        })
      }
    }
  }

  const [positions, setPositions] = useState({ x: 0, y: 0, s: 1 })

  const calc = (x: number, y: number) => {
    return {
      x: -(y - window.innerHeight / 2) / 20,
      y: (x - window.innerWidth / 2) / 20,
      s: 1
    }
  }

  const trans = (x: string, y: string, s: string) =>
    `perspective(600px) rotateX(${1 || x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <div className="cardContainer">
      <IoIosArrowBack className="arrow" onClick={() => alternateSort('left')} />
      <div className="allCards">
        <div id="card1" className={`${sort.card1.class}${sort.card1.dir}`} />
        <div id="card2" className={`${sort.card2.class}${sort.card2.dir}`} />
        <div id="card3" className={`${sort.card3.class}${sort.card3.dir}`} />

        {/* <animated.div
          className="animatedCard"
          onMouseMove={({ clientX: x, clientY: y }) => setPositions(calc(x, y))}
          onMouseLeave={() => setPositions({ x: 0, y: 0, s: 1 })}
          style={
            sort.card3.dir === 'R' && sort.card3.class === 'leftSide'
              ? {
                  transform: trans(
                    String(positions.x),
                    String(positions.y),
                    String(positions.s)
                  )
                }
              : {}
          }
        >
          <div id="card3" className={`${sort.card3.class}${sort.card3.dir}`} />
        </animated.div> */}
      </div>
      <IoIosArrowForward
        className="arrow"
        onClick={() => alternateSort('right')}
      />
    </div>
  )
}
