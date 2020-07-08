## HTML常用标签

1. a标签  

   > ```html
   > <a href="https:www.google.com">google</a>
   > a标签是超链接标签,能够实现对链接地址的访问.
   > 标签有以下常用属性:
   > 1> href(Hyper reference) 超链接
   >     内容为 https://www.baidu.com 网址
   >            #side 作为锚点跳转页面元素 (side为某个元素的id);
   >            <a href="javascript:;"></a>
   >            伪协议1: 点击后不执行任何动作,禁止页面刷新
   >            <a href="javascript:console.log("点击后输出");"></a>
   >            伪协议2: 点击后执行脚本
   > 2>  target 目的地,用于指定如何展示打开的链接.
   >     这是一个枚举属性:
   >     <a href="https:www.google.com" target="_blank">google</a>
   >     _blank 新的空白窗口打开
   >     <a href="https:www.google.com" target="_self">google</a> 
   >     _self 当前窗口打开默认值
   >     <a href="https:www.google.com" target="_top">google</a> 
   >     _top 在顶层,也就是最外层窗口打开
   >     <a href="https:www.google.com" target="_parent">google</a> 
   >     _parent 上层窗口打开,当前窗口的上一层
   >     除了以上属性可以自定义属性:
   >     <a href="http://baidu.com" target="yyy">百度</a>
   >     <a href="http://google.com" target="yyy">google</a>
   >     打开新窗口访问window.name, 得到yyy
   >     如果yyy指向iframe标签name属性,将会在iframe中打开页面,iframe.name 得到yyy
   >     当点击百度后yyy窗口已经存在,那么点击google将会取代baidu.com,在yyy窗口访问  google.com
   >     注意事项: 使用target属性,最好使用rel="noreferrer",避免安全风险
   > 3> download 
   >     <a href="hello.txt" download>下载</a> 提供下载功能,当链接与网址同源生效.
   > 
   > ```
   >
   > 

2. img标签

   > ```html
   > <img src="xx.png">
   > img 标签的作用是插入图片, 被a标签包裹可以成为一个可以图片链接.
   > img标签有以下常用属性:
   > 1> alt, 文字说明. 图片不显示时,将会出现该属性内容.
   > 	<img src="xx.png" src="这是一张png">
   > 2> width, heigh 宽高属性. 
   > 	<img src="xx.png" width="200" heigh="200">
   > 	为保证图片不会变形,宽高属性选一个设置即可.
   > 3> src, 图片来源
   > img常用事件:
   > 1> onload 事件: 图片加载成功触发;
   > 2> onerror事件: 图片加载失败触发.
   > ```
   >
   > 

3. table标签的使用

   > ```html
   > 按照由外到内的顺序进行介绍
   > 1> table
   > 	2> thead
   > 	2> tbody
   > 	2> tfoot
   > 		3> tr (table row)	
   > 			4> th (table head)
   > 			4> td (table data)
   > <table> 块级容器元素,所有的表格内容都要放到这个标签里面.
   > <thead> <tbody> <tfoot> 块级容器元素,书写式保证先后顺序.
   > <tr> 表示表格中一行
   > <th> <td> 写在tr标签内部,分别表示标题单元格,数据单元格
   > 代码如下:
   >       <table>
   >       <thead>
   >         <tr>
   >           <th>成绩单</th>
   >           <th>语文</th>
   >           <th>数学</th>
   >           <th>英语</th>
   >         </tr>
   >       </thead>
   >       <tbody>
   >         <tr>
   >           <th>Leo Wang</th>
   >           <td>45</td>
   >           <td>95</td>
   >           <td>124</td>
   >         </tr>
   >         <tr>
   >           <th>Brown Li</th>
   >           <td>45</td>
   >           <td>95</td>
   >           <td>124</td>
   >         </tr>
   >         <tr>
   >           <th>Frank Yang</th>
   >           <td>45</td>
   >           <td>95</td>
   >           <td>124</td>
   >         </tr>
   >       </tbody>
   >       <tfoot>
   >         <th>总分</th>
   >         <td>250</td>
   >         <td>250</td>
   >         <td>250</td>
   >       </tfoot>
   >     </table>
   >   </body>
   > ```
   >
   
4. form标签 : 用于定义表单向服务器提交数据

   > ```html
   > 常用属性:
   > <form action="http://google.com" method="post" autocomplete="on" encrypt = "application/json">
   >     用户名: <input type="text" name="username" id=""><br>
   >     密码: <input type="password" name="password" id=""><br>
   >     <button type="submit"><strong>提交</strong></button>
   > </form>
   > 1> action 指向提交的服务器路径
   > 2> method 提交方式get/post
   > 3> encrypt 指定POST提交方式, 使用 浏览器的MIMI类型
   >    application/x-www-form-urlencoded  是默认类型,控件名和控件值都要转义.
   >    multipart/form-data  主要用于文件上传。
   >    application/json	作为请求头告诉服务端消息主体是序列化的JSON字符串.
   >    text/plain 空格转换为 “+” 加号，但不对特殊字符编码。
   > 4> autocomplete  默认为on，其含义代表是否让浏览器自动记录输入的值。使用方式(name ="username")
   > 事件: onsubmit 数据提交触发
   > 注意事项: form里面的input要有name, form里面要有一个type=submit才能触发onsubmit事件
   > ```
   >
   > 