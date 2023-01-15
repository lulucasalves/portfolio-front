import { HomePage } from '../templates/Home/Home'
import { About } from '../templates/About/About'
import { Wave } from '../components/Wave'
import { Skills } from '../templates/Skills/Skills'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Portfolio } from '../templates/Portfolio/Portfolio'
import { Formation } from '../templates/Formation/Formation'
import { Curriculum } from '../templates/Curriculum/Curriculum'
import { Contact } from '../templates/Contact/Contact'
import { Footer } from '../templates/Footer/Footer'
import { CheckEmail } from '../components/CheckEmail'
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
    active: false,
    card: 1
  })
  const [width, setWidth] = useState(1200)
  const [email, setEmail] = useState(false)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <CheckEmail state={email} setState={setEmail} />
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
        <About />
        <Wave />
        <Skills />
        <Portfolio />
        <Formation
          expModal={modalExperience}
          setExpModal={setModalExperience}
          modal={modalFormation}
          setModal={setModalFormation}
        />
        <Curriculum />
        <Contact setEmail={setEmail} />
        <Footer />
      </div>
    </>
  )
}
