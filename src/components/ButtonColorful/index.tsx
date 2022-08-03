import { MyLink } from '../MyLink'
import { Trans } from '../Trans'

interface IButton {
  text: string
}

export function ButtonColorful({ text }: IButton) {
  return (
    <MyLink href="/portfolio">
      <button className="colorfulButton">
        <div className="buttonInner">
          <p>
            <Trans text={text} />
          </p>
        </div>
      </button>
    </MyLink>
  )
}
