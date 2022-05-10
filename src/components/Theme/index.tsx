import { useContext } from 'react'
import { IMyContext, MyContext } from '../../store/config'
import { DarkIcon } from '../DarkIcon'
import { LightIcon } from '../LightIcon'

export function Theme() {
  const { changeTheme, theme } = useContext<IMyContext>(MyContext)

  return (
    <div
      onClick={() =>
        changeTheme && changeTheme(theme === 'dark' ? 'light' : 'dark')
      }
      className="mode-tog"
    >
      {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
    </div>
  )
}
