(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{418:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("hr"),s._v(" "),t("p",[s._v("今天遇到一个问题，将特殊的pdf转换成html之后，会导致很多元素转成了svg，html页面中通过object 和 embed 标签潜入svg，但是后端说没法支持这个，让我直接放到html中。放到html之后会导致页面的svg出现了很多问题。然后我就通过 修改 defs 和 g 中的容器id，使用以下方式，局部的正则替换")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(\\d+?)"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body1'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n\nclip-path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url\\(#(\\d+?)\\)"')]),s._v("\nclip-path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url(#body3'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(')"')]),s._v("\n")])])]),t("p",[s._v("然后紧接着又遇到一个问题，需要把所有的文件的名字中包含的特殊字符都给去掉，然后就写了一个sh命令，将上百的文件批量改名。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环当前目录，通过sed的正则匹配，将下划线改为空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/_//'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),t("p",[s._v("参考资料：\nhttp://t.zoukankan.com/baizhantang-p-2680613.html"),t("br"),s._v("\nhttps://blog.csdn.net/wdz306ling/article/details/80087889/")]),s._v(" "),t("p",[s._v("最后又遇到一个问题，需要把html中svg中引入的所有图片的引用名称都更正一下。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将html中带下滑线的图片也给它设置为空")]),s._v("\nimg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("d+?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".png\nimg"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(".png\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);