const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


const createWindow = () => {
    
        win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            },
            width: 800,
            height: 600,
            icon: path.join(__dirname, 'favicon.ico'),
            title: 'App Loading...',
            darkTheme: true,
            frame: false
        });

        win.loadURL(url.format({
            pathname: path.join(__dirname, '/index.html'),
            protocol: 'file:',
            slashes: true,
        }));

        win.maximize();
        // win.webContents.openDevTools();

        win.on('closed', () => {
            win = null;
        });

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null){
        createWindow();
    }
});
