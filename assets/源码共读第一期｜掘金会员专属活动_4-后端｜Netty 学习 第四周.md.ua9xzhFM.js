import{_ as e,c as a,o as t,X as p}from"./chunks/framework.a0KWhRid.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"源码共读第一期｜掘金会员专属活动/4-后端｜Netty 学习 第四周.md","filePath":"源码共读第一期｜掘金会员专属活动/4-后端｜Netty 学习 第四周.md","lastUpdated":1705884278000}'),r={name:"源码共读第一期｜掘金会员专属活动/4-后端｜Netty 学习 第四周.md"},c=p('<h3 id="本章任务提供" tabindex="-1">本章任务提供 <a class="header-anchor" href="#本章任务提供" aria-label="Permalink to &quot;本章任务提供&quot;">​</a></h3><p><a href="https://juejin.cn/user/430664257374270" title="https://juejin.cn/user/430664257374270" target="_blank" rel="noreferrer">挖坑的张师傅</a></p><h3 id="领读员说" tabindex="-1">领读员说 <a class="header-anchor" href="#领读员说" aria-label="Permalink to &quot;领读员说&quot;">​</a></h3><blockquote><p>大家好，我是张师傅。为了能帮助到更多对源码感兴趣、想学会看源码、提升自己后端技术能力的同学。组织了大家一起学习源码共读活动。</p><p>我对各个中间件源码非常感兴趣，过去一段时间阅读了 MySQL、JVM、Nginx、Netty、Spring、Linux 内核相关的源码，也写过很多关于根据源码来定位问题的文章，详见我的掘金博客 <a href="https://juejin.cn/user/430664257374270" title="https://juejin.cn/user/430664257374270" target="_blank" rel="noreferrer">juejin.cn/user/430664…</a></p><p>对于 Java 后端的同学，Netty 的源码是非常经典的学习资料，它不仅包含了丰富的网络编程相关的知识，还在代码中展示了很多 Java 编程的高级技巧，是我们深入学习网络编程、理解事件驱动、高性能编程不可多得的经典。</p></blockquote><h2 id="任务说明" tabindex="-1">任务说明 <a class="header-anchor" href="#任务说明" aria-label="Permalink to &quot;任务说明&quot;">​</a></h2><p>后端任务在整个源码学习的过程中出现，和前端分离的子任务不同，本篇包含了多个学习任务，除了以学习任务为核心产出的笔记以外，在阅读源码的时候产出的其他笔记也可参与本次活动。</p><h2 id="学习任务" tabindex="-1">学习任务 <a class="header-anchor" href="#学习任务" aria-label="Permalink to &quot;学习任务&quot;">​</a></h2><p>Netty Recycler 是 Netty 中的对象回收池，用于复用对象，减少内存分配和 GC 的次数。它通过使用双向链表维护对象池，在对象被回收时将其插入链表的头部，在对象需要被分配时从链表的头部取出。这样可以减少内存分配的次数，提高系统的效率。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b59100eb73914c4095f4b22211127c69~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><p>任务 1：用 Recycler 写一个 demo 实现自定义类 User 的对象复用</p><p>任务 2：阅读 Recycler 轻量级对象池的源码，画出 Recycler 的内部结构图</p><p>FastThreadLocal 是 Netty 中的快速线程局部变量工具，在高并发场景下表现优异。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fa252b8824b42418a10d29da149ad28~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><p>FastThreadLocal 是 Netty 重新设计的更快的 ThreadLocal，主要实现涉及：</p><ul><li>FastThreadLocalThread</li><li>FastThreadLocal</li><li>InternalThreadLocalMap</li></ul><p>阅读相关类的代码：</p><p>任务 3：分析 FastThreadLocal 的创建过程</p><p>任务 4：分析 FastThreadLocal 的 get、set 方法实现</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ef5758553c0e48b5822a1103f890abff~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e3630797bcf4f84ba6093c7e3bcc80b~tplv-k3u1fbpfcp-jj-mark:1512:0:0:0:q75.awebp" alt="image.png"></p><p>任务 5：分析 FastThreadLocal 为什么会比 Java 中的 ThreadLocal 性能更加优秀？</p><p>任务 6：分析 FastThreadLocal 在了 Netty 的哪些场景比较适用</p>',22),l=[c];function i(o,n,s,h,d,_){return t(),a("div",null,l)}const b=e(r,[["render",i]]);export{u as __pageData,b as default};
