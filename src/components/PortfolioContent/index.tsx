import { BsBoxArrowUpRight, BsCodeSlash, BsGithub } from 'react-icons/bs'
import { IModalPortfolio } from '../../pages/portfolio'
import { Trans } from '../Trans'

export interface IPortfolioContent {
  title: string
  image?: string
  code: string
  site?: string
  search: string[]
  setState: (event: IModalPortfolio) => void
  setActive: (event: boolean) => void
  description: string
  gif?: string
}

export function PortfolioContent({
  title,
  search,
  description,
  gif,
  image,
  code,
  site,
  setActive,
  setState
}: IPortfolioContent) {
  function selectImage() {
    if (image) {
      return image
    }

    if (title.includes('Mobile')) {
      return 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

    return 'https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }

  function getCode() {
    window.open(`https://gitpod.io/#${code}`, '_blank')
  }

  function getGithub() {
    window.open(code, '_blank')
  }

  function getSite() {
    if (site) {
      window.open(site, '_blank')
    }
  }

  return (
    <div className="content-port">
      <img src={selectImage()} />
      <p className="portfolioTitle">{title}</p>
      <button
        onClick={() => {
          setState({ title, search, description, gif, image, code, site })
          setActive(true)
        }}
      >
        <Trans text="see-more" />
      </button>
      <div className="iconsGroup">
        <BsCodeSlash onClick={() => getCode()} />
        <BsGithub onClick={() => getGithub()} />
        {site && <BsBoxArrowUpRight onClick={() => getSite()} />}
      </div>
    </div>
  )
}
