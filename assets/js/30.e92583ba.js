(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{529:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("今天工作遇到一个小问题，差点不小心就犯错了，于是顺便记录一下外带着复习一下git操作，哈哈哈哈哈。")]),t._v(" "),n("p",[n("strong",[t._v("查看当前分支号")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只看git commit 号")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rev-parse --short HEAD\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看最近的一次log记录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以树形节点的方式查看log记录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph\n")])])]),n("p",[n("strong",[t._v("在当前分支基础上创建新分支并切换")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b m2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上面代码等价于")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch m2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkut m2\n")])])]),n("p",[n("strong",[t._v("提交新分支到远程仓库")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin m2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果报错，说你提交不了，你可以看看当前分支与远程分支的关系")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -vv\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让当前分支和远程分支建立关系")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream m2 origin/m2\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后就可以直接提交")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 也可以一气呵成 完成上述所有操作")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --set-upstream\n")])])]),n("p",[n("strong",[t._v("合并分支")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkut m2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge aiyoudiao\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),n("p",[n("strong",[t._v("删除分支")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d m2 \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin -d m2\n")])])]),n("p",[n("strong",[t._v("合并某一次提交记录")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看commit log记录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让当前分支合并某一个提交记录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" chery-pick 某一个commit号\n")])])]),n("p",[n("strong",[t._v("修改分支名称")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改某个分支的名字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"原分支名"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新分支名"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改当前分支的名字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新分支名"')]),t._v("\n")])])]),n("p",[n("strong",[t._v("今天遇到的案例")])]),t._v(" "),n("p",[t._v("从test2新拉个分支  把这个git号cp到新分支 然后再提mr到test2吧  你之前的分支是从dev2分支拉的  有很多空git号。")]),t._v(" "),n("p",[t._v("原本以为是"),n("br"),t._v("\n切换到test2_day2，"),n("br"),t._v("\n创建新分支dev2_day2_new_zph，"),n("br"),t._v("\n然后用新分支合并我之前的dev2_day2_zph，"),n("br"),t._v("\n再删掉本地旧分支dev2_day2_zph，"),n("br"),t._v("\n再把dev2_day2_new_zph改名为dev2_day2_zph，"),n("br"),t._v("\n然后push，最后到gitlab上去mr一下。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout test2_day2  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev2_day2_new_zph  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev2_day2_zph  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d dev2_day2_zph  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev2_day2_zph"')]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push  \n最后到gitlab上面再进行mr \n")])])]),n("p",[t._v("其实是"),n("br"),t._v("\n先找到当前分支的记录号,"),n("br"),t._v("\n切换到test2分支,"),n("br"),t._v("\n删除之前的旧分支，"),n("br"),t._v("\n删除远程的旧分支，"),n("br"),t._v("\n从test2分支上创建之前旧分支一样名字的新分支并切换过去，"),n("br"),t._v("\n把之前那个记录号合并到当前新分支，"),n("br"),t._v("\n然后提交到远程仓库"),n("br"),t._v("\n最后到gitlab上mr一下。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout test2_day2\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d dev2_day2_zph\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin -d dev2_day2_zph\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev2_day2_zph\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" chery-pick "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("刚刚git log -1 的commit号"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin dev2_day2_zph\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后到gitlab上面进行mr")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);