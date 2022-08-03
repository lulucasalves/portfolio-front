import { ButtonColorful } from '../../components/ButtonColorful'
import { Cards } from '../../components/Cards'

export function Portfolio() {
  return (
    <div id="portfolio" className="portDiv">
      <h2>Portfolio</h2>
      <Cards />
      <ButtonColorful text="more-projects" />
    </div>
  )
}
