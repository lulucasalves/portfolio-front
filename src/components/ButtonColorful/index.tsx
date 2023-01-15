import Link from 'next/link'
import { Trans } from '../Trans'

interface IButton {
  text: string
}

export function ButtonColorful({ text }: IButton) {
  return (
    <Link href="https://github.com/lulucasalves">
      <a><button className="colorfulButton">
        <div className="buttonInner">
          <p>
            <Trans text={text} />
          </p>
        </div>
      </button></a>
    </Link>
  )
}
