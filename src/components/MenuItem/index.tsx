interface IMenuList {
  name: string
  href?: string
  className: string
}

export function MenuItem({ name, href, className }: IMenuList) {
  return (
    <li>
      <a href={href || '#'} className={className}>
        {name}
      </a>
    </li>
  )
}
