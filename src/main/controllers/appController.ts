import createController from '../ipcMainSetup'
import { WINDOW_CLOSE, WINDOW_MIN } from '../ipcChannels'

const appController = createController({
  [WINDOW_MIN]: ({ mainWindow }) => {
    mainWindow.minimize()
  },
  [WINDOW_CLOSE]: ({ mainWindow }) => {
    mainWindow.close()
  }
})

export default appController
