## 浅析MVC

1. MVC这三个对象，M(model) 代表数据，V(view) 代表页面， C(controller) 逻辑处理

```javascript
const eventBus = $(window);
const m = {
    data : xxxx,
    get(params){},
    del(params){},
    update(params){},
    create(params){}
}
const v = {
    html : `<body>
			<header>{{x}}</header>
			 <div>{{content}}</div>
		   </body>`,
    init(params){},
    render(params){}
}
const c = {
    init(params){},
    events: {
    	"dom事件 触发元素" ： "funName"
	},
	funName(e){},
    autoBindEvents(){}
}
}
```

2. EventBus 有哪些 API，是做什么用的，给出伪代码示例

``` javascript
EventBus 作为事件总线，通过发布，订阅的模式来完成信息的传递，事件的触发。
主要API, on （监听事件）， trigger （触发事件）, off （取消监听）方法。
用于模块间的通讯， view 组件层面，父子组件、兄弟组件通信都可以使 eventbus 处理
// 组件通信，一个触发与监听的过程
class EventEmitter {
  constructor () {
    // 存储事件
    this.events = this.events || new Map()
  }
  // 监听事件
  addListener (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  // 触发事件
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}
 
// 测试
let emitter = new EventEmitter()
// 监听事件
emitter.addListener('ages', age => {
  console.log(age)
})
// 触发事件
emitter.emit('ages', 18)  // 18
```

3. 表驱动编程

```javascript
当为页面元素绑定事件的时候，dom事件类型，触发元素，绑定函数 这三项可以单独抽出
    events : {
        "click,#add1" : "add",
        "click,#subtract2" : "subtract",
        "click,#mulitply3" : "mulitply",
        "click,#divide4" : "divide"
    }
在绑定函数时，借助循环读取信息，进行绑定
	autoBindEvents(){
        for(let key in this.events){
            const value = c[c.events[key]];
            const index = key.indexOf(',');
            v.el.on(key.slice(0,index), key.slice(index + 1), value);
        }
    }
如此编程的好处在于：
1. 借助表结构，可以清晰找到事件的对应关系，提升可读性
2. 减少大量重复代码的编写,避免变量污染，命名冲突,代码复杂度可控
3. 将来添加事件绑定只需修改表结构，程序拓展性好。
```



我对MVC的理解

> 我对MVC的初步理解来自JSP, V 就是模板界面，C是服务端的servlet， M是界面的入参，接口的出参。这一套逻辑的核心思想是： 让代码嵌入HTML产生动态的页面。但是代码低内聚，高耦合的模式，注定这样的开发模式维护起来很麻烦，可读性很差。后来兴起前后端分离的潮流，MVC 有了新的含义，M 可以分为 DTO, AO ,DO ... 主要是系统服务直接的数据， V就是VO 纯粹为前端提供数据，格式规范商量着来，C指服务端的请求接口。比之前划分严格，弥补了之前的缺陷。但也造成部分前后端开发者沟通困难。
>
> 本文中的MVC其实是前端的异化版，V 指模板界面， M 模板界面所用数据，C 对界面的处理逻辑，不牵扯服务端，准确来说只能一种js 代码的设计模式。这样写代码的直接m,v,c先套上，根据需要自行删减，表驱动，事件总线，模块化，减少dom操作，都体现了抽象的思路。

