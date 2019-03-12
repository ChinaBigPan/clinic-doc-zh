(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{176:function(t,e,i){"use strict";i.r(e);var n=i(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("本节会提供一些有关 Clinic Flame 高级功能的参考信息。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("Clinic Flame 默认隐藏各种初始化函数。过滤掉这些函数通常会减少冗余的初始化噪声。")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("过滤的函数包括：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("勾选选项菜单中的 "),i("router-link",{attrs:{to:"./controls.html#高级"}},[t._v('"Advanced" 选项')]),t._v("可以显示这些函数。")],1),t._v(" "),t._m(11),t._v(" "),i("p",[t._v('如图所示，初始化函数块与所有其他块显示得一样，并根据 "Visibility by code area" 中选择的选项显示或隐藏。唯一的区别是，当在'),i("router-link",{attrs:{to:"./controls.html#信息面板"}},[t._v("信息面板")]),t._v('中显示时，右侧的上下文部分是 "In initialization process" 。')],1),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("V8 可能对一些频繁运行的代码做自动优化，从而创建这些函数的优化版本。在内部 JavaScript 引擎中，优化和未优化的函数是独立的实体。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("默认情况下，Clinic Flame 合并所有优化和未优化的函数，并将它们表示为单个块。Clinic Flame 还会将所有可内联函数合并到调用函数中，也就是稍后会内联到的函数中。这样做能够生成只关注代码逻辑的简单火焰图")]),t._v(" "),t._m(16),t._v(" "),i("p",[t._v("在选项菜单中的 "),i("router-link",{attrs:{to:"./controls.html#高级"}},[t._v('"Advanced"')]),t._v(' 中取消 "Merge" 选项，可以分离优化和未优化的函数，将它们显示为单独的块和单独的堆栈。')],1),t._v(" "),t._m(17),t._v(" "),i("p",[t._v("下面是我们为"),i("router-link",{attrs:{to:"./optimizing_a_hot_function.html#测试优化后的函数"}},[t._v("优化热函数")]),t._v("生成的未合并的火焰图。注意 "),i("code",[t._v("app.get")]),t._v("（以及其他块）分成了两个堆栈。一个是未优化的函数，另一个是优化后的版本。")],1),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),i("p",[t._v('"Merge" 没有被选中时，还有另一种方法可以查看哪些函数块是优化的或未优化的。当 "Merge" 未被选中时，另一个选项 "Show optimization status" 会变为可选。如果选中此项，则会更改函数块的文本和边框颜色以及火焰图右下方的选项，以显示：')]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),i("p",[t._v('"Merge" 选项未勾选时，可以通过在搜索框中输入 "inlinable" 来搜索内联函数。')]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),i("p",[t._v("例如，在上面的火焰图（"),i("router-link",{attrs:{to:"./optimizing_a_hot_function.html#测试优化后的函数"}},[t._v("优化热函数")]),t._v("时生成的火焰图）中，我们可以更清楚地看到 "),i("code",[t._v("app.get")]),t._v(" 分为优化和未优化两部分，并且在优化的部分，"),i("code",[t._v("payload")]),t._v('（已选中）被标记为 "Inlinable"（可内联）。')],1),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),i("p",[t._v('除了显示 Node.js 框架中的函数之外，还可以通过勾选选项菜单 "Visibility by code area" 部分中的 "V8" 复选框，将 Clinic Flame 设置为显示 V8 JavaScript 引擎中的函数。')]),t._v(" "),t._m(37),t._v(" "),i("p",[t._v("这通常会增加火焰图的复杂性，其中大部分可能不需要。因此，Flame 允许用户扩展 V8 选项然后过滤特定类型的 V8 函数：")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),i("p",[t._v("编译到 V8 中的原生 JavaScript 函数。")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),i("p",[t._v("由 V8 底层调用的 C++ 函数块，但不包括可在 Node、Libuv 或第三方模块中调用的 C++ 函数。")]),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),i("p",[t._v('RegExp 代表正则表达式，正则表达式也会被捕获为函数块。在这种情况下，正则表达式会填充函数块标签的 "function name" 部分。这可用于识别慢正则表达式（特别是'),i("a",{attrs:{href:"https://perlgeek.de/blog-en.cgi/perl-tips/in-search-of-an-exponetial-regexp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("指数复杂度的正则表达式"),i("OutboundLink")],1),t._v("）。")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"高级控件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级控件","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级控件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This section provides further reference information on some of Clinic Flame's advanced features.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Clinic Flame by default hides various initializaton functions. Filtering out these frames reduces generally redundant initialization noise.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("They include:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在加载依赖树时经常重复调用的内部模块系统函数（比如 "),e("code",[this._v("require")]),this._v("）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Internal module system functions which are repeated frequently as the dependency tree is loaded (such as require())")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("与 Clinic Flame 自己的数据捕获相关的函数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Functions relating to Clinic Flame's own data capture")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("其它初始化函数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Other initialization functions")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('An option in the "Advanced" section of the Options Menu allows these to be shown.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('When shown, Init blocks are presented like all other blocks, and will be shown or hidden according to the options selected in "Visibility by code area". The only differences is that when shown in the Info Panel, the context section on the right states "In initialization process".')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"合并和取消合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并和取消合并","aria-hidden":"true"}},[this._v("#")]),this._v(" 合并和取消合并")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("V8 may apply automatic optimizations to some frequently-run code, creating optimized versions of those functions. At an internal JavaScript engine level, optimized and unoptimized functions are separate entities.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"优化和未优化的代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化和未优化的代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 优化和未优化的代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("By default, Clinic Flame merges all Optimized and Unoptimized functions, and represents them as single blocks. It also merges all inlinable functions in to the calling functions that they are later inlined into. This creates a simplified graph where stacks only diverge based code logic.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('Unticking "Merge" in the "Advanced" section of the Options Menu separates Optimized and Unoptimized functions, showing them as seperate blocks and seperate stacks.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This is the unmerged view of the flamegraph we created for Optimizing A Hot Function. Note how app.get (among others) forks into two stacks. One is the original unoptimized function, the other is the optimized version.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/733c5355fcfddb79cdf8bcf1cfb6dd80/65be2/09-A.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"./controls#%E4%BF%A1%E6%81%AF%E9%9D%A2%E6%9D%BF"}},[this._v("信息面板")]),this._v('会在右侧的上下文部分中突出显示函数块的优化状态。对于所有 JavaScript 函数块，都会显示 "Unoptimized"（优化） 或 "Optimized"（未优化）。如果函数块被V8 内联，还会显示 "Inlinable"（可内联）。')])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('The Info Panel shows the highlighted block\'s optimization status, in the context section on the right. For all JavaScript blocks, this will say either "Unoptimized" or "Optimized". If the block is inlined by V8, it will also say "Inlinable".')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/7606095a95eb1e8cbc323c28d06d8224/0b628/09-B.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"显示优化状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示优化状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 显示优化状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('With "Merge" unticked, there is another way to see which blocks are Optimized or Unoptimized. Another option, "Show optimization status", becomes available when "Merge" is unticked. If this is ticked, the text and outline colours of blocks are changed, along with the key at the bottom right of the flamegraph, to show:')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("白色的未优化的函数块")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Unoptimized blocks in white")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("灰色的优化后的函数块")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Optimized blocks in grey")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("与优化无关的块，因为它们没有用蓝色表示（译者注：非 JavaScript 代码 ）JavaScript")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Blocks where optimization is not relevant because they don't represent JavaScript in blue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('Inlinable functions can be found by typing "inlinable" into the search box while "Merge" is unticked.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://clinicjs.org/static/775047b810f4faaa69c0987ca20a9859/65be2/09-C.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('For example, in the above flamegraph (the one we generated while Optimizing A Hot Function), we can see more easily that app.get forks into an optimized and unoptimized branch, and in the optimized branch, payload (selected) is flagged as "Inlinable".')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这就是为什么当我们在默认的合并视图中查看该火焰图时，它就不存在了。因为它被内联到了其父函数中，即优化后的 "),e("code",[this._v("app.get")]),this._v(" 中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This is why, when we looked at that flamegraph in the default merged view, it was absent. It was inlined into its parent function, the optimized version of app.get.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8","aria-hidden":"true"}},[this._v("#")]),this._v(" V8")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('In addition to showing functions from the Node.js framework, Clinic Flame can be set to show functions from within the V8 JavaScript engine, by ticking the "V8" checkbox in the "Visibility by code area" section of the Options Menu.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This often adds a significant amount of complexity to the flamegraph, much of which may not be wanted. Flame therefore allows users to expand the V8 options and filter specific types of V8 function:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"v8-原生函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-原生函数","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 原生函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("These are native JavaScript functions that are compiled into V8.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("包括任何原生原型方法（例如 "),e("code",[this._v("Array.prototype.join")]),this._v(" ），以及任何未公开但由V8内部使用的函数（例如 "),e("code",[this._v("InnerArrayJoin")]),this._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("This would include any native prototype methods (Array.prototype.join for instance), and any functions that aren't publicly exposed but are used internally by V8 (InnerArrayJoin for instance).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("此外，动态函数（使用 "),e("code",[this._v("eval")]),this._v(" 运行的代码或使用 "),e("code",[this._v("Function")]),this._v(" 创建的代码）也会显示为原生块，文件路径显示为 "),e("code",[this._v("[eval]")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("In addition, evaluated functions (either code run with eval or created with Function) will also appear as native frames, with the file path shown as [eval].")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"v8-运行时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-运行时","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 运行时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("与 V8 实现的 JavaScript 的运行时操作有关的 C++ 函数块。比如（取决于V8版本）"),e("code",[this._v("StringEqual")]),this._v(" 和 "),e("code",[this._v("ObjectSetPrototypeOf")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("These are C++ frames pertaining to the runtime operations of V8's implementation of JavaScript. Examples include (depending on V8 version) StringEqual and ObjectSetPrototypeOf.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("这些函数块的标签包括： "),i("code",[t._v("[CODE:LoadGlobalIC]")]),t._v(", "),i("code",[t._v("[CODE:Handler]")]),t._v(", "),i("code",[t._v("[CODE:CallIC]")]),t._v(", "),i("code",[t._v("[CODE:LoadIC]")]),t._v(", "),i("code",[t._v("[CODE:StoreIC]")]),t._v(", "),i("code",[t._v("[CODE:Builtin]")]),t._v(" , "),i("code",[t._v("[CODE:BytecodeHandler]")]),t._v(", "),i("code",[t._v("[CODE:Builtin]")]),t._v(" , "),i("code",[t._v("[CODE:Stub]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Tags can include [CODE:LoadGlobalIC], [CODE:Handler], [CODE:CallIC], [CODE:LoadIC], [CODE:StoreIC], [CODE:Builtin] , [CODE:BytecodeHandler], [CODE:Builtin] , [CODE:Stub].")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"v8-c"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-c","aria-hidden":"true"}},[this._v("#")]),this._v(" V8 C++")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("These are C++ frames that are called by the V8 layer, not including C++ frames that may be called in Node, Libuv or third party modules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这些函数块的标签可以包括 "),e("code",[this._v("[CPP]")]),this._v(" 和 "),e("code",[this._v("[SHARED_LIB]")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("These frames can include the tags "),e("code",[this._v("[CPP]")]),this._v(" and "),e("code",[this._v("[SHARED_LIB]")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"regexp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp","aria-hidden":"true"}},[this._v("#")]),this._v(" RegExp")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v('RegExp stands for Regular Expressions. These are also captured as "frames". In this case the regular expression notation fills in as the "function name" portion of the block label. This can be useful in identifying slow regular expressions (in particular exponential time regular expressions).')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这些函数块具有 "),e("code",[this._v("[CODE：RegEx]")]),this._v(" 标签。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("These will have the tag [CODE:RegExp].")])])}],!1,null,null,null);e.default=s.exports}}]);