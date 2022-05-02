import scss from './BottomBar.module.scss'
import tabs from '../../tabs.json'
import BottomBarItem from './BottomBarItem/BottomBarItem'

const BottomBar: React.FC = () => {
  const items = tabs.map((value) => <BottomBarItem link={value} key={value.href} />)

  return (
    <div className={scss.wrapper} >
      { items }
    </div>
  )
}

export default BottomBar
