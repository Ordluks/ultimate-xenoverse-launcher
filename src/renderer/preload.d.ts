declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        minWindow(): void
        closeWindow(): void
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined
        once(channel: string, func: (...args: unknown[]) => void): void
      }
    }
  }
}

export {}
