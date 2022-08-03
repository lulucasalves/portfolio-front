import { useState } from 'react'
import { Trans } from '../../components/Trans'
import { Wave } from '../../components/Wave'

export function About() {
  const [textSize, setTextSize] = useState(2)

  function returnDescription() {
    if (textSize === 1) {
      return (
        <p className="descriptionText">
          <Trans text="about-1" />
          <br />
          <Trans text="about-2" />
        </p>
      )
    }

    if (textSize === 2) {
      return (
        <p className="descriptionText">
          <Trans text="about-1" />
          <br />
          <Trans text="about-2" />
          <br />
          <Trans text="about-3" />
        </p>
      )
    }

    return (
      <p className="descriptionText">
        <Trans text="about-1" />
        <br />
        <Trans text="about-2" />
        <br />
        <Trans text="about-3" />
        <br />
        <Trans text="about-4" />
        <br />
        <Trans text="about-5" />
      </p>
    )
  }

  return (
    <div id="aboutMe" className="aboutContainer">
      <section className="aboutSection">
        <div className="photo">
          <div className="perfilPhoto" />
          <div className="textAbout">
            <div className="textOptions">
              <p>
                <Trans text="description-change" />
              </p>
              <div className="ballsDiv">
                <p>
                  <Trans text="small" />
                </p>
                <div
                  onClick={() => setTextSize(1)}
                  className={`balltext ${textSize == 1 ? 'active' : ''}`}
                />
                <div
                  onClick={() => setTextSize(2)}
                  className={`balltext ${textSize == 2 ? 'active' : ''}`}
                />
                <div
                  onClick={() => setTextSize(3)}
                  className={`balltext ${textSize == 3 ? 'active' : ''}`}
                />
                <p>
                  <Trans text="big" />
                </p>
              </div>
            </div>
            {returnDescription()}
          </div>
        </div>
      </section>
    </div>
  )
}
