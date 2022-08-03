import { Trans } from '../Trans'

interface IButton {
  text: string
}

export function Button({ text }: IButton) {
  return (
    <button className="homeButton">
      <a href="#aboutMe">
        <Trans text={text} />
      </a>
    </button>
  )
}
