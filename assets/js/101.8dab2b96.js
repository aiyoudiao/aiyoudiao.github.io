(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{448:function(s,a,e){"use strict";e.r(a);var l=e(1),t=Object(l.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意 ⚠️")]),s._v(" "),e("p",[s._v("说明:本章内容为博主在原教程基础上添加自己的学习笔记，来源"),e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2020/04/bash-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.ruanyifeng.com/blog/2020/04/bash-tutorial.html"),e("OutboundLink")],1),s._v("，教程版权归原作者所有。")])]),s._v(" "),e("h1",{attrs:{id:"bash-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-简介"}},[s._v("#")]),s._v(" Bash 简介")]),s._v(" "),e("p",[s._v("Bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。")]),s._v(" "),e("h2",{attrs:{id:"shell-的含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-的含义"}},[s._v("#")]),s._v(" Shell 的含义")]),s._v(" "),e("p",[s._v("学习 Bash，首先需要理解 Shell 是什么。Shell 这个单词的原意是“外壳”，跟 kernel（内核）相对应，比喻内核外面的一层，即用户跟内核交互的对话界面。")]),s._v(" "),e("p",[s._v("具体来说，Shell 这个词有多种含义。")]),s._v(" "),e("p",[s._v("首先，Shell 是一个程序，提供一个与用户对话的环境。这个环境只有一个命令提示符，让用户从键盘输入命令，所以又称为命令行环境（commandline，简写为 CLI）。Shell 接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。本书中，除非特别指明，Shell 指的就是命令行环境。")]),s._v(" "),e("p",[s._v("其次，Shell 是一个命令解释器，解释用户输入的命令。它支持变量、条件判断、循环操作等语法，所以用户可以用 Shell 命令写出各种小程序，又称为脚本（script）。这些脚本都通过 Shell 的解释执行，而不通过编译。")]),s._v(" "),e("p",[s._v("最后，Shell 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。")]),s._v(" "),e("h2",{attrs:{id:"shell-的种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-的种类"}},[s._v("#")]),s._v(" Shell 的种类")]),s._v(" "),e("p",[s._v("Shell 有很多种，只要能给用户提供命令行环境的程序，都可以看作是 Shell。")]),s._v(" "),e("p",[s._v("历史上，主要的 Shell 有下面这些。")]),s._v(" "),e("ul",[e("li",[s._v("Bourne Shell（sh）")]),s._v(" "),e("li",[s._v("Bourne Again shell（bash）")]),s._v(" "),e("li",[s._v("C Shell（csh）")]),s._v(" "),e("li",[s._v("TENEX C Shell（tcsh）")]),s._v(" "),e("li",[s._v("Korn shell（ksh）")]),s._v(" "),e("li",[s._v("Z Shell（zsh）")]),s._v(" "),e("li",[s._v("Friendly Interactive Shell（fish）")])]),s._v(" "),e("p",[s._v("Bash 是目前最常用的 Shell，除非特别指明，下文的 Shell 和 Bash 当作同义词使用，可以互换。")]),s._v(" "),e("p",[s._v("下面的命令可以查看当前运行的 Shell。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n/bin/bash\n")])])]),e("p",[s._v("下面的命令可以查看当前的 Linux 系统安装的所有 Shell。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n")])])]),e("p",[s._v("上面两个命令中，"),e("code",[s._v("$")]),s._v("是命令行环境的提示符，用户只需要输入提示符后面的内容。")]),s._v(" "),e("p",[s._v("Linux 允许每个用户使用不同的 Shell，用户的默认 Shell 一般都是 Bash，或者与 Bash 兼容。")]),s._v(" "),e("h2",{attrs:{id:"命令行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行环境"}},[s._v("#")]),s._v(" 命令行环境")]),s._v(" "),e("h3",{attrs:{id:"终端模拟器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#终端模拟器"}},[s._v("#")]),s._v(" 终端模拟器")]),s._v(" "),e("p",[s._v("如果是不带有图形环境的 Linux 系统（比如专用于服务器的系统），启动后就直接是命令行环境。")]),s._v(" "),e("p",[s._v("不过，现在大部分的 Linux 发行版，尤其是针对普通用户的发行版，都是图形环境。用户登录系统后，自动进入图形环境，需要自己启动终端模拟器，才能进入命令行环境。")]),s._v(" "),e("p",[s._v("所谓“终端模拟器”（terminal emulator）就是一个模拟命令行窗口的程序，让用户在一个窗口中使用命令行环境，并且提供各种附加功能，比如调整颜色、字体大小、行距等等。")]),s._v(" "),e("p",[s._v("不同 Linux 发行版（准确地说是不同的桌面环境）带有的终端程序是不一样的，比如 KDE 桌面环境的终端程序是 konsole，Gnome 桌面环境的终端程序是 gnome-terminal，用户也可以安装第三方的终端程序。所有终端程序，尽管名字不同，基本功能都是一样的，就是让用户可以进入命令行环境，使用 Shell。")]),s._v(" "),e("h3",{attrs:{id:"命令行提示符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行提示符"}},[s._v("#")]),s._v(" 命令行提示符")]),s._v(" "),e("p",[s._v("进入命令行环境以后，用户会看到 Shell 的提示符。提示符往往是一串前缀，最后以一个美元符号"),e("code",[s._v("$")]),s._v("结尾，用户可以在这个符号后面输入各种命令。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user@hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $\n")])])]),e("p",[s._v("上面例子中，完整的提示符是"),e("code",[s._v("[user@hostname] $")]),s._v("，其中前缀是用户名（"),e("code",[s._v("user")]),s._v("）加上"),e("code",[s._v("@")]),s._v("，再加主机名（"),e("code",[s._v("hostname")]),s._v("）。比如，用户名是"),e("code",[s._v("bill")]),s._v("，主机名是"),e("code",[s._v("home-machine")]),s._v("，前缀就是"),e("code",[s._v("bill@home-machine")]),s._v("。")]),s._v(" "),e("p",[s._v("注意，根用户（root）的提示符，不以美元符号（"),e("code",[s._v("$")]),s._v("）结尾，而以井号（"),e("code",[s._v("#")]),s._v("）结尾，用来提醒用户，现在具有根权限，可以执行各种操作，务必小心，不要出现误操作。这个符号是可以自己定义的，详见《命令提示符》一章。")]),s._v(" "),e("p",[s._v("为了简洁，后文的命令行提示符都只使用"),e("code",[s._v("$")]),s._v("表示。")]),s._v(" "),e("h3",{attrs:{id:"进入和退出方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入和退出方法"}},[s._v("#")]),s._v(" 进入和退出方法")]),s._v(" "),e("p",[s._v("进入命令行环境以后，一般就已经打开 Bash 了。如果你的 Shell 不是 Bash，可以输入"),e("code",[s._v("bash")]),s._v("命令启动 Bash。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),e("p",[s._v("退出 Bash 环境，可以使用"),e("code",[s._v("exit")]),s._v("命令，也可以同时按下"),e("code",[s._v("Ctrl + d")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),e("p",[s._v("Bash 的基本用法就是在命令行输入各种命令，非常直观。作为练习，可以试着输入"),e("code",[s._v("pwd")]),s._v("命令。按下回车键，就会显示当前所在的目录。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/home/me\n")])])]),e("p",[s._v("如果不小心输入了"),e("code",[s._v("pwe")]),s._v("，会返回一个提示，表示输入出错，没有对应的可执行程序。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ pwe\nbash: pwe：未找到命令\n")])])]),e("h2",{attrs:{id:"shell-和-bash-的历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-和-bash-的历史"}},[s._v("#")]),s._v(" Shell 和 Bash 的历史")]),s._v(" "),e("p",[s._v("Shell 伴随着 Unix 系统的诞生而诞生。")]),s._v(" "),e("p",[s._v("1969 年，Ken Thompson 和 Dennis Ritchie 开发了第一版的 Unix。")]),s._v(" "),e("p",[s._v("1971 年，Ken Thompson 编写了最初的 Shell，称为 Thompson shell，程序名是"),e("code",[s._v("sh")]),s._v("，方便用户使用 Unix。")]),s._v(" "),e("p",[s._v("1973 年至 1975 年间，John R. Mashey 扩展了最初的 Thompson shell，添加了编程功能，使得 Shell 成为一种编程语言。这个版本的 Shell 称为 Mashey shell。")]),s._v(" "),e("p",[s._v("1976 年，Stephen Bourne 结合 Mashey shell 的功能，重写一个新的 Shell，称为 Bourne shell。")]),s._v(" "),e("p",[s._v("1978 年，加州大学伯克利分校的 Bill Joy 开发了 C shell，为 Shell 提供 C 语言的语法，程序名是"),e("code",[s._v("csh")]),s._v("。它是第一个真正替代"),e("code",[s._v("sh")]),s._v("的 UNIX shell，被合并到 Berkeley UNIX 的 2BSD 版本中。")]),s._v(" "),e("p",[s._v("1979 年，UNIX 第七版发布，内置了 Bourne Shell，导致它成为 Unix 的默认 Shell。注意，Thompson shell、Mashey shell 和 Bourne shell 都是贝尔实验室的产品，程序名都是"),e("code",[s._v("sh")]),s._v("。对于用户来说，它们是同一个东西，只是底层代码不同而已。")]),s._v(" "),e("p",[s._v("1983 年，David Korn 开发了 Korn shell，程序名是"),e("code",[s._v("ksh")]),s._v("。")]),s._v(" "),e("p",[s._v("1985 年，Richard Stallman 成立了自由软件基金会（FSF），由于 Shell 的版权属于贝尔公司，所以他决定写一个自由版权的、使用 GNU 许可证的 Shell 程序，避免 Unix 的版权争议。")]),s._v(" "),e("p",[s._v("1988 年，自由软件基金会的第一个付薪程序员 Brian Fox 写了一个 Shell，功能基本上是 Bourne shell 的克隆，叫做 Bourne-Again SHell，简称 Bash，程序名为"),e("code",[s._v("bash")]),s._v("，任何人都可以免费使用。后来，它逐渐成为 Linux 系统的标准 Shell。")]),s._v(" "),e("p",[s._v("1989 年，Bash 发布 1.0 版。")]),s._v(" "),e("p",[s._v("1996 年，Bash 发布 2.0 版。")]),s._v(" "),e("p",[s._v("2004 年，Bash 发布 3.0 版。")]),s._v(" "),e("p",[s._v("2009 年，Bash 发布 4.0 版。")]),s._v(" "),e("p",[s._v("2019 年，Bash 发布 5.0 版。")]),s._v(" "),e("p",[s._v("用户可以通过"),e("code",[s._v("bash")]),s._v("命令的"),e("code",[s._v("--version")]),s._v("参数或者环境变量"),e("code",[s._v("$BASH_VERSION")]),s._v("，查看本机的 Bash 版本。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\nGNU bash，版本 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(".3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("-release "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86_64-pc-linux-gnu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$BASH_VERSION")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(".3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("-release\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);