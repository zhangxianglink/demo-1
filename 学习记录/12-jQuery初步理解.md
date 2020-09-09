## jQuery初步理解

1. 简化dom语法

   ```javascript
   1.使用$别名调用方法
   2.将复杂的dom语法操作放到jQuery方法内部实现
   ```

   

2. 链式操作元素

   ```javascript
   $('.color1') // 查找class为color1的元素,假设返回对象为A
       .find('.child') // 选择A元素下,class为child的元素,假设返回对象为B
       .addClass('second')// 为B对象中的元素class添加second
       .end() // 返回对象A
       .addClass('end');// 为B对象中的元素class添加end
   链式操作: jQuery将共用资源放入jQuery原型中(节省内存) 每一次操作结束构造一个jQuery对象返回,然后调用原型中的函数,操作链接在一起.就像流水线加工产品.
   ```

   

3. 优化查询元素

   ```javascript
   查询元素提供使用CSS选择器:
   $('#test') //选择id为test的元素
   $('.color1') // 选择class为color1的元素
   $('p:first-line') // 选择匹配p元素的第一行
   查询元素提供使用jQuery特有表达式:
   $("div:animated") //选择所有正在执行动画效果的元素.
   $(":button") // 选择所有按钮元素和类型为按钮的元素。
   $("td:empty") // 选择所有没有子元素的元素（包括文本节点）
   ```

   

4. 适配器处理参数

   ```javascript
   针对传入的不同数据,返回不同结果.
   1. $('h1').html();  //传入字符串,找到h1,取出h1的值
   2. $('<p>Hello</p>'); //传入element,创建元素并返回.
   ```

   

5. 提供工具方法: [工具类详细api](https://www.jquery123.com/category/utilities/)

   ```javascript
   不必选中元素，就可以直接使用这些方法。
   $.map( [0,1,2], function(n){
     return [ n, n + 1 ];
   }); //将一个数组对象经过回调函数中的条件得到一个新的数组，并返回该数组类似grep,若每一个数组的值都是数组，则会产生数组的合并
   ```

6. **取值和赋值元素的操作**

   ```javascript
   使用同一个函数，来完成取值（getter）和赋值（setter），即"取值器"与"赋值器"合一。到底是取值还是赋值，由函数的参数决定。
   $('h1').html(); //html()没有参数，表示取出h1的值
   $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
   ```

7. **移动元素**

   ```javascript
   提供两组方法，来操作元素在网页中的位置移动。一组方法是直接移动该元素，另一组方法是移动其他元素，使得目标元素达到我们想要的位置。
   $('div').insertAfter($('p')); //使用.insertAfter()，把div元素移动p元素后面
   $('p').after($('div')); //使用.after()，把p元素加到div元素前面：
   ```

8. **复制、删除和创建元素**

   ```javascript
   复制元素使用.clone() // 浅拷贝
   删除元素使用.remove()和.detach()。两者的区别在于，前者不保留被删除元素的事件，后者保留，有利于重新插入文档时使用。
   清空元素内容（但是不删除该元素）使用.empty()。
   $('<p>Hello</p>');  // 创建元素
   ```

   