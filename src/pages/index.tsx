import { HomePage } from '../templates/Home/Home'
import { About } from '../templates/About/About'
import { Wave } from '../components/Wave'
import { Skills } from '../templates/Skills/Skills'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Portfolio } from '../templates/Portfolio/Portfolio'
import { Formation } from '../templates/Formation/Formation'

export default function Home() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    // setLoad(false)
    const element = window.document.querySelector('html')
    if (element && !load) {
      element.style.overflowY = 'scroll'
    }
  })

  return (
    <>
      <Head>
        <title>Lucas Alves</title>
        <link rel="shortcut icon" href="./favicon.svg" />
      </Head>
      {/* <div className={`loader ${load ? '' : 'loaderNoActive'}`}>
        <div>
          <span>a</span>
          <span>l</span>
          <span>v</span>
          <span>e</span>
          <span>s</span>
        </div>
      </div> */}
      <div className={`principalContent ${load ? '' : 'principalActive'}`}>
        <HomePage />
        <About />
        <Wave />
        <Skills />
        <Portfolio />
        <Formation />
      </div>
    </>
  )
}
