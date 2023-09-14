(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{406:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"问题及解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题及解决"}},[s._v("#")]),s._v(" 问题及解决")]),s._v(" "),t("p",[s._v("给项目添加husky支持的时候遇到一个问题。按照官网的husky命令弄，结果给我一直显示我命令不对，给我显示帮助文档。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/15/1650000444752-bfbf0249-3a4d-4f0d-b290-21bd824d2bbe.png",alt:""}})]),s._v(" "),t("p",[s._v('一开始我以为是husky的类库有bug，然后去看了husky的源码，后来发现是nodejs 的环境变量 process.argv 把我的 "npm run lint" 直接分解了，导致husky中对参数的个数进行判断时出现了问题。')]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/15/1650000533734-6119f5cc-30b4-4476-9214-2f7bf68737de.png",alt:""}})]),s._v(" "),t("p",[s._v("不知道是哪个环节出了问题，我这个process.argv 是真蠢，看到打印的结果，应该直接就是按照空格来分割参数来着。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/15/1650000629057-e8d332bd-ae0c-4b4b-89ac-6af082cec137.png",alt:""}})]),s._v(" "),t("p",[s._v("然后解决的方式是：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("npx husky "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/pre-commit\n")])])]),t("p",[s._v("然后在pre-commit 文件中加一个 npm run lint，但这样不是很友好，需要你每次去文件中改。")]),s._v(" "),t("p",[s._v("最后解决的方式是：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("npx husky "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/pre-commit "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run lint "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .husky/pre-commit\n")])])]),t("p",[s._v("通过命令创建要给空的文件，然后通过echo 将命令追加到这个文件中去，最终证实有效。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("可能是node环境有问题，也可能是process.argv 这个变量被什么类库中被重写了，所以导致参数列表不对，从而使得husky不能按照官方文档中正确解析参数而调用相应的api。"),t("br"),s._v("\n不过通过我这种方式，无论是正确还是错误的环境下，都能正常操作的使用husky。")])])}),[],!1,null,null,null);a.default=r.exports}}]);