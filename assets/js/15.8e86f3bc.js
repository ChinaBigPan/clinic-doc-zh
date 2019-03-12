(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{168:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("在"),s("router-link",{attrs:{to:"./reading_a_profile.html"}},[t._v("查看分析结果")]),t._v("中，我们看到 CPU Usage 图可以反应分配给其他进程的 Node.js I/O（输入/输出）操作问题，例如慢速数据库查询或 "),s("a",{attrs:{href:"https://libuv.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("libuv"),s("OutboundLink")],1),t._v(" 分发的文件写入。我们通过一个例子更详细地看一下。")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("node-clinic-doctor-examples")]),t._v(" 中有一个用于此问题的示例服务器，名为 "),s("code",[t._v("slow-io")]),t._v("。假设我们已经按照 "),s("router-link",{attrs:{to:"./getting_ready.html"}},[t._v("准备")]),t._v(" 和 "),s("router-link",{attrs:{to:"./first_analysis.html"}},[t._v("首次分析")]),t._v(" 中的描述配置好了所有内容，然后从该服务器生成一个Clinic Doctor 分析结果：")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("输出应该是这个样子：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("CPU Usage 图被红色突出显示。它显示了几个峰值，但大多数都很低。CPU 活动少于我们对繁忙服务器的期望。建议面板解释说，这很可能是由于异步操作缓慢造成的：我们的应用正在等待外部 I/O 来 resolve promise 或触发回调。")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("这与我们在"),s("router-link",{attrs:{to:"./fixing_an_event_loop_problem.html"}},[t._v("解决事件循环问题")]),t._v("时看到的问题非常不同。建议面板建议我们使用另一个 Clinic 工具，"),s("code",[t._v("clinic bubbleprof")]),t._v("。")],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("输出结果如下：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[s("code",[t._v("node-clinic-doctor-examples")]),t._v(" 使用非常简单的示例服务器，因此现在我们只需要查看主视图，而不是 "),s("router-link",{attrs:{to:"./../bubbleprof/preface.html"}},[t._v("Clinic Bubbleprof 文档")]),t._v("中详细介绍的高级功能。")],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("这可能就是我们的瓶颈。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),s("p",[t._v("这就是Node.js正在等待的 - 链式 timeout。")]),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("如果延迟操作是一个外部进程，如慢速数据库查询，在 Node.js 看到的现象也是相同的。我们无法看到外部操作中究竟发生了什么，但我们可以识别 Node.js 正在等待的异步操作。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),s("p",[t._v("保存，然后重新生成分析结果：")]),t._v(" "),t._m(31),t._v(" "),t._m(32),s("p",[t._v('现在的分析结果没有检测到任何问题。所有东西都是蓝色的，图表看起来很健康，CPU 处于活跃状态。Doctor 的建议面板告诉我们 "Everything looks good!"。')]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),s("p",[t._v("这是一个非常简单的示例服务器。在更复杂的应用程序中，我们通常需要进一步使用 Clinic Bubbleprof，以确定瓶颈的原因。"),s("router-link",{attrs:{to:"./../bubbleprof/preface.html"}},[t._v("Clinic Bubbleprof 文档")]),t._v("中提供了有关如何执行此操作的详细示例。")],1),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),s("p",[t._v("我们现在已经熟悉如何使用 Doctor 来识别问题的类型。下一步是学习更多关于这些工具的知识，我们可以使用它们来优化特定的代码。")]),t._v(" "),t._m(37),t._v(" "),s("p",[t._v("现在我们准备继续学习以下内容的练习文档：")]),t._v(" "),t._m(38),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../flame/preface.html"}},[t._v("Clinic Flame")]),t._v("，用于识别慢速同步代码")],1)]),t._v(" "),t._m(39),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../bubbleprof/preface.html"}},[t._v("Clinic Bubbleprof")]),t._v("， 用于在异步代码中查找问题")],1)]),t._v(" "),t._m(40)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"解决-i-o-问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-i-o-问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决 I/O 问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("In Reading A Profile, we saw that the CPU Usage graph can indicate problems with Node.js I/O (Input/Output) operations delegated to other processes, such as slow database queries or file writes delegated by libuv). Let's look at that in more detail with an example.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"咨询-doctor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#咨询-doctor","aria-hidden":"true"}},[this._v("#")]),this._v(" 咨询 Doctor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("There is an example server for this problem in node-clinic-doctor-examples, called slow-io. Assuming we have everything set up as described in Getting Ready and First Analysis, let's create a Clinic Doctor profile from that server:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("clinic doctor --on-port "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'autocannon localhost:"),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$PORT")]),this._v("'")]),this._v(" -- node slow-io\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The output should look something like this:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/62113e7db45b2c219f16984d858856ab/ace55/06-A.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The CPU Usage graph is highlighted in red. It shows several spikes, but is mostly low. There is less CPU activity than we'd expect from a busy server. The Recommendations Panel explains that this is likely caused by slow asynchronous operations: our application is waiting for external I/O to resolve promises or trigger callbacks.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This is a very different problem to the one we saw while Fixing an event loop problem. The Recommendations Panel advises that we use another Clinic tool, clinic bubbleprof.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"遵照处方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遵照处方","aria-hidden":"true"}},[this._v("#")]),this._v(" 遵照处方")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们可以使用与 Doctor 相同的命令创建 Flame 的分析结果，只是将 "),e("code",[this._v("doctor")]),this._v(" 替换为 "),e("code",[this._v("bubbleprof")]),this._v("：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("We can create a Bubbleprof profile with a command that is the same as for Doctor, but swapping bubbleprof in for doctor:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("clinic bubbleprof --on-port "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'autocannon localhost:"),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$PORT")]),this._v("'")]),this._v(" -- node slow-io\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Our output looks something like this:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/dc0157af64c0b7e67516f66208a7c5fc/ace55/06-B.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("node-clinic-doctor-examples uses very simple example servers, so for now we'll only need to look at the main diagram, not the more advanced features detailed in the Clinic Bubbleprof documentation walkthrough.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("主视图显示了一个忙碌的 "),s("code",[t._v("http.connection")]),t._v("，调用了一个 "),s("code",[t._v("timeout")]),t._v("，然后并行地调用了更多的 "),s("code",[t._v("timeout")]),t._v("。第一个 "),s("code",[t._v("timeout")]),t._v(" 看起来很关键 - 应用程序的其余部分从第一个 "),s("code",[t._v("timeout")]),t._v(" 中分支出来。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The main diagram shows a busy http.connection, calling a timeout, which then calls more timeouts in parrallel. That first timeout looks key - the rest of the application branches off from it.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("It could be our bottleneck.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("单击打开它会显示两个部分。通过单击较长的部分会为我们指出了一些代码：函数 "),e("code",[this._v("async.series")]),this._v("，我们应用中的文件 "),e("code",[this._v("./index.js")]),this._v("，第 9 行，第 16 列：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Clicking on it opens it out to show two parts. Clicking on the longer part points us to some code: a function async.series, in our application, file ./index.js, line 9, column 16:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/3cf7340f5ac008ac9f925ee992d1fd79/4e2b5/06-C.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果我们打开 "),e("code",[this._v("node-clinic-doctor-examples/slow-io/index.js")]),this._v(" 寻找那一行，我们会看到：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("If we open node-clinic-doctor-examples/slow-io/index.js and find that line, we see:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("series")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      done1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      done1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parallel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          done1\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    callback\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This is what Node.js is waiting on - chained timeouts.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("If the delay was an external process like a slow database query, the clues visible to us within Node.js would be the same. We can't see what exactly is happening within the external operation, but we can identify which asynchronous operation Node.js is waiting for.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"治愈疾病"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#治愈疾病","aria-hidden":"true"}},[this._v("#")]),this._v(" 治愈疾病")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("让我们减少 timeout 的时间，将传给 "),e("code",[this._v("setTimeout")]),this._v(" 的参数从 "),e("code",[this._v("1000")]),this._v(" 修改为 "),e("code",[this._v("1")]),this._v("，从而模拟显著地提升外部 I/O 速度。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Let's reduce the duration of the timeouts, changing the second argument passed to setTimeout from 1000 to 1. This simulates dramatically speeding up the external I/O:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awaitData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("series")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      done1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      done1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parallel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            done2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          done1\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    callback\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("We then save, and recreate the profile:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("clinic doctor --on-port "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'autocannon localhost:"),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$PORT")]),this._v("'")]),this._v(" -- node slow-io\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('The profile now detects no issues. Everything is blue, the graphs look healthy, the CPU is active, and Doctor\'s Recommendations Panel is cheerfully telling us that "Everything looks good!".')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/3f07f6fec2bad9ab6c4cef3b164cbd62/ace55/06-D.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This is a very simple example server. In a more complex application, we would normally need to explore the Clinic Bubbleprof profile deeper to hone in on the cause or causes of the bottleneck. Detailed examples of how to do this are available in the Clinic Bubbleprof documentation.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"接下来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接下来","aria-hidden":"true"}},[this._v("#")]),this._v(" 接下来")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("We're now familiar with how to use Doctor to identify the type of problem. The next step is learning more about those tools we can use to hone in on specific code.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("We're now ready to move on to the walkthrough documentation for:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Clinic Flame, for identifying slow synchronous code")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Clinic Bubbleprof, for finding problems in asynchronous code")])])}],!1,null,null,null);e.default=a.exports}}]);