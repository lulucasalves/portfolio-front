interface IButton {
  text: string
}

export function Button({ text }: IButton) {
  return (
    <button className="homeButton">
      <a href="#aboutMe">{text}</a>
    </button>
  )
}
