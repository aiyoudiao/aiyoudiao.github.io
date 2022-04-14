(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{520:function(a,t,r){"use strict";r.r(t);var e=r(18),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("react 是一个视图层的类库，主要是做dom渲染和响应事件的事情，如果想更高的把控它，可以有脱离基础语法束缚的哲学，从而能够站的更高。")]),a._v(" "),r("h2",{attrs:{id:"组件的组成部分应该要放到一起"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件的组成部分应该要放到一起"}},[a._v("#")]),a._v(" 组件的组成部分应该要放到一起")]),a._v(" "),r("p",[a._v("组件化的文件结构应该是 按照功能进行分类，然后每一个功能的组件中包含 api、store、css、入口文件、类型声明、枚举文件文件等等，应该要放到一起去。这样的话，找和它相关的文件，就会非常的简单。这样开发起来就能减少心智层面的压力，比如这时候有人打乱你的思路时，你也能很快的找到相应的目录及文件。")]),a._v(" "),r("p",[a._v("比如下图所示：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649850599828-63582e27-4d73-4b15-8529-97b3e4f9b118.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649850614354-494a9e19-7f47-4297-8ea2-873250e65e83.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649850630812-a70edbe4-fe70-4e5a-bc1a-646b0e13758f.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"分层思维和组件化思维"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分层思维和组件化思维"}},[a._v("#")]),a._v(" 分层思维和组件化思维")]),a._v(" "),r("p",[a._v("分层思维是从后端传过来的，后端他写一个接口不会占用太多的文件，而前端一个组件或者页面会占用很多的文件，所以是有不一样的地方。"),r("br"),a._v("\n通过组件化的目录结构，可以有效的避免项目升级或者拷贝到一个新的相似功能的位置去时出现大量的变动，直接拷贝组件的目录结构即可，工作量会很小。")]),a._v(" "),r("h2",{attrs:{id:"公共的东西一定是少数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公共的东西一定是少数"}},[a._v("#")]),a._v(" 公共的东西一定是少数")]),a._v(" "),r("p",[a._v("公共的东西可以使用分层的思维。")]),a._v(" "),r("p",[a._v("如下图：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649851459745-448fe782-6c6e-4908-8afe-f44520b95b4c.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649851484155-7afc6f37-e1c1-41e4-ac47-0aea2c499dee.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649851504702-5f72a2ad-57a8-4b35-af2c-45dcd866f5de.png",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649851565257-c53c96a3-fc68-4977-aeba-e2bc31e8af57.png",alt:""}})]),a._v(" "),r("h2",{attrs:{id:"通过组件化的方式让你的压力变小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通过组件化的方式让你的压力变小"}},[a._v("#")]),a._v(" 通过组件化的方式让你的压力变小")]),a._v(" "),r("p",[a._v("通过给公共的东西进行分层和非公共的东西进行组件化这样的设计，分层的目录结构和组件化的目录结构混合在一起用，可以让你用起来的压力很小，同时让你的工作效率高很多，如果你有两个显示器的话，不太会发生你把页面切换来切换去、闪来闪去的问题。")]),a._v(" "),r("h2",{attrs:{id:"组件化聚焦在一个页面的组合"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件化聚焦在一个页面的组合"}},[a._v("#")]),a._v(" 组件化聚焦在一个页面的组合")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://gitee.com/aiyoudiao/images/raw/master/2022/04/13/1649851891895-617ffc03-b392-484e-a6d9-4e2187961908.png",alt:""}})]),a._v(" "),r("p",[a._v("组件化提供的是一种思路 ，如何去简化这个项目，一个如何去拆分这个项目的思路，当你看到这个页面的时候，你就能想到可以把它怎么样去拆分。"),r("br"),a._v("\n这样一来它和html的布局就非常的像了，比如你去写一个页面的布局的时候，怎么写比较方便。做拆分的时候去分析它的页面结构以及布局特点。")]),a._v(" "),r("h3",{attrs:{id:"两种分析方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两种分析方式"}},[a._v("#")]),a._v(" 两种分析方式")]),a._v(" "),r("p",[a._v("左右结构 和 上下结构，分析了布局的特点，机会决定你怎么去写布局，它的拆分决定了你写布局。这种拆分和你写html布局很像。如果你拆分的不好，那么也会决定你布局写的不好。那么你CSS那里就需要再提高一些。")]),a._v(" "),r("h3",{attrs:{id:"拆分要考虑的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拆分要考虑的"}},[a._v("#")]),a._v(" 拆分要考虑的")]),a._v(" "),r("p",[a._v("拆分第一个要考虑的是基于布局，第二个要考虑的是基于交互特性。做拆分的时候要考虑一些小的细节，你不仅要考虑你看到的那些部分，你也要考虑你没看到的那部分。它是一整个项目，它不是单个项目。"),r("br"),a._v("\n所以整体来说需要思考他的交互之后，把它的特性分析完毕之后，再去考虑拆分。如果它的布局特性你没有分析完整，你就做拆分，很有可能导致你做的东西会带来某些功能或者需求实现不了或者非常难以实现。")]),a._v(" "),r("h3",{attrs:{id:"三种特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三种特性"}},[a._v("#")]),a._v(" 三种特性")]),a._v(" "),r("p",[a._v("理解组件化的时候，分析清除所有的特性，布局特性、交互特性、数据特性，分析完整之后你再去设计，否则会导致你思考出来的拆分可能有问题。拆分有问题，就会导致你实现起来很困难。"),r("br"),a._v("\n尽量的不要去漏掉一些已知条件，漏掉这些已知条件，那么你就会出现问题。"),r("br"),a._v("\n如果你发现你的解决方案太复杂了，你就回头想想是不是你拆分的有问题。多想一想")]),a._v(" "),r("h3",{attrs:{id:"做好拆分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#做好拆分"}},[a._v("#")]),a._v(" 做好拆分")]),a._v(" "),r("p",[a._v("拆分做好了之后，你就可以有序的把任务进行一个拆解，这样你分任务的时候就很简单，这时候你搭个架子就行，就算是你自己去实现也会很顺手。"),r("br"),a._v("\n先思考拆分再组合在一起。")]),a._v(" "),r("h2",{attrs:{id:"封装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[a._v("#")]),a._v(" 封装")]),a._v(" "),r("p",[a._v("封装是一个基本技能，如果这个基本技能没有弄清除，学任何框架都是百搭，学啥都会很累。想变成一个高手并不是学很多个框架，如果你掌握了上面的拆分以及现在的封装，变成一个高手其实很简单。")]),a._v(" "),r("h3",{attrs:{id:"封装的逻辑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装的逻辑"}},[a._v("#")]),a._v(" 封装的逻辑")]),a._v(" "),r("p",[a._v("先搞清楚你为什么要去做封装，封装并不光是为了复用，更多的是为了简化代码。把代码给简化了，这样可读性才好。")]),a._v(" "),r("p",[a._v("封装类似的代码，当某些代码出现了太多次，你就会想不去写太多次，从而进行封装。这时候你就需要去分析它出现的这些场景，找到它们的共性和差异性。"),r("br"),a._v("\n共性就是把相同的代码都给它封装到函数中，而差异性就是通过参数传入到函数里面，然后差异部分的参数与函数里的共性部分组合起来，最后就完成了这些场景中都能使用的功能函数封装。"),r("br"),a._v("\n当你对场景认识的不够，你封装出来的东西就会有问题，因为你封装出来的不能适应这些场景，所以可能会导致你重写。")]),a._v(" "),r("p",[a._v("对场景分析透彻很重要。搞清楚差异性，对参数的设计就是找出差异性。封装对象、函数、组件都是通过传参的方式，可能传参的方式不一样，但是归根结底是一样的，其中的参数设计就是在找它的一个差异性。")]),a._v(" "),r("p",[a._v("把简化代码提高可读性 和 通过共性、差异性来封装代码提高代码复用 这两点掌握好把控好，实际上封装就非常的简单了。")]),a._v(" "),r("h3",{attrs:{id:"封装的好处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#封装的好处"}},[a._v("#")]),a._v(" 封装的好处")]),a._v(" "),r("p",[a._v("当代码复杂了，可读性不好了，你就会去想着去封装一下代码，复用不复用其实并不是很重要，主要是代码简化了，让代码读起来更简单、很舒服，一看就知道1234干了什么，这样开发起来效率更高，心智压力更小。")]),a._v(" "),r("p",[a._v("把重复出现多的地方进行封装，把其中共性(一样)的东西封装成组件或者函数，把其中差异性(不一样)的东西设计成参数。不同的场景看你自己的一个积累，把所有场景找准，再去思考封装，这样你的代码重构或者重写的概率就会小一些。")]),a._v(" "),r("p",[a._v("如果你以简化代码的角度出发，你就不会出现几万行代码在一个文件中。正常情况下一个文件三四百行代码就已经不少了，一两百行就最好了，这样你的大多数组件就会读起来非常的简单。")]),a._v(" "),r("p",[a._v("维护的时候逻辑清晰，快速定位问题源头。")]),a._v(" "),r("h3",{attrs:{id:"不封装的坏处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不封装的坏处"}},[a._v("#")]),a._v(" 不封装的坏处")]),a._v(" "),r("p",[a._v("几千行几万行代码的一个文件，是非常难维护的，改个需求、修复个bug头疼死人了。如果好维护的话，改个bug几分钟就能改完。"),r("br"),a._v("\n如果不好维护的话，改个bug就要几个小时甚至更长，甚至你还提心吊胆的，各种反复的验证，不知道它改对了没有。")]),a._v(" "),r("h3",{attrs:{id:"不可过度封装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不可过度封装"}},[a._v("#")]),a._v(" 不可过度封装")]),a._v(" "),r("p",[a._v("如果你的代码很简单，一般情况下就没必要去封装它。封装是为了简化代码，并不是去复杂化代码然后让代码阅读起来更加困难。")]),a._v(" "),r("h2",{attrs:{id:"数据驱动ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动ui"}},[a._v("#")]),a._v(" 数据驱动UI")]),a._v(" "),r("p",[a._v("组件化的框架就是数据驱动UI的，如React，dom操作由框架去完成，而你只需要关注数据，因为数据和UI之间建立了一个联系，通过操作这个数据，UI就能够自动进行变化。")]),a._v(" "),r("h3",{attrs:{id:"不同角度的解读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不同角度的解读"}},[a._v("#")]),a._v(" 不同角度的解读")]),a._v(" "),r("p",[a._v("数据驱动，要清楚驱动UI的数据是哪些数据，驱动UI的数据和不需要驱动UI的数据分开。需要驱动UI的数据就放到react的state或者vue的data中去。这样就能减少数据监听时带来的性能损耗以及阅读代码时的一些误导，因为不需要驱动UI的数据没必要放到数据监听的地方。")]),a._v(" "),r("p",[a._v("开发的时候大都是先看到UI，后看到数据，那么你就需要去分析这个UI可能会带来哪些数据。比如 列表 这样的UI，你肯定能想到它是一个数组。还有选项卡这样的UI，它的数据应该是什么样的。"),r("br"),a._v("\n先分析出来，它是由什么样的数据结构组成，它有什么样的特性，怎么去操作这样的数据，从而思考出解决方案，最后就知道如何去用数据驱动UI了。")]),a._v(" "),r("p",[a._v("开发思维的代数效应，通过数据的变化驱动另外一个数据的变化，再用被驱动的数据来驱动UI，类似vue中的computed 或者 watch以及react中的useEffect。"),r("br"),a._v("\n当项目中的数据有很多，从而变的很复杂，这时候可以提炼出一个数据，让这个简单的数据被那几个复杂的数据驱动，从而使用这个简单的数据来驱动UI，这就是聚合。"),r("br"),a._v("\n也可以让这个简单的数据去驱动那几个复杂的数据，从而使用复杂的数据去驱动UI，都是可以的。比如页面是否刷新，一刷新，所有数据都会重新赋值，然后UI就会重新渲染。")]),a._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),r("p",[a._v("很多东西就是一个认知的问题，有了这个认知你才能少走很多弯路。")]),a._v(" "),r("h2",{attrs:{id:"其它"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),r("p",[a._v("dva 聚合了redux了一些功能。")]),a._v(" "),r("p",[a._v("umi 挺好用的")]),a._v(" "),r("p",[a._v("react 18 其实不是给普通用户用的，实际上是给底层开发、工具开发，它可能会用到一些并发的模式。")]),a._v(" "),r("p",[a._v("ref 和 memo 都是缓存数据，都是闭包")]),a._v(" "),r("p",[a._v("redux-toolkit：Redux 工具包，官方的。"),r("a",{attrs:{href:"https://github.com/reduxjs/redux-toolkit",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/reduxjs/redux-toolkit"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);