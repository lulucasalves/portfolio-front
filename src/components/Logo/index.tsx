import { MyLink } from '../MyLink'

interface ILogo {
  text: string
}

export function Logo({ text }: ILogo) {
  return (
    <MyLink href="/">
      <h3 className="logo">{text}</h3>
    </MyLink>
  )
}
