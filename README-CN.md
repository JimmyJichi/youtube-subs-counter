# YouTube-Subs-Counter


[English](https://github.com/JJaicmkmy/youtube-subs-counter)

此 App 会在你的桌面上放置一个小工具，让你可以随时查看自己的 YouTube 频道的订阅数。

![](https://i.imgur.com/RzCYXNm.jpg)


## Configure
前往 `index.html`， 将 https://akshatmittal.com/youtube-realtime/embed/#!/UC-lHJZR3Gqxm24_Vd_AJ5Yw 更改为你自己的频道ID。

然后

```
npm install
npm start
```

此时你应该可以在桌面看到你的频道订阅数。如果位置不正确，请修改 `index.js` 中的`x` 和 `y`。

如要打包成程序，运行

```
electron-packager /path/to/counter YouTube-Counter --mac --x64 --electron-version=1.6.2 --out=/path/to/output
```

请将平台和版本改为实际情况。

理论上，此 App 可运行在所有平台，但是我使用了一些 Mac 特有的 API， 所以 Windows 和 Linux 上运行可能会有问题。

## Credit
此 App 是 [youtube-realtime](https://github.com/akshatmittal/youtube-realtime) 的 Electron 包装，感谢 [Akshat Mittal](https://github.com/akshatmittal) 的作品。

