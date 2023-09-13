(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{452:function(t,a,s){"use strict";s.r(a);var n=s(4),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-性能优化-进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-性能优化-进阶"}},[t._v("#")]),t._v(" JS 性能优化-进阶")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("V8 引擎中的垃圾回收操作非常友好：")]),t._v(" "),a("ol",[a("li",[t._v("在新生代存储区域中采用的是空间换时间的优化策略，所以新生代的存储区域没有老生代的大。")]),t._v(" "),a("li",[t._v("在老生代存储区域中采用的是不阻碍程序执行的增量标记的优化策略，也就是执行->暂停->打标记->执行->暂停->继续打标记。这样即不阻止程序正常执行，同时用户对这个过程无感。把耗时的事情进行分段，然后增量的去做。")])]),t._v(" "),a("p",[t._v("性能的评判标准：可以借助多种工具呈现的效果来进行评判。")]),t._v(" "),a("h2",{attrs:{id:"performance-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-工具"}},[t._v("#")]),t._v(" Performance 工具")]),t._v(" "),a("p",[t._v("GC 实现了内存空间在使用过程中的良性循环，从而实现更合理的分配内存。当你能够关注到内存的使用状况，才能判断是否已经达到这样的期望。这个工具就提供了这样的监控功能。")]),t._v(" "),a("p",[t._v("流程：\n打开网址 -> 打开浏览器开发人员工具 -> 选择 Performance(性能)选项卡 -> 点击 record(录制)按钮 -> 在页面开始用户的操作行为 -> 结束时 stop(停止录制)按钮 -> 分析 Performance(性能)界面中的记录的各项性能指标的图示 -> 可以勾选一些辅助选项，尝试找出问题，开始优化。")]),t._v(" "),a("h3",{attrs:{id:"内存问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存问题"}},[t._v("#")]),t._v(" 内存问题")]),t._v(" "),a("p",[t._v("代码有问题，GC 频繁的垃圾回收，就会出现页面出现延迟加载、经常性的暂停。"),a("br"),t._v("\n内存膨胀，由于申请的内存空间过大，就会出现页面持续出现糟糕的性能表现。"),a("br"),t._v("\n内存泄漏，由于大量的内存不能被回收，就会出现页面的性能随时间的延长而越来越差。")]),t._v(" "),a("p",[t._v("解决思路："),a("br"),t._v("\n内存泄漏，需要找到有问题的代码块，最终修复。"),a("br"),t._v("\n内存膨胀，需要在多种设备上进行测试，从而分析出这是硬件问题还是程序问题。"),a("br"),t._v("\nGC 频繁的垃圾回收，需要通过内存的趋势图来进行分析，找到有问题的代码块，最终修复。")]),t._v(" "),a("h2",{attrs:{id:"监控内存的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控内存的方式"}},[t._v("#")]),t._v(" 监控内存的方式")]),t._v(" "),a("ol",[a("li",[t._v("浏览器的任务管理器：可以很直接查看到内存变化。")]),t._v(" "),a("li",[t._v("Timeline 时序图界面：可以很方便的查看到程序执行过程中的不同时间点的内存变化走势。")]),t._v(" "),a("li",[t._v("堆快照图界面：可以看看有没有分离 DOM 的存在，也就是不在页面中存在的真实 DOM，但还有 js 对象引用着这个 DOM 对象，还会占用着 JS 中的内存空间。")]),t._v(" "),a("li",[t._v("页面效果：凭借页面呈现的效果来判断是否存在频繁的垃圾回收。")])]),t._v(" "),a("h3",{attrs:{id:"浏览器的任务管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的任务管理器"}},[t._v("#")]),t._v(" 浏览器的任务管理器")]),t._v(" "),a("p",[t._v("这个功能在浏览器的顶栏的空白处进行右键选择菜单列表项时即可打开。"),a("br"),t._v("\n可以大概清除当前运行的程序是否存在问题，但无法简单的定位到问题在哪里。")]),t._v(" "),a("p",[t._v("任务管理器中列的说明：")]),t._v(" "),a("ul",[a("li",[t._v("任务：程序的名称")]),t._v(" "),a("li",[t._v("内存：HTML 的 DOM 节点占用的内存")]),t._v(" "),a("li",[t._v("JavaScript 内存：JS 所有可达对象中占用的内存")])]),t._v(" "),a("h3",{attrs:{id:"timeline-时序图界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeline-时序图界面"}},[t._v("#")]),t._v(" Timeline 时序图界面")]),t._v(" "),a("p",[t._v("这是浏览器开发人员工具中的 Performance 工具。"),a("br"),t._v("\n录制结束后，可以点击内存的复选框，就能看到各种内存的 timeline 时序图。通过选择某一段范围，从而定位出代码中的问题所在。")]),t._v(" "),a("p",[t._v("时序图中的复选框说明：")]),t._v(" "),a("ul",[a("li",[t._v("JS 堆：JS 可达对象占用的内存")]),t._v(" "),a("li",[t._v("文档：html 操作占用的内存")]),t._v(" "),a("li",[t._v("节点：dom 节点占用的内存")]),t._v(" "),a("li",[t._v("侦听器：事件操作占用的内存")]),t._v(" "),a("li",[t._v("GPU 内存：GPU 加速时占用的内存")])]),t._v(" "),a("h3",{attrs:{id:"堆快照图界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆快照图界面"}},[t._v("#")]),t._v(" 堆快照图界面")]),t._v(" "),a("p",[t._v("这是浏览器开发人员工具中的 Memory 工具。"),a("br"),t._v("\n通过对 js 运行时的内存堆中快照进行一个保存，然后可以看到快照中的信息，通过这些信息从而定位相关的问题。")]),t._v(" "),a("p",[t._v("分离 DOM 也就是独立的 DOM，它是从 DOM 树中脱离出来或者你自己创建出来的。如果该 DOM 没有被引用，它就会被作为垃圾 DOM 对象，从而被回收。如果有被 JS 对象引用，那么就会一直存活在内存中，就可能导致内存溢出。")]),t._v(" "),a("p",[t._v("在操作之前获取一次快照，再操作之后再获取一次快照，通过在筛选框中输入 Detached，就能看出存在浪费内存的分离 DOM 了。找到浪费的 DOM 后，就能够找到那部分代码，最后优化。"),a("br"),t._v("\n截取堆快照时，记得清空 Application 中存储菜单里的网站数据，然后再刷新一下页面，这样就不会截取之前操作应用的内存快照了。")]),t._v(" "),a("p",[t._v("内存快照中的类别说明：")]),t._v(" "),a("ul",[a("li",[t._v("Detached：分离的，后面会跟着 DOM 类型，比如 HTMLPElement，表示 P 标签")])]),t._v(" "),a("h3",{attrs:{id:"页面效果-频繁的垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面效果-频繁的垃圾回收"}},[t._v("#")]),t._v(" 页面效果-频繁的垃圾回收")]),t._v(" "),a("p",[t._v("GC 工作时，应用程序会暂停。频繁且持续时间长的 GC 回收操作会导致程序呈现假死效果。用户在使用过程中能清晰的感知到程序在卡顿。")]),t._v(" "),a("p",[t._v("通过 Timeline 中的频繁的上下浮动趋势和浏览器的任务管理器工具中该程序 JavaScript 内存的频繁的上升下降，从而确定 GC 正在频繁的进行垃圾回收操作，然后定位到那个时间节点，从而判断是什么原因导致出现这样对内存操作不当的行为，最后解决这个问题。")]),t._v(" "),a("h2",{attrs:{id:"v8-引擎工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-引擎工作流"}},[t._v("#")]),t._v(" V8 引擎工作流")]),t._v(" "),a("h3",{attrs:{id:"组成部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组成部分"}},[t._v("#")]),t._v(" 组成部分")]),t._v(" "),a("ul",[a("li",[t._v("Scanner 扫描器：对代码进行词法分析，最终转成 token 集。")]),t._v(" "),a("li",[t._v("Parser 解析器：对词法转换后的 token 集，进行语法分析，会对语法进行校验，错误就抛异常，最终将代码转成抽象语法树。")]),t._v(" "),a("li",[t._v("pre parser 预解析：快速解析，对暂未调用的代码进行预解析，不转成 AST，会创建临时变量引用和声明的 scopes，对部分不规范的语法进行报错。")]),t._v(" "),a("li",[t._v("full parser 全量解析：对被调用到的代码进行全量解析，会转成 AST，会创建有效变量引用和声明的 scopes，对全部不规范的语法进行报错。在解析过程中，如发现函数嵌套，就会出现重复的解析操作，所以避免多层级的函数嵌套。")]),t._v(" "),a("li",[t._v("Ignition 解释器：V8 提供的，将解析的 AST 转成字节码，同时生成后续编译需要的一些基本信息。")]),t._v(" "),a("li",[t._v("TurboFan 编译器：V8 提供的，将字节码转变为汇编代码，然后开始代码执行，最后程序会在堆栈中执行。")])]),t._v(" "),a("h3",{attrs:{id:"堆栈操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆栈操作"}},[t._v("#")]),t._v(" 堆栈操作")]),t._v(" "),a("p",[t._v("准备工作：")]),t._v(" "),a("ul",[a("li",[t._v("JS 执行环境：通过 V8 把代码转成机器码")]),t._v(" "),a("li",[t._v("执行环境栈 ECStack：执行机器码的内存环境空间。")]),t._v(" "),a("li",[t._v("执行上下文：把局部代码和全局代码进行隔离，不同的执行区域。有一个全局执行上下文 EC(G)，多个局部(私有)执行上下文 EC(函数名)。")]),t._v(" "),a("li",[t._v("VO(G) 全局变量对象空间：所有的变量声明全都存放在这片空间中。")]),t._v(" "),a("li",[t._v("AO(函数名) 某函数的变量对象空间：该函数内的变量声明全都存放在这片空间中。")]),t._v(" "),a("li",[t._v("GO 全局对象：初始操作时，在内存中开辟的"),a("code",[t._v("一片空间")]),t._v("，这片空间中存放的是不同宿主环境中提供的官方 API。它并不是 VO(G)。")])]),t._v(" "),a("p",[t._v("操作说明：")]),t._v(" "),a("ol",[a("li",[t._v("先有一个 ECStack 空间，然后这个空间中有 EC(G)和别的局部执行上下文。")]),t._v(" "),a("li",[t._v("在 EC(G)中有一个 VO(G)，所有的变量存在这里面。")]),t._v(" "),a("li",[t._v("值会存入 ECStack 的内存空间中，存入时能获取到地址，VO(G)的变量会和值的地址建立联系。")]),t._v(" "),a("li",[t._v("随着代码在 EC(G)中执行，会通过 VO(G)的变量去寻址，就能找到变量对应的值，从而实现值运算及赋新值等操作。")])]),t._v(" "),a("p",[t._v("小说明：")]),t._v(" "),a("p",[t._v("基本数据类型时按值进行操作，同时它们是被放在栈区。栈内存和引用类型的堆内存都是计算机的内存，是不同的设计思想体现，对于 V8 来说，其实都是放在 C++里自由存储区域中。")]),t._v(" "),a("p",[t._v("通过栈内存和堆内存可以更好的理解数据的存放，这种设计思想也比较的通用。"),a("br"),t._v("\n栈空间用于存储基本数据类型的值，不用了就直接出栈被销毁。"),a("br"),t._v("\n堆空间用于存储复杂类型的对象值，不用了就会被 GC 给回收。")]),t._v(" "),a("p",[t._v("对于 VO(G)来说，它内部的变量是和基本数据类型的值的地址进行联系，只存在一次寻址。"),a("br"),t._v("\n而对于复杂类型，VO(G)内部的变量是和复杂数据类型的地址的地址进行联系，所以会存在多次寻找。")]),t._v(" "),a("p",[t._v("小案例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .运算符优先级高，y的值被判定是一个引用类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以y也会是一个地址，转换过来就是这样了，obj1.y = (obj1 = { x: 456 })")]),t._v("\nobj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { x: 456 }")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { x: 123, y: { x: 456 } }")]),t._v("\n")])])]),a("h3",{attrs:{id:"函数与闭包的堆栈操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数与闭包的堆栈操作"}},[t._v("#")]),t._v(" 函数与闭包的堆栈操作")]),t._v(" "),a("p",[t._v("创建函数与创建变量类似，都会在VO(G)中保存一个变量。"),a("br"),t._v("\n函数会单独开辟一个堆内存的空间，用于存放函数体的字符串形式的代码，所以和引用类型一样，会有一个16进制的地址。"),a("br"),t._v("\n在创建函数的时候，函数的作用域"),a("code",[t._v("[[scope]]")]),t._v("是已经确定的，也就是创建该函数时所在的这个执行上下文中。"),a("br"),t._v("\n这里和上述的复杂类型关联的原理一样，该函数变量名是和该函数对应的函数体的地址的地址进行联系，同样存在多次寻找地址的操作，因为函数也是一个对象。")]),t._v(" "),a("p",[t._v("函数内部的执行上下文是私有的：")]),t._v(" "),a("ol",[a("li",[t._v("函数在执行过程中，会先确定作用域链，当前执行上下文->...->全局执行上下文，也就是确定每一级的作用域对象。")]),t._v(" "),a("li",[t._v("确定this和arguments对象。")]),t._v(" "),a("li",[t._v("形参赋值和变量提升，这些变量声明都会放到AO中。")]),t._v(" "),a("li",[t._v("按照顺序执行代码。")])]),t._v(" "),a("p",[t._v("函数形成闭包的原理："),a("br"),t._v("\n当前私有上下文中的"),a("code",[t._v("变量A")]),t._v("被当前私有上下文之外的"),a("code",[t._v("变量B")]),t._v("所引用，那么在之外"),a("code",[t._v("变量B")]),t._v("没有手动或者自动销毁之前，就会形成一个针对那个私有上下文中"),a("code",[t._v("变量A")]),t._v("相关的一个闭包，那个"),a("code",[t._v("变量A")]),t._v("将会一直存在在内存中。内存中的变量数据很长时间不使用，同时也不会被释放，那么就会造成浪费，就会内存泄漏问题。"),a("br"),t._v("\n同时闭包也是一种通过私有上下文来保护某些变量数据的机制，在私有上下文中返回一个函数变量，在该函数变量中对私有上下文或者全局上下文中进行变量数据的操作，从而限制对变量本身进行直接的操作，间接的保护了原始数据。")]),t._v(" "),a("p",[t._v("如果私有的上下文使用的是全局的变量，那么它永远不会自动回收，如果私有的上下文使用的是局部的变量，那么它可能会在私有函数执行完毕后，被GC自动回收掉。所以如果你想GC能够主动回收，那么就把要回收的变量设置为null。")]),t._v(" "),a("p",[t._v("小案例：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" btns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    btns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("结果永远是3，var声明的变量是在VO(G)中，事件绑定的函数的执行上下文是私有的，js中的for不会生成一个EC。"),a("br"),t._v("\n只有函数才会形成一个EC，所以js中的for还是使用的EC(G)，于是事件绑定的函数的执行上下文只有两个作用域对象，分别是EC(btns[i].click) 和 EC(G)。"),a("br"),t._v("\nAO(btns[i].click)里没有声明变量i，那么就会去VO(G)中找，那么for循环结束后，VO(G)中的i是3。")]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("ol",[a("li",[t._v("使用闭包，将for循环中每次的变量i转换为某个自调用的函数的形参，然后这个自调用的函数内部再返回一个新的函数，最后在这个新的函数中使用变量i。或者直接使用let 关键字，快速形成一个私有执行上下文。")]),t._v(" "),a("li",[t._v("添加全局属性，给每个button添加一个属性，然后在执行上下文中确定好this对象为当前button对象时，去使用该button对象这个属性的值。")]),t._v(" "),a("li",[t._v("事件委托+添加全局属性，其实也是添加全局属性的方式，手动的给每个button添加一个属性，同时在父级标签上绑定事件，通过在事件冒泡的时候获取对应的事件源(button对象)的该属性。"),a("strong",[t._v("好处是减少对多个button绑定事件函数时的内存开销，减少了对数据访问的深度和预访问多个button的内存开销")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h3",{attrs:{id:"jsbench-性能测量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsbench-性能测量"}},[t._v("#")]),t._v(" JSBench 性能测量")]),t._v(" "),a("p",[t._v("https://jsbench.me/"),a("br"),t._v("\nhttp://latentflip.com/loupe/")]),t._v(" "),a("p",[t._v("空间换时间或者时间换空间")])])}),[],!1,null,null,null);a.default=r.exports}}]);