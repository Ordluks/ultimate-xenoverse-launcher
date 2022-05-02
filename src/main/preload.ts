import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'
import { WINDOW_CLOSE, WINDOW_MIN } from 'main/ipcChannels'

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    minWindow() {
      ipcRenderer.send(WINDOW_MIN)
    },
    closeWindow() {
      ipcRenderer.send(WINDOW_CLOSE)
    },
    on(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example']
      if (validChannels.includes(channel)) {
        const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
          func(...args)
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, subscription)

        return () => ipcRenderer.removeListener(channel, subscription)
      }

      return undefined
    },
    once(channel: string, func: (...args: unknown[]) => void) {
      const validChannels = ['ipc-example']
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (_event, ...args) => func(...args))
      }
    }
  }
})
