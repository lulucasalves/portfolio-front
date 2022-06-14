import Link from 'next/link'

interface IButton {
  text: string
}

export function ButtonColorful({ text }: IButton) {
  return (
    <Link href="/portfolio">
      <button className="colorfulButton">
        <div className="buttonInner">
          <p>{text}</p>
        </div>
      </button>
    </Link>
  )
}
