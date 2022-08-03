import Link from 'next/link'

interface ILogo {
  text: string
}

export function Logo({ text }: ILogo) {
  return (
    <Link href="/">
      <h3 className="logo">{text}</h3>
    </Link>
  )
}
