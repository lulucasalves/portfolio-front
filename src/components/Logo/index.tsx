interface ILogo {
  text: string
}

export function Logo({ text }: ILogo) {
  return <h3 className="logo">{text}</h3>
}
