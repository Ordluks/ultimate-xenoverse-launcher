import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

type MainWindowProvider = () => BrowserWindow | null

interface IpcMainAPI {
  event: IpcMainEvent
  mainWindow: BrowserWindow
}
type IpcMainHandler = (api: IpcMainAPI, ...args: unknown[]) => void

interface IpcMainHandlersMap {
  [key: string]: IpcMainHandler
}

const createController = (handlers: IpcMainHandlersMap) => {
  return (useMainWindow: MainWindowProvider) => {
    Object.entries(handlers).forEach(([ channel, handler ]) => {
      ipcMain.on(channel, (event, ...args) => {
        const mainWindow = useMainWindow()
        if (mainWindow === null) return
        handler({
          event,
          mainWindow
        }, ...args)
      })
    })
  }
}

export default createController
