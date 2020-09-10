## dom事件与委托

> 事件是javascript和HTML交互基础, 任何文档或者浏览器窗口发生的交互, 都要通过绑定事件进行交互;比如鼠标点击事件、敲击键盘事件等。这样的事件行为都是前端DOM事件的组成部分，不同的DOM事件会有不同的触发条件和触发效果。

1. dom级别与dom事件

   ```javascript
   DOM级别一共可以分为四个级别：DOM0级、DOM1级、DOM2级和DOM3级。而DOM事件分为3个级别：DOM0级事件处理，DOM2级事件处理和DOM3级事件处理。1级DOM标准并没有定义事件相关的内容，所以没有所谓的1级DOM事件模型。
   
   dom0级别:
         <button type="button" onclick="showFn()"></button>
         function showFn() {
             alert('Hello World');
         }
   缺点:HTML和JS耦合太强,并且处理程序无法同时绑定多个处理函数
   
   dom2级别:
       <button id="btn" type="button"></button>
       var btn = document.getElementById('btn');    
       function showFn() {
           alert('Hello World');
       }    
       btn.addEventListener('click', showFn, false);
       btn.addEventlistener('mouseover',showfn,false)
       // btn.removeEventListener('click', showFn, false); 解绑事件 
   允许给一个程序添加多个处理函数。
   
   DOM3级事件是在DOM2级事件的基础上添加很多事件类型。
   UI事件，当用户与页面上的元素交互时触发，如：load、scroll
   焦点事件，当元素获得或失去焦点时触发，如：blur、focus
   鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
   滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
   文本事件，当在文档中输入文本时触发，如：textInput
   键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
   合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
   变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified
   同时DOM3级事件也允许使用者自定义一些事件。
   
    <button id='button1'>点击</button>
   // 点击触发frank事件
   button1.addEventListener('click', ()=>{
     const event = new CustomEvent("frank", {"detail":{name:'frank', age: 18}})
     button1.dispatchEvent(event)
   })
   // 监听frank事件内容
   button1.addEventListener('frank', (e)=>{
     console.log('frank')
     console.log(e)
   })
   ```

   

2. 事件捕获与冒泡

   ```javascript
   DOM事件模型分为捕获和冒泡.
   一个事件触发后,会在父子元素之间传播(propagation)
   （1）捕获阶段：事件从window对象自上而下向目标节点传播的阶段；
   （2）目标阶段：真正的目标节点正在处理事件的阶段；
   （3）冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。
   开发者可以通过API指定函数被调用的顺序
   捕获阶段: addEventListener('事件类型',fn,true)
   捕获阶段: addEventListener('事件类型',fn) 第三个参数默认false
   特殊情况只有一个div被监听,用户点击元素就是被开发者监听的,这种情况下不按照先捕获后冒泡的顺序,
   而是谁先监听,谁执行.
   ```

   

3. 事件委托

   ```javascript
   将监听函数定义在父节点上, 由父节点在冒泡阶段统一执行(一个或者多个)子元素事件,起到节省内存的效果.
   适用于场景: 1> 1对多,触发后根据事件源，我们可以知道点击的是谁，从而完成不同的事。
              2> 当我们对子元素CRUD的时候, 减少事件绑定.解绑的操作.
   event.currentTarget始终是监听事件者，而event.target是事件的真正触发者
   ```

   ```html
   For example: 
   <ul id="list">
       <li id = 'a'>item 1</li>
       <li id = 'b'>item 2</li>
       <li id = 'c'>item 3</li>
       <li id = 'd'>item d</li>
       <li id = 'n'>item n</li>
   </ul>
   const list = document.querySelector('#list');
   list.addEventListener('click', (e)=>{
        console.log(e.target.textContent);
   console.log(
         'target:' + e.target.id + '***currentTarget:' + e.currentTarget.id
       )
   })
   ```

   

4. 终止事件冒泡

   ```javascript
   捕获不可取消,但是冒泡可以取消.一般用于封装独立事件.
   event.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。
   
   有些事件不可取消冒泡. scroll
   Bubbles 表示是否支持冒泡;
   Cancelable 表示是否支持开发者取消冒泡;
   
   针对无法取消冒泡的情况,可考虑取消其他元素默认事件+CSS干预
   event.preventDefault() 取消其他元素默认事件
   ```

   