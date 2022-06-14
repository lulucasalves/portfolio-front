import { HomePage } from '../templates/PortfolioHome/Home'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../templates/Footer/Footer'
import { ModalFormation } from '../components/ModalFormation'
import { ModalExperience } from '../components/ModalExperience'
import { HomeMobile } from '../templates/HomeMobile/Home'

export interface IFormationModal {
  active: boolean
  card: number
}

export default function Home() {
  const [modalFormation, setModalFormation] = useState<IFormationModal>({
    active: false,
    card: 1
  })

  const [modalExperience, setModalExperience] = useState<IFormationModal>({
    active: true,
    card: 1
  })

  const [width, setWidth] = useState<number>(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <ModalFormation state={modalFormation} setState={setModalFormation} />
      <ModalExperience state={modalExperience} setState={setModalExperience} />

      <Head>
        <title>Lucas Alves</title>
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      <div
        className={`principalContent ${modalFormation.active ? 'setBlur' : ''}`}
      >
        {width > 1100 ? <HomePage /> : <HomeMobile />}

        <Footer />
      </div>
    </>
  )
}
