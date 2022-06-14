import { useEffect, useState } from 'react'
import { IPortfolioContent, PortfolioContent } from '../PortfolioContent'
import * as jsonData from '../../data/portfolio.json'

export function PortfolioHome() {
  const [filterInput, setFilterInput] = useState<string>('')
  const [content, setContent] = useState<IPortfolioContent[]>([
    { code: '', title: '', site: '', image: '' }
  ])

  useEffect(() => {
    jsonData.map((val) => {
      setContent((oldArray) => [
        ...oldArray,
        { title: val.title, image: val.image, site: val.site, code: val.code }
      ])
    })
  }, [jsonData])

  return (
    <div className="portfolioDiv">
      <div className="inputGroup">
        <input
          className="bigInput"
          placeholder="Procure por algum projeto, tecnologia ou categoria"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
        />
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input id="front" type="checkbox" />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
          <label htmlFor="front">Front</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input id="back" type="checkbox" />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
          <label htmlFor="back">Back</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input id="mobile" type="checkbox" />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
          <label htmlFor="mobile">Mobile</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input id="deploy" type="checkbox" />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
          <label htmlFor="deploy">Em deploy</label>
        </div>
      </div>
      <div className="portfolioContent">
        {content.length &&
          content.map((val) => {
            if (val.title) {
              return (
                <PortfolioContent
                  image={val.image ? val.image : ''}
                  title={val.title}
                  site={val.site ? val.site : ''}
                  code={val.code}
                />
              )
            }

            return
          })}
      </div>
    </div>
  )
}
