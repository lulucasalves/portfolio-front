import { ButtonColorful } from '../../components/ButtonColorful'
import { Cards } from '../../components/Cards'

export function Portfolio() {
  return (
    <div className="portDiv">
      <h2>{'{ Portfolio }'}</h2>
      <Cards />
      <ButtonColorful text="Mais projetos" />
    </div>
  )
}
