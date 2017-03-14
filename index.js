const {app, BrowserWindow} = require('electron')

let win

function createWindow(){
    win = new BrowserWindow({
        x: 1130,
        y: 30,
        type: 'desktop',
        resizable: false,
        show: false,
        width:300,
        height:95,
        frame:false,
        show:false,
        center: true,
        skipTaskbar: true,
    }
)

app.dock.hide();
win.setMenu(null);

win.once('ready-to-show', () => {
  win.show()
})

    // win.openDevTools()
    win.loadURL(`file://${__dirname}/index.html`)

    win.on('ready-to-show',()=>{
        win.show()
    })

    // 
    win.on('closed',()=>{
        win = null
    })
}

app.on('ready',createWindow)

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

//处理 Mac 的 Dock 图标点击
app.on('activate', ()=>{
    if(win === null){
        createWindow()
    }
})
