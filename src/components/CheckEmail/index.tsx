import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../../assets/87580-email-icon-animation.json'

interface IEmail {
  state: boolean
  setState: (val: boolean) => void
}

export function CheckEmail({ state, setState }: IEmail) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const [secs, setSecs] = useState(5)

  useEffect(() => {
    let interval = null as any

    if (state && secs > 0) {
      interval = setInterval(() => {
        setSecs((oldSecs) => oldSecs - 1)
      }, 1000)
    } else if (secs <= 0) {
      setState(false)
    }

    return () => clearInterval(interval)
  }, [state, secs])

  return (
    <>
      {state && (
        <div className="emailContainer">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      )}
    </>
  )
}
