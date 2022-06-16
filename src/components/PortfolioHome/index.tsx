import { useEffect, useState } from 'react'
import { PortfolioContent } from '../PortfolioContent'
import * as jsonData from '../../data/portfolio.json'
import { IPort } from '../../templates/PortfolioHome/Home'
import { IModalPortfolio } from '../../pages/portfolio'

export function PortfolioHome({ setState, setActive }: IPort) {
  const [filterInput, setFilterInput] = useState<string>('')
  const [content, setContent] = useState<IModalPortfolio[]>([
    {
      search: [''],
      title: '',
      image: '',
      description: '',
      site: '',
      code: '',
      gif: ''
    }
  ])
  const [front, setFront] = useState<boolean>(false)
  const [back, setBack] = useState<boolean>(false)
  const [mobile, setMobile] = useState<boolean>(false)
  const [deploy, setDeploy] = useState<boolean>(false)

  useEffect(() => {
    jsonData.map((val) => {
      setContent((oldArray) => [
        ...oldArray,
        {
          title: val.title,
          image: val.image || '',
          site: val.site || '',
          code: val.code,
          search: val.search,
          description: val.description || '',
          gif: val.gif || ''
        }
      ])
    })
  }, [jsonData])

  function filterAll(val: IModalPortfolio) {
    if (front || back || mobile || deploy || filterInput) {
      const frontIncludes = val.search.includes('front')
      const backIncludes = val.search.includes('back')
      const mobileIncludes = val.search.includes('mobile')
      const deployIncludes = val.site
      const searchIncludes = val.search.includes(filterInput)

      return (
        (front && frontIncludes) ||
        (back && backIncludes) ||
        (mobile && mobileIncludes) ||
        (deploy && deployIncludes) ||
        (filterInput && searchIncludes)
      )
    }

    return val
  }

  const contentFilter = content.filter((val) => filterAll(val))

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
            <input
              id="front"
              type="checkbox"
              onChange={() => setFront(!front)}
            />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
            </svg>
          </label>
          <label htmlFor="front">Front</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input id="back" type="checkbox" onChange={() => setBack(!back)} />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
            </svg>
          </label>
          <label htmlFor="back">Back</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input
              id="mobile"
              type="checkbox"
              onChange={() => setMobile(!mobile)}
            />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
            </svg>
          </label>
          <label htmlFor="mobile">Mobile</label>
        </div>
        <div className="checkboxGroup">
          <label className="checkbox path">
            <input
              id="deploy"
              type="checkbox"
              onChange={() => setDeploy(!deploy)}
            />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186" />
            </svg>
          </label>
          <label htmlFor="deploy">Em deploy</label>
        </div>
      </div>
      <div className="portfolioContent">
        {contentFilter.length
          ? contentFilter.map((val) => {
              if (val.title) {
                return (
                  <PortfolioContent
                    image={val.image ? val.image : ''}
                    title={val.title}
                    site={val.site ? val.site : ''}
                    code={val.code}
                    search={val.search}
                    setState={setState}
                    setActive={setActive}
                    description={val.description}
                    gif={val.gif || ''}
                  />
                )
              }

              return
            })
          : content.map((val) => {
              if (val.title) {
                return (
                  <PortfolioContent
                    image={val.image ? val.image : ''}
                    title={val.title}
                    site={val.site ? val.site : ''}
                    code={val.code}
                    description={val.description}
                    search={val.search}
                    setState={setState}
                    setActive={setActive}
                    gif={val.gif || ''}
                  />
                )
              }

              return
            })}
      </div>
    </div>
  )
}
