(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{469:function(r,t,e){"use strict";e.r(t);var a=e(4),s=Object(a.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),t("p",[r._v("最近对auto.js很感兴趣，所以花些时间来玩玩。auto.js是一个能在手机端进行自动化运行程序的功能，依托的是手机的无障碍功能，所以不需要root。它使用js来写的。")]),r._v(" "),t("p",[t("strong",[r._v("相关博客")])]),r._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/freeking101/article/details/120775403",target:"_blank",rel:"noopener noreferrer"}},[r._v("AutoJs 4.1.1 实战教程"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/freeking101/article/details/121586713?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"}},[r._v("Auto.JS 开发"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/Cupster/article/details/115751897",target:"_blank",rel:"noopener noreferrer"}},[r._v("AutoJS一文精通AutoJS脚本教程详解"),t("OutboundLink")],1)]),r._v(" "),t("h2",{attrs:{id:"任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[r._v("#")]),r._v(" 任务")]),r._v(" "),t("p",[r._v("第一天了解auto.js，然后能够在电脑上借助工具投屏。"),t("br"),r._v("\n第二天能够开始编码，然后能够调试auto.js。"),t("br"),r._v("\n第三天能够写一个小功能，然后打包到手机上使用。"),t("br"),r._v("\n第四天能够截图出来，可以识图，识色，点击。"),t("br"),r._v("\n第五天能够进行一连串的操作，自动去打怪，自动回收。"),t("br"),r._v("\n第六天能够进行自动切换地图，自动打怪，自动回收，自动买药。")]),r._v(" "),t("h2",{attrs:{id:"投屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投屏"}},[r._v("#")]),r._v(" 投屏")]),r._v(" "),t("p",[r._v("做手机端自动化的功能，需要调试，写代码肯定是在电脑端写，这样一来自然需要调试，这样一来就需要电脑投屏手机。")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Genymobile/scrcpy",target:"_blank",rel:"noopener noreferrer"}},[r._v("scrcpy"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://github.com/barry-ran/QtScrcpy",target:"_blank",rel:"noopener noreferrer"}},[r._v("QtScrcpy"),t("OutboundLink")],1)]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1w44y157VE?p=4",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用的视频1"),t("OutboundLink")],1),t("br"),r._v(" "),t("a",{attrs:{href:"https://www.bilibili.com/video/BV1w44y157VE?p=5&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用的视频2"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"scrcpy-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrcpy-使用"}},[r._v("#")]),r._v(" scrcpy 使用")]),r._v(" "),t("p",[r._v("下载了官方发布的包之后，可以进行解压，解压之后文件夹不要有空格，然后你命令行切换到那个目录下面，最后输入命令 scrcpy。")]),r._v(" "),t("p",[r._v("但是在输入这个命令之前，你得要开启手机的USB调试模式。")]),r._v(" "),t("p",[r._v("比如我是小米手机，那么就是在 设置 -> 我的设置 -> 全部参数 -> 点击7下 "),t("code",[r._v("MIUI版本")]),r._v("的小卡片。这时候它会告诉你已经开启开发者模式了"),t("br"),r._v("\n然后再到 设置 -> 更多设置 -> 开发者模式 -> 滑动到调试栏，把 USB调试、USB安装、US调试(安全设置) 全部打开。"),t("br"),r._v("\n最后你在电脑中运行一下命令 scrcpy，就会发现投屏成功，电脑中有一个手机屏幕，可以看到手机上的东西。")]),r._v(" "),t("p",[t("strong",[r._v("注意：")])]),r._v(" "),t("p",[r._v("也要把 开发者选项 中的 默认USB配置 设置为仅传输文件，这样传输文件就没问题了。"),t("br"),r._v("\n还有把 开发者选项 中的 显示指针位置，也给勾上，这样就能在顶上方看到所有的坐标位置了，非常的方便你之后写脚本定位坐标。")]),r._v(" "),t("p",[t("strong",[r._v("关闭这个软件")])]),r._v(" "),t("p",[r._v("scrcpy 启动之后会在后台启动一个adb的服务，你也直接在那个目录下使用命令"),t("code",[r._v("adb start-server")]),r._v("来直接启动这个服务。"),t("br"),r._v("\n但是你如果要彻底关闭这个服务的话，要么重启电脑，要么使用命令"),t("code",[r._v("adb kill-server")]),r._v("来杀掉这个服务。")]),r._v(" "),t("h3",{attrs:{id:"qtscrcpy-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qtscrcpy-使用"}},[r._v("#")]),r._v(" QtScrcpy 使用")]),r._v(" "),t("p",[r._v("和scrcpy一样，下载后，解压，但是它有UI界面的exe。"),t("br"),r._v("\n如果你之前使用了scrcpy的话，用这个更方便，它有可视化界面，更好用，还可以简单的使用无线连接，这样就不需要usb连接了，非常的方便噢。")]),r._v(" "),t("h3",{attrs:{id:"雷电模拟器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#雷电模拟器"}},[r._v("#")]),r._v(" 雷电模拟器")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1w44y157VE?p=6&spm_id_from=pageDriver",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用的视频"),t("OutboundLink")],1)]),r._v(" "),t("p",[r._v("先从官网下载最新版的，然后安装，最后使用。记得使用雷电多开的功能，可以方便你设置多个模拟器，并且你使用模拟器的时候，最好给它设置上和你的手机是一样的分辨率，这样模拟器和手机都能用上之后你写的脚本了。")]),r._v(" "),t("p",[r._v("如果你的电脑没有开启虚拟化，那么雷电模拟器就会很卡，你可以百度搜索 雷电模拟器VT虚拟化，然后一步一步的设置即可。")]),r._v(" "),t("p",[r._v("有几个比较好的功能：多开、共享文件。")]),r._v(" "),t("p",[r._v("使用了雷电模拟器之后，可以开启开发者模式，然后开启USB调试，这样一来就可以在电脑上直接scrcpy了。")]),r._v(" "),t("h2",{attrs:{id:"开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[r._v("#")]),r._v(" 开发")]),r._v(" "),t("h3",{attrs:{id:"vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[r._v("#")]),r._v(" vscode")]),r._v(" "),t("p",[r._v("这是一个编辑器，百度搜索一下，然后去官网下载即可。")]),r._v(" "),t("h3",{attrs:{id:"auto-js-插件的安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-js-插件的安装和使用"}},[r._v("#")]),r._v(" auto.js 插件的安装和使用")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.bilibili.com/video/BV1w44y157VE?p=8",target:"_blank",rel:"noopener noreferrer"}},[r._v("使用视频"),t("OutboundLink")],1)]),r._v(" "),t("p",[r._v("在vscode 插件中去搜索 auto.js 安装插件。")]),r._v(" "),t("p",[r._v("如果你用的是7版本以下，就要安装 Auto.js-VSCodeExt 和 Auto.js-Pro-Ext 这两个，如果是7及以上，就只用安装Auto.js-Pro-Ext即可。")])])}),[],!1,null,null,null);t.default=s.exports}}]);