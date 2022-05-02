import scss from './TitleBar.module.scss'
import CrossIcon from '../../../../assets/icons/cross.svg'
import MinusIcon from '../../../../assets/icons/minus.svg'

const TitleBar: React.FC = () => {
	return (
    <div className={scss.wrapper}>
      <div className={scss.dragable}>
        <span className={scss.title}>{document.title}</span>
      </div>
      <div className={scss.notDragable}>
        <div className={scss.buttons}>
          <button
            type='button'
            className={scss.min}
            onClick={window.electron.ipcRenderer.minWindow}
            tabIndex={-1}
          >
            <MinusIcon />
          </button>
          <button
            type='button'
            className={scss.close}
            onClick={window.electron.ipcRenderer.closeWindow}
            tabIndex={-1}
          >
            <CrossIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TitleBar
