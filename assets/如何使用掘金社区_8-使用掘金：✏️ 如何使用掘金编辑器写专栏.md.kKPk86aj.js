import{_ as s,c as i,a as e,X as a,o as n}from"./chunks/framework.a0KWhRid.js";const b=JSON.parse('{"title":"第一级标题 <h1>","description":"","frontmatter":{},"headers":[],"relativePath":"如何使用掘金社区/8-使用掘金：✏️ 如何使用掘金编辑器写专栏.md","filePath":"如何使用掘金社区/8-使用掘金：✏️ 如何使用掘金编辑器写专栏.md","lastUpdated":1705884278000}'),t={name:"如何使用掘金社区/8-使用掘金：✏️ 如何使用掘金编辑器写专栏.md"},l=a(`<h2 id="掘金-markdown-编辑器" tabindex="-1">掘金 Markdown 编辑器 <a class="header-anchor" href="#掘金-markdown-编辑器" aria-label="Permalink to &quot;掘金 Markdown 编辑器&quot;">​</a></h2><blockquote><p>我们建议掘友使用 Markdown 编辑器来写作文章</p></blockquote><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07c2f2d477de4a6ca634aaa8e1ea191c~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="掘金新版 Markdown 编辑器"></p><p>掘金 Markdown 编辑器整合了 Markdown 标准语法，可以看<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.markdownguide.org%2Fbasic-syntax%2F" title="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noreferrer">官方文档</a></p><h2 id="新的改变" tabindex="-1">新的改变 <a class="header-anchor" href="#新的改变" aria-label="Permalink to &quot;新的改变&quot;">​</a></h2><p>工欲善其事，必先利其器。</p><p>为了让掘友们更好的创作出优秀的内容，我们针对大家对编辑器的反馈和建议，我们对Markdown编辑器进行了全新改造，增加诸多功能拓展与语法支持，除了标准的Markdown编辑器功能，我们增加了如下几点新功能，期待您更好的创作。</p><ol><li><strong>全新的界面设计</strong> ，将会带来全新的写作体验；</li><li>全新的 <strong>KaTeX数学公式</strong> 语法；</li><li>新增 Markdown 主题样式和代码高亮， <strong>Markdown 主题和代码样式可以自己去选择高亮样式</strong>；</li><li>支持<strong>更多的mermaid图表<sup><a href="#user-content-fn-1" title="#user-content-fn-1">1</a></sup></strong>；</li><li>增加了 <strong>多屏幕编辑</strong> Markdown文章功能；</li><li>修复和增加了 <strong>写作模式、预览模式、左右区域同步滚轮设置</strong> 等功能；</li></ol><p>编辑器第一个版本主要是优化了一些历史体验问题和新增了一些大家常用功能，更多的功能支持还请期待后续版本的更新。</p><blockquote><p>编辑器目前已经开源，贡献地址：<a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbytedance%2Fbytemd" title="https://github.com/bytedance/bytemd" target="_blank" rel="noreferrer">github.com/bytedance/b…</a></p></blockquote><blockquote><p>掘金编辑器主题样式同样开源，贡献地址：<a href="https://juejin.cn/post/6893360456530919437" title="https://juejin.cn/post/6893360456530919437" target="_blank" rel="noreferrer">juejin.cn/post/689336…</a></p></blockquote><h2 id="功能快捷键" tabindex="-1">功能快捷键 <a class="header-anchor" href="#功能快捷键" aria-label="Permalink to &quot;功能快捷键&quot;">​</a></h2><blockquote><p>功能快捷键后续会迭代，暂时支持如下</p></blockquote><p><strong>粗体：</strong> Ctrl/ Command +B</p><p><strong>斜体：</strong> Ctrl/ Command +I</p><p><strong>链接：</strong> Ctrl/ Command + K</p><p><strong>图片：</strong> Ctrl/Command + Shift +I</p><p><strong>有序列表：</strong> Ctrl/Command+shift +O</p><p><strong>无序列表：</strong> Ctrl/Command+shift +U</p><p><strong>代码：</strong> Ctrl/Command + Shift +K</p><p><strong>代码块：</strong> Ctrl/Command + Shift + C</p><h2 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h2><p>Markdown 语法：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shell复制代码#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 第一级标题</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">1&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 第二级标题 \`&lt;h2&gt;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###### 第六级标题 \`&lt;h6&gt;\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>展示效果如下：</p><h1 id="第一级标题-h1" tabindex="-1">第一级标题 <code>&lt;h1&gt;</code> <a class="header-anchor" href="#第一级标题-h1" aria-label="Permalink to &quot;第一级标题 \`&lt;h1&gt;\`&quot;">​</a></h1><h2 id="第二级标题-h2" tabindex="-1">第二级标题 <code>&lt;h2&gt;</code> <a class="header-anchor" href="#第二级标题-h2" aria-label="Permalink to &quot;第二级标题 \`&lt;h2&gt;\`&quot;">​</a></h2><h3 id="第六级标题-h6" tabindex="-1">第六级标题 <code>&lt;h6&gt;</code> <a class="header-anchor" href="#第六级标题-h6" aria-label="Permalink to &quot;第六级标题 \`&lt;h6&gt;\`&quot;">​</a></h3><h2 id="文本样式" tabindex="-1">文本样式 <a class="header-anchor" href="#文本样式" aria-label="Permalink to &quot;文本样式&quot;">​</a></h2><p>Markdown 语法：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">markdown复制代码</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">**掘金编辑器上线了**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">*掘金编辑器上线了*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>掘金编辑器快捷键为：<code>CMD + B</code>、<code>CMD + I</code></p><p><strong>掘金编辑器上线了</strong></p><p><em>掘金编辑器上线了</em></p><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><h3 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h3><p>Markdown 语法快捷键为：<code>Ctrl/Command+shift +U</code></p><p><strong>效果如下：</strong></p><ul><li>项目一</li><li>项目二</li><li>项目三</li></ul><h3 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-label="Permalink to &quot;有序列表&quot;">​</a></h3><p>Markdown 语法快捷键为：<code>Ctrl/Command+shift +O</code></p><p><strong>效果如下：</strong></p><ol><li>项目一</li><li>项目二</li><li>项目三</li></ol><h3 id="任务列表-task-lists" tabindex="-1">任务列表（Task lists） <a class="header-anchor" href="#任务列表-task-lists" aria-label="Permalink to &quot;任务列表（Task lists）&quot;">​</a></h3><p><strong>Markdown 语法：</strong></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">css复制代码-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 任务一 未做任务 \`- </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 空格 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ]\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 任务二 已做任务 \`- </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 空格 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>效果如下：</strong></p><ul><li>[ ] 任务一 未做任务 <code>+ 空格 + [ ]</code></li><li>[x] 任务二 已做任务 <code>+ 空格 + [x]</code></li></ul><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>Markdown 语法：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash复制代码![掘金海盗图](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff0453d5664549ba8800f5cc1dc4d038~tplv-k3u1fbpfcp-watermark.image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Ctrl/Command + Shift +I</code> 可插入Markdown语法。除此之外，还可以用<strong>拖放图片</strong>、<code>CMD + V</code> 粘贴这两种方式来增加图片。效果如下：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/15e898b9dee54d869d6196899332fac7~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-label="Permalink to &quot;链接&quot;">​</a></h2><p>Markdown 语法：</p><div class="language-less vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">less复制代码[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">这里是掘金技术社区</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](https:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//juejin.cn/)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Ctrl/Command + K</code> 可插入Markdown语法。</p><p><a href="https://juejin.cn/" title="https://juejin.cn/" target="_blank" rel="noreferrer">这里是掘金技术社区</a></p><h2 id="行内代码" tabindex="-1">行内代码 <a class="header-anchor" href="#行内代码" aria-label="Permalink to &quot;行内代码&quot;">​</a></h2><p>Markdown 语法：</p><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go复制代码像这样即可：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`&lt;hello&gt;\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`world\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>Ctrl/Command + Shift +K</code> 可插入Markdown语法。效果如下：</p><p>像这样即可：<code>&lt;hello&gt;</code> <code>world</code></p><h2 id="多行或者一段代码" tabindex="-1">多行或者一段代码 <a class="header-anchor" href="#多行或者一段代码" aria-label="Permalink to &quot;多行或者一段代码&quot;">​</a></h2><p>Markdown 语法：</p><pre><code>ini复制代码
\`\`\`js
for (var i = 1; i &lt;= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
</code></pre><p><code>Ctrl/Command + Shift + C</code> 可插入Markdown语法。效果如下：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js复制代码for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (var i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="代码高亮" tabindex="-1">代码高亮 <a class="header-anchor" href="#代码高亮" aria-label="Permalink to &quot;代码高亮&quot;">​</a></h3><p>目前我们支持100多种代码高亮样式，可以使用 <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fhighlightjs%2Fhighlight.js" title="https://github.com/highlightjs/highlight.js" target="_blank" rel="noreferrer">highlight.js</a>中的所有样式：所有样式：</p><ul><li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fhighlightjs%2Fhighlight.js%2Ftree%2Fmaster%2Fsrc%2Fstyles" title="https://github.com/highlightjs/highlight.js/tree/master/src/styles" target="_blank" rel="noreferrer">样式列表</a></li><li><a href="https://link.juejin.cn?target=https%3A%2F%2Fhighlightjs.org%2Fstatic%2Fdemo%2F" title="https://highlightjs.org/static/demo/" target="_blank" rel="noreferrer">样式预览</a></li></ul><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><p>一个简单的表格是这么创建的：</p><table><thead><tr><th>项目</th><th>Value</th></tr></thead><tbody><tr><td>电脑</td><td>$100</td></tr><tr><td>手机</td><td>$10</td></tr><tr><td>鼠标</td><td>$1</td></tr></tbody></table><h3 id="设定内容居中、居左、居右" tabindex="-1">设定内容居中、居左、居右 <a class="header-anchor" href="#设定内容居中、居左、居右" aria-label="Permalink to &quot;设定内容居中、居左、居右&quot;">​</a></h3><p>使用<code>:---------:</code>居中</p><p>使用<code>:----------</code>居左</p><p>使用<code>----------:</code>居右</p><div class="language-ruby vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ruby</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ruby复制代码Markdown 语法:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`:---------:\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">居中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`:----------\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">居左</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`----------:\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">居右</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第一列       </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第二列         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第三列        </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">----------</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -------------</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:|:-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">------------|</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第一列文本居中 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第二列文本居右  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第三列文本居左 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table><thead><tr><th style="text-align:center;">第一列</th><th style="text-align:right;">第二列</th><th style="text-align:left;">第三列</th></tr></thead><tbody><tr><td style="text-align:center;">第一列文本居中</td><td style="text-align:right;">第二列文本居右</td><td style="text-align:left;">第三列文本居左</td></tr></tbody></table><h2 id="删除线" tabindex="-1">删除线 <a class="header-anchor" href="#删除线" aria-label="Permalink to &quot;删除线&quot;">​</a></h2><p>Markdown 语法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>复制代码加删除线像这样用： ~~删除这些~~</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果如下：</p><p>加删除线像这样用： <s>删除这些</s></p><h2 id="分隔线" tabindex="-1">分隔线 <a class="header-anchor" href="#分隔线" aria-label="Permalink to &quot;分隔线&quot;">​</a></h2><p>以下三种方式都可以生成分隔线：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">markdown复制代码***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">*****</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">- - -</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>效果如下：</p><hr><hr><hr><h2 id="katex数学公式" tabindex="-1">KaTeX数学公式 <a class="header-anchor" href="#katex数学公式" aria-label="Permalink to &quot;KaTeX数学公式&quot;">​</a></h2><p>您也可以访问 <a href="https://link.juejin.cn?target=https%3A%2F%2Fmath.meta.stackexchange.com%2Fquestions%2F5020%2Fmathjax-basic-tutorial-and-quick-reference" title="https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference" target="_blank" rel="noreferrer">MathJax</a> 参考更多使用方法。</p><p><strong>行内公式:</strong></p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ini复制代码$</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">E</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=mc^2$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>效果如下：</strong></p><p>这是一个行内公式<math><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation>E=mc^2</annotation></semantics></math>E=mc2您学废了吗？</p><p><strong>块级公式:</strong></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">css复制代码$$ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\df</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rac{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">qrt{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">^2 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ac</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}{2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>效果如下:</strong></p><math><semantics><mrow><mi>x</mi><mo>\\=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow><annotation>x = \\\\dfrac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}</annotation></semantics></math>`,102),p=a(`<blockquote><p>您可以找到更多关于的信息 <strong>LaTeX</strong> 数学表达式<a href="https://link.juejin.cn?target=http%3A%2F%2Fmeta.math.stackexchange.com%2Fquestions%2F5020%2Fmathjax-basic-tutorial-and-quick-reference" title="http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference" target="_blank" rel="noreferrer">地址</a> <sup><a href="#user-content-fn-2" title="#user-content-fn-2">2</a></sup></p></blockquote><h2 id="顺序图或流程图" tabindex="-1">顺序图或流程图 <a class="header-anchor" href="#顺序图或流程图" aria-label="Permalink to &quot;顺序图或流程图&quot;">​</a></h2><p>您可以使用Mermaid生成各类图表。更多语法可以参考 <a href="https://link.juejin.cn?target=https%3A%2F%2Fmermaidjs.github.io%2F" title="https://mermaidjs.github.io/" target="_blank" rel="noreferrer">Mermaid</a></p><h3 id="甘特图" tabindex="-1">甘特图 <a class="header-anchor" href="#甘特图" aria-label="Permalink to &quot;甘特图&quot;">​</a></h3><pre><code>less复制代码\`\`\`mermaid
gantt
title A Gantt Diagram
dateFormat  YYYY-MM-DD
section Section
A task           :a1, 2014-01-01, 30d
Another task     :after a1  , 20d
section Another
Task in sec      :2014-01-12  , 12d
another task      : 24d\`\`\`
</code></pre><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6128135fcf74c8a85a192c830292721~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h3><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go复制代码</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`mermaid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Start --&gt; Stop\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea89cb39079e44c3826aada0c55cc5b8~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="时序图" tabindex="-1">时序图 <a class="header-anchor" href="#时序图" aria-label="Permalink to &quot;时序图&quot;">​</a></h3><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go复制代码</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`mermaid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Alice-)John: See you later!\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41aeb6a174cd43c8947363f4c89d8e7e~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="类图" tabindex="-1">类图 <a class="header-anchor" href="#类图" aria-label="Permalink to &quot;类图&quot;">​</a></h3><pre><code>scss复制代码\`\`\`mermaid
classDiagram
Animal &lt;|-- Duck
Animal &lt;|-- Fish
Animal &lt;|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
-int sizeInFeet
-canEat()
}
class Zebra{
+bool is_wild
+run()
}\`\`\`
</code></pre><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d33ddeac24bb455fa353e518795c552f~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="状态图" tabindex="-1">状态图 <a class="header-anchor" href="#状态图" aria-label="Permalink to &quot;状态图&quot;">​</a></h3><pre><code>lua复制代码\`\`\`mermaid
stateDiagram-v2
[*] --&gt; Still
Still --&gt; [*]

Still --&gt; Moving
Moving --&gt; Still
Moving --&gt; Crash
Crash --&gt; [*]\`\`\`
</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a1f70989dda45be902e797c304164ac~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="饼状图" tabindex="-1">饼状图 <a class="header-anchor" href="#饼状图" aria-label="Permalink to &quot;饼状图&quot;">​</a></h3><pre><code>csharp复制代码\`\`\`mermaid
pie title Pets adopted by volunteers
&quot;Dogs&quot; : 386
&quot;Cats&quot; : 85
&quot;Rats&quot; : 15\`\`\`
</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67dbfe65a0c14ab0986fc7b550723865~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="关系图" tabindex="-1">关系图 <a class="header-anchor" href="#关系图" aria-label="Permalink to &quot;关系图&quot;">​</a></h3><pre><code>css复制代码\`\`\`mermaid
erDiagram
CUSTOMER ||--o{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\`\`\`
</code></pre><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e45140bab1df43d48d9c0b6fc8e002c3~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="旅程图" tabindex="-1">旅程图 <a class="header-anchor" href="#旅程图" aria-label="Permalink to &quot;旅程图&quot;">​</a></h3><pre><code>vbnet复制代码\`\`\`mermaid
journey
title My working day
section Go to work
Make tea: 5: Me
Go upstairs: 3: Me
Do work: 1: Me, Cat
section Go home
Go downstairs: 5: Me
Sit down: 5: Me\`\`\`
</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e541ab8dc35c4111aeac0d23b6dbe4db~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><h3 id="编辑器插入视频" tabindex="-1">编辑器插入视频 <a class="header-anchor" href="#编辑器插入视频" aria-label="Permalink to &quot;编辑器插入视频&quot;">​</a></h3><ul><li><p>打开需要要嵌入的视频，复制顶端地址栏或分享入口链接即可。 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0527342a05e442f9bd671562526670d9~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=2696&amp;h=1440&amp;s=155385&amp;e=png&amp;b=636464" alt="image.png"></p></li><li><p>图片：见下</p></li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8488922e9ba64e8881d47c86c0f65988~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp#?w=1530&amp;h=1698&amp;s=556080&amp;e=jpg&amp;b=f8f8f8" alt="img_v2_82bcaa9f-5ffd-445a-8f73-40b2114c9c5g.jpg"></p><h2 id="掘金富文本编辑器" tabindex="-1">掘金富文本编辑器 <a class="header-anchor" href="#掘金富文本编辑器" aria-label="Permalink to &quot;掘金富文本编辑器&quot;">​</a></h2><p>除了 Markdown 编辑器之外，我们了解到部分掘金用户是公司的 HR、产品经理或者其他岗位，因此我们也支持富文本功能。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b559af62107414d8d04c12b2c2ace36~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="切换编辑器"></p><blockquote><p>特别注意，在切换编辑器时，当前编辑器内内容可能丢失，请务必备份并看清提示语句</p></blockquote><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95a7cc3f76954890961eed7568887bfb~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="富文本编辑器"></p><h2 id="草稿" tabindex="-1">草稿 <a class="header-anchor" href="#草稿" aria-label="Permalink to &quot;草稿&quot;">​</a></h2><p>在掘金里写文章时，我们的编辑器会自动保存您的内容并且可以在<a href="https://juejin.cn/editor/drafts" title="https://juejin.cn/editor/drafts" target="_blank" rel="noreferrer">草稿</a>中找到：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66688b0f56bf43698563d104cf106d6a~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="草稿"></p><blockquote><p>特别注意的是，草稿一经发布无法再转为草稿。</p></blockquote><h2 id="footnotes" tabindex="-1">Footnotes <a class="header-anchor" href="#footnotes" aria-label="Permalink to &quot;Footnotes&quot;">​</a></h2><ol><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fmermaidjs.github.io%2F" title="https://mermaidjs.github.io/" target="_blank" rel="noreferrer">Mermaid语法说明</a><a href="#user-content-fnref-1" title="#user-content-fnref-1">↩</a></p></li><li><p><a href="https://link.juejin.cn?target=https%3A%2F%2Fmath.meta.stackexchange.com%2Fquestions%2F5020%2Fmathjax-basic-tutorial-and-quick-reference" title="https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference" target="_blank" rel="noreferrer">MathJax更多语法参考</a><a href="#user-content-fnref-2" title="#user-content-fnref-2">↩</a></p></li></ol>`,41);function r(h,o,d,k,c,g){return n(),i("div",null,[l,e("x=2a−b±b2−4ac​​"),p])}const u=s(t,[["render",r]]);export{b as __pageData,u as default};
