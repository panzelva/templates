import { app, BrowserWindow } from 'electron'

const isDev = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow: BrowserWindow | null

function createWindow() {
  const win = new BrowserWindow({ webPreferences: { nodeIntegration: true } })

  if (isDev) {
    win.webContents.openDevTools()
  }

  // and load the index.html of the app.
  isDev ? win.loadURL('http://localhost:8081') : win.loadFile('index.html')

  win.on('closed', () => {
    mainWindow = null
  })

  win.webContents.on('devtools-opened', () => {
    win.focus()
    setImmediate(() => win.focus())
  })

  return win
}

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createWindow()
})

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createWindow()
  }
})
