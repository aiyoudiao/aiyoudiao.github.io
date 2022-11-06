(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{374:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("hr"),s._v(" "),t("p",[s._v("在电脑上全局设置了公司的邮箱和账号，提交代码到github时切换账号不方便，所以整一个sh脚本，但是在mac上执行这个脚本时会说权限不足。"),t("br"),s._v("\n所以需要脚本和命令来配合使用")]),s._v(" "),t("p",[s._v("切换当前仓库的git账号和邮箱")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.先在你要变更的github仓库的根目录下创建一个sh文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 仓库名\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" reset-github.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 编辑器打开这个文件，填入以下内容 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user.name和user.email 后面，请填写实际的用户名和邮箱")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--local")]),s._v(" user.name aiyoudiao\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--local")]),s._v(" user.name\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--local")]),s._v(" user.email newdiao@163.com\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--local")]),s._v(" user.email\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"set local success！！！！！"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 填入以上内容之后，编辑器保存")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 给这个文件赋予执行的权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+x ./reset-github.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. 执行这个文件，查看打印结果")]),s._v("\n./reset-github.sh\n")])])]),t("p",[s._v("** 超简单操作 **"),t("br"),s._v("\n如果觉得以上的操作比较繁琐，可以直接复制以下命令，直接回车即可，记得修改一下user.name 和 user.emal 后面的账号以及邮箱")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git config --local user.name aiyoudiao\ngit config --local user.name\ngit config --local user.email newdiao@163.com\ngit config --local user.email\necho '),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("set local success！！！！！"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('\n"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" reset-github.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+x ./reset-github.sh\n./reset-github.sh\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);