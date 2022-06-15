import { HomePage } from '../templates/PortfolioHome/Home'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../templates/Footer/Footer'
import { HomeMobile } from '../templates/HomeMobile/Home'
import { ModalPortfolio } from '../components/ModalPortfolio'

export interface IModalPortfolio {
  search: string[]
  title: string
  description: string
  site?: string
  code: string
  gif?: string
  image?: string
}

export default function Home() {
  const [active, setActive] = useState<boolean>(false)
  const [modal, setModal] = useState<IModalPortfolio>({
    search: [''],
    title: '',
    image: '',
    description: '',
    site: '',
    code: '',
    gif: ''
  })

  const [width, setWidth] = useState<number>(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <ModalPortfolio
        setActive={setActive}
        active={active}
        state={modal}
        setState={setModal}
      />

      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      <div className={`principalContent ${active ? 'setBlur' : ''}`}>
        {width > 1100 ? (
          <HomePage setActive={setActive} setState={setModal} />
        ) : (
          <HomeMobile />
        )}

        <Footer />
      </div>
    </>
  )
}
