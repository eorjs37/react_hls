// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: true,
    },
  })

  win.loadURL('http://localhost:3000')

  // React DevTools 추가
  win.webContents.on('did-finish-load', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
        console.log(`Added extension : ${name}`)
      })
      .catch(err => {
        console.log(`An error ocurred `, err)
      })
      .finally(() => {
        console.log('Finally')
      })
  })
  win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self'; style-src 'self' 'unsafe-inline'"],
      },
    })
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
