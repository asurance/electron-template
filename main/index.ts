import { app, BrowserWindow } from 'electron'
function createWindow(): void {
    const win: BrowserWindow | null = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('../renderer/index.html')
    win.webContents.openDevTools()
}
app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    app.quit()
})
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})