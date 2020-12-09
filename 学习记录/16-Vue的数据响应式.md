## VUE  的数据响应式

1. 官方描述

   > 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 `data` 选项，Vue 将遍历此对象所有的 property，并使用 [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 把这些 property 全部转为 [getter/setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters)。`Object.defineProperty` 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。
   >
   > shim ： 将新的API引入旧环境
   >
   > 这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。

2. 我的分析

   > 从官方文档的描述可以知道，数据响应式的实现离不开[getter/setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#定义_getters_与_setters),  和[`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 我们先从这里入手。

3. getter/setter  and   Object.defineProperty() 

   ```javascript
   let data = {
       name : "jack",
       age: 18,
       get dataObj() {
           console.log(`${this.name} ${this.age}`)
       },
       set dataObj(x) {
           this.name = x[0]
           this.age = x.substring(1)
       }
   }
   get/set 就是对某个属性值的获取和设定，而非其本身。getter方法必须是无参数的，setter方法只接受一个参数(设置为新值）
   只能添加一个参数，感觉还不如构造函数，但是构造函数是针对创建对象的, Object.defineProperty() 方法会直接在一个对象
   上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。所以2者结合功能是针对元素值读写的监控。
   let data = {
       arrs: ['dream','and']
   }
   
   let vm = proxy({mydata: data});
   
   function proxy({mydata}){
       let arrs = mydata.arrs;
   
       // // 监听外部数据属性，防止data直接操作元素，跳过代理
       Object.defineProperty(mydata, 'arrs' ,{
           get() {
               return arrs;
           },
           set(params) {
               if(params != 'love') return
               arrs.push(params)
           }
       })
   
       let obj = {}
       // 代理外部对象
       Object.defineProperty(obj,'arrs',{
           get() {
               return mydata.arrs;
           },
           set(params) {
               if(params != 'love') return
               mydata.arrs.push(params)
           }
       })
       return obj;
   }
   按照统一规范操作属性值：
   vm.arrs  ["dream", "and"]
   
   data.arrs = '1'
   data.arrs  ["dream", "and"]
   
   vm.arrs = 'love'
   vm.arrs ["dream", "and", "love"]
   
   data.arrs = 'love'
   vm.arrs  ["dream", "and", "love", "love"]
   ```

4.  Vue 数据响应式

   > let vm = new Vue({mydata: data})
   >
   > 通过代理，vue会对所有属性值的变动进行监控，在 property 被访问和修改时通知变更，Vue 在更新 DOM 时是**异步**执行的。
   >
   > 这个之后研究明白再写文章。

5.  注意事项

   > Vue 不能检测数组和对象的变化
   > 初始化实例前声明所有根级响应式 property，哪怕只是一个空值
   >
   > Vue对象新增key
   > Vue.set(vm.someObject, 'b', 2)
   > this.$set(this.someObject,'b',2)
   >
   > Vue数组监听不到，原因js数组采用键值对的形式
   > [Vue改造array的7个方法](https://cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E6%9B%B4%E6%96%B9%E6%B3%95)
   >
   > Ps  最好的解决办法是按照规定写代码

   
