(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{414:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("今天遇到一个问题，node端通过 "),n("code",[t._v("node-http-proxy-json")]),t._v(" 进行代理时，下载的文件出现乱码问题，这个问题是由于这个依赖包会对响应内容进行toString()，这种普通的toString会把非文本文件的内容弄成乱码，所以要注意这一点。")]),t._v(" "),n("p",[t._v("这个问题是在下载csv文件的时候发生的，csv文件是通过逗号分隔值以纯文本形式存储表格数据的文件。"),n("br"),t._v("\n但是excel富文本文件也可以存储成以csv后缀结尾的文件，但这种文件并不是纯文本，所以会在toString的时候乱码。"),n("br"),t._v("\n从而使得前端下载普通格式的csv文件正常，但是下载这种含有富文本的csv后缀结尾的文件时会损坏，但主要是node代理时用到了那个包内部的处理机制导致的。")]),t._v(" "),n("p",[t._v("可以在代理的那部分进行判断，如果是文件类型的响应，不对其内容进行解析，直接放过，判断的代码如下。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyResponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-disposition'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求的URL: %s, 请求状态: %s, 请求的UUID: %s'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'成功'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uuid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);