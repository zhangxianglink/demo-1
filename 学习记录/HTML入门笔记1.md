## HTML入门笔记1

i. HTML 历史

> HTML 是网页使用的语言，定义了网页的结构和内容。浏览器访问网站，其实就是从服务器下载 HTML 代码，然后渲染出网页。
>
> HTML 的全名是“超文本标记语言”（HyperText Markup Language），上个世纪90年代由欧洲核子研究中心的物理学家蒂姆·伯纳斯-李（Tim Berners-Lee）发明。它的最大特点就是支持超链接，点击链接就可以跳转到其他网页，从而构成了整个互联网。
>
> 1999年，HTML 4.01 版发布，成为广泛接受的 HTML 标准。2014年，HTML 5 发布，这是目前正在使用的版本.

ii: HTML 初始页面解释

> ``` html
> <!DOCTYPE html>  <!--声明文档类型-->
> <html lang="en">  <!--声明使用语言-->
> <head>
>     <meta charset="UTF-8"> <!--声明默认编码格式-->
>      <!--禁用缩放,兼容手机-->
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>我的html</title> <!--标题-->
> </head>
> <body>
> 
> </body>
> </html>
> ```
>
> 

iii: 常用的章节的标签

> ```html
> <article>文章</article>
> <header>头部</header>
> <h1>最大标题</h1>
> <h1>最小标题</h1>
> <main>主题内容</main>
> <div>
>     盒子模型,划分内容
> </div>
> <aside>分支内容</aside>
> <section>章节</section>
> <p>paregraph 段落</p>
> ```

iv: 全局属性（global attributes）

>```html
><p class= "first"></p>
><p class= "a b c"></p>
>不同元素class值相同,表示他们是同一类;
>一个元素多个class,使用空格进行分割;
>```
>
>```html
><p id= "uniqu"></p> 
>id 属性的值当前页面唯一,单个元素不存在多个id
><a href="#b">直达底部</a>
>id 值加上#, 可以当作锚点,定位该元素在网页内部位置(例如: 返回顶部,直达底部)
>```
>
>```html
><header id="advertisement" title="顶部广告顶部广告顶部广告顶部广告"
>        tabindex="1" > 顶部广告 </header>
>title 属于内容补充,鼠标悬停于元素时,title 会弹出内容.
>```
>
>```html
><header contenteditable="true"> 顶部广告,可以更改,刷新后恢复 </header>
>```
>
>```html
>tabindex属性的值是一个整数，表示用户按下 Tab 键的时候，网页焦点转移的顺序。
><footer id="b" tabindex="-1">&copy;版权声明</footer>
>正整数: 按asc顺序网页获取焦点
>0, 最后被tab遍历到.
>负整数: 不参与tab的遍历
>```
>
>```html
><p style="color: red;">hello</p>
>style 属于行内样式, 优先级 js > 行内 > css
>```
>
>```html
><p hidden>本句不会显示在页面上。</p>
>如果 CSS 设为该元素可见，hidden属性将无效。
>```

v: 常用的内容标签

>```html
>ol + li 有序列表 (ordered list + list item)
>ul + li 无序列表 (unordered list + list item)
>dl + dt + dd 描述列表(description list + term + data)
>pre  (preview 保留空格 tab)
>hr 分割一行
>br (break 换行)
>a (anchor 锚点, 文本链接,图片链接)
>em (emphasis 语气强调)
>strong (内容强调)
>code (代码展示)
>q (quote 引用内容)
>blockquote 块状引用
>```
>
>