import{_ as e,c as a,o as t,X as n}from"./chunks/framework.a0KWhRid.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"源码共读第一期｜掘金会员专属活动/1-后端｜Netty 学习 第一周.md","filePath":"源码共读第一期｜掘金会员专属活动/1-后端｜Netty 学习 第一周.md","lastUpdated":1705884278000}'),i={name:"源码共读第一期｜掘金会员专属活动/1-后端｜Netty 学习 第一周.md"},o=n('<h3 id="本章任务提供" tabindex="-1">本章任务提供 <a class="header-anchor" href="#本章任务提供" aria-label="Permalink to &quot;本章任务提供&quot;">​</a></h3><p><a href="https://juejin.cn/user/430664257374270" title="https://juejin.cn/user/430664257374270" target="_blank" rel="noreferrer">挖坑的张师傅</a></p><h3 id="领读员说" tabindex="-1">领读员说 <a class="header-anchor" href="#领读员说" aria-label="Permalink to &quot;领读员说&quot;">​</a></h3><blockquote><p>大家好，我是张师傅。为了能帮助到更多对源码感兴趣、想学会看源码、提升自己后端技术能力的同学。组织了大家一起学习源码共读活动。</p><p>我对各个中间件源码非常感兴趣，过去一段时间阅读了 MySQL、JVM、Nginx、Netty、Spring、Linux 内核相关的源码，也写过很多关于根据源码来定位问题的文章，详见我的掘金博客 <a href="https://juejin.cn/user/430664257374270" title="https://juejin.cn/user/430664257374270" target="_blank" rel="noreferrer">juejin.cn/user/430664…</a></p><p>对于 Java 后端的同学，Netty 的源码是非常经典的学习资料，它不仅包含了丰富的网络编程相关的知识，还在代码中展示了很多 Java 编程的高级技巧，是我们深入学习网络编程、理解事件驱动、高性能编程不可多得的经典。</p></blockquote><h2 id="任务说明" tabindex="-1">任务说明 <a class="header-anchor" href="#任务说明" aria-label="Permalink to &quot;任务说明&quot;">​</a></h2><p>后端任务在整个源码学习的过程中出现，和前端分离的子任务不同，本篇包含了多个学习任务，除了以学习任务为核心产出的笔记以外，在阅读源码的时候产出的其他笔记也可参与本次活动。</p><h2 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h2><p>为了不增加额外的复杂度，这个项目采用最简单的 Netty echo server 来做演示。netty 启动以后监听 8888 端口，客户端使用 nc、telent 等可以直接进行连接，发送任意字符会回复任何字符。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddb331defa724df2b3fad3e60e558674~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><p>连接空闲 10s 以后会断开连接。</p><h2 id="克隆项目" tabindex="-1">克隆项目 <a class="header-anchor" href="#克隆项目" aria-label="Permalink to &quot;克隆项目&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash复制代码git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/arthur-zhang/netty-study.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 idea 导入项目，使用 debug 模式启动 <code>me.ya.study.netty.MyServer</code>，通过调试源码的方式来学习 netty 源码。</p><h2 id="源码学习" tabindex="-1">源码学习 <a class="header-anchor" href="#源码学习" aria-label="Permalink to &quot;源码学习&quot;">​</a></h2><h3 id="netty-服务端启动服务流程" tabindex="-1">Netty 服务端启动服务流程 <a class="header-anchor" href="#netty-服务端启动服务流程" aria-label="Permalink to &quot;Netty 服务端启动服务流程&quot;">​</a></h3><h4 id="学习任务一" tabindex="-1">学习任务一 <a class="header-anchor" href="#学习任务一" aria-label="Permalink to &quot;学习任务一&quot;">​</a></h4><blockquote><p>backlog 参数有什么作用，请仔细研究这个重要参数。</p></blockquote><p>在 <code>sun.nio.ch.ServerSocketChannelImpl#bind</code> 上打断点，看调用堆栈。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bc269ad577448f3a327dc5624389057~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><h4 id="学习任务二" tabindex="-1">学习任务二 <a class="header-anchor" href="#学习任务二" aria-label="Permalink to &quot;学习任务二&quot;">​</a></h4><blockquote><p>阅读 <code>ServerBootstrapAcceptor</code> 类，搞清楚这个类的职责</p></blockquote><p>阅读 <code>io.netty.bootstrap.ServerBootstrap#init</code> 查看 Netty 配置服务端启动流程</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d48f58dbff844a3898efb2a8aa4f1ec7~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><h3 id="学习任务三" tabindex="-1">学习任务三 <a class="header-anchor" href="#学习任务三" aria-label="Permalink to &quot;学习任务三&quot;">​</a></h3><blockquote><p>阻塞非阻塞、同步异步的最底层的区别是什么？这里为什么要设置为非阻塞</p></blockquote><p>在 `io.netty.channel.nio.AbstractNioChannel#AbstractNioChannel 构造函数上打断点，阅读构造函数的调用堆栈</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1307c19787354748a6d2f8841771f8c2~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><h4 id="学习任务四" tabindex="-1">学习任务四 <a class="header-anchor" href="#学习任务四" aria-label="Permalink to &quot;学习任务四&quot;">​</a></h4><blockquote><p>梳理 Netty 启动服务端的所有流程</p><p>在哪里创建 Channel</p><p>如何初始化 Channel、注册 handler</p><p>如何做端口 bind 触发 active 事件，注册 accept 事件，开始准备接收连接</p></blockquote><p>在 <code>io.netty.channel.nio.AbstractNioChannel#doBeginRead</code> 上打断点，查看 Netty 是如何注册 Accept 事件的。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/065b66259b524f5ca9c01e8080786f11~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><h3 id="netty-的连接创建是如何进行的" tabindex="-1">Netty 的连接创建是如何进行的 <a class="header-anchor" href="#netty-的连接创建是如何进行的" aria-label="Permalink to &quot;Netty 的连接创建是如何进行的&quot;">​</a></h3><h4 id="学习任务五" tabindex="-1">学习任务五 <a class="header-anchor" href="#学习任务五" aria-label="Permalink to &quot;学习任务五&quot;">​</a></h4><blockquote><p>任务：分析 <code>io.netty.channel.nio.NioEventLoop#run</code>做了哪些事情</p></blockquote><p>在 <code>io.netty.channel.nio.NioEventLoop#processSelectedKey(java.nio.channels.SelectionKey, io.netty.channel.nio.AbstractNioChannel)</code> 打断点，然后使用 nc 或者 telnet 连接上 Netty</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yaml复制代码nc localhost 8888</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1ec45c5bad942aaa3b808dadf21a3e1~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><p>阅读堆栈，溯源调用链路</p><h4 id="额外任务" tabindex="-1">额外任务 <a class="header-anchor" href="#额外任务" aria-label="Permalink to &quot;额外任务&quot;">​</a></h4><blockquote><ul><li>什么是 Reactor 模型</li><li>Netty 事件循环采用的是什么模式，与 Nginx、redis、muduo 等框架是一样的吗</li></ul></blockquote><h3 id="netty-读取、发送数据流程" tabindex="-1">Netty 读取、发送数据流程 <a class="header-anchor" href="#netty-读取、发送数据流程" aria-label="Permalink to &quot;Netty 读取、发送数据流程&quot;">​</a></h3><h4 id="学习任务六" tabindex="-1">学习任务六 <a class="header-anchor" href="#学习任务六" aria-label="Permalink to &quot;学习任务六&quot;">​</a></h4><blockquote><p>任务：分析 allocator 变量，学习 Netty 中所有的 Allocator</p><p>额外任务：Netty 在 linux 上采用的是边缘触发还是水平触发</p></blockquote><p>在 <code>io.netty.channel.nio.AbstractNioByteChannel.NioByteUnsafe#read</code> 上打断点，在 nc 中发送数据</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad94cac133f6470b8093d6158e8d2625~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt=""></p><h4 id="学习任务七" tabindex="-1">学习任务七 <a class="header-anchor" href="#学习任务七" aria-label="Permalink to &quot;学习任务七&quot;">​</a></h4><blockquote><p>分析 Netty 发送数据的全流程，画时序图</p></blockquote><p>在 <code>me.ya.study.netty.handler.MyEchoServerHandler#channelRead</code> 打断点，跟进 write 方法，同时在 <code>io.netty.channel.AbstractChannelHandlerContext#write(java.lang.Object, io.netty.channel.ChannelPromise)</code> 上打断点，分析 Netty 发送数据的全过程。</p><h2 id="额外任务-1" tabindex="-1">额外任务 <a class="header-anchor" href="#额外任务-1" aria-label="Permalink to &quot;额外任务&quot;">​</a></h2><h3 id="netty-idle-检测是如何实现的" tabindex="-1">Netty Idle 检测是如何实现的 <a class="header-anchor" href="#netty-idle-检测是如何实现的" aria-label="Permalink to &quot;Netty Idle 检测是如何实现的&quot;">​</a></h3><ul><li>什么是 tcp 的 keep-alive</li><li>有了 TCP 层面的 keep-alive 为什么还需要应用层 keepalive ?</li><li>Netty 的 Idle 检测是如何实现的，是用 HashedWheelTimer 时间轮吗？</li></ul>',51),l=[o];function r(c,p,s,h,d,b){return t(),a("div",null,l)}const m=e(i,[["render",r]]);export{k as __pageData,m as default};
