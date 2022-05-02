import { NavLink } from 'react-router-dom'
import scss from './BottomBarItem.module.scss'

export interface BottomBarItemProps {
  link: {
    name: string
    href: string
  }
}

const BottomBarItem: React.FC<BottomBarItemProps> = ({ link }) => {
  const { href, name } = link

  return (
    <NavLink to={href} className={scss.wrapper} >
      {name}
    </NavLink>
  )
}

export default BottomBarItem
