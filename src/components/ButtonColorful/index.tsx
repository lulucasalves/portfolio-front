interface IButton {
  text: string
}

export function ButtonColorful({ text }: IButton) {
  return (
    <button className="colorfulButton">
      <div className="buttonInner">
        <a href="#aboutMe">{text}</a>{' '}
      </div>
    </button>
  )
}
