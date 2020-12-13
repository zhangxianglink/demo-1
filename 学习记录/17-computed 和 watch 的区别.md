## computed 和 watch 的区别

1. >computed 计算属性
   >
   >watch 侦听器
   >
   >

2.  computed

   ```javascript
       <div>
       {{user.email || user.name || user.phone}}
       <div>
   
   data() {
       return {
           user: {
               email: "zhangxianglink@163.com",
               name: "will",
               phone: 15670380215
           }
       }
     }
   表达式可以做到简单的声明式逻辑处理，但是如果模板多数需要同样处理，并且后续有改进需求，
   那么表达式就很难满足我们的需求。
     <div>
           {{show}}
       <div>
           {{show}}
       </div>
      <button @click="show = '10599@qq.com'">show set</button>
     </div>
   
   computed : {
       show: {
           get() {
               const user = this.user
               return  user.email || user.name || user.phone
           },
           set(value) {
               this.user.email = value
           }
       }
     }
   
   计算属性默认实现getter ,我们可以自定义setter， 这样逻辑变更时改动方便。
   
   说到逻辑的处理，我们也许可以写方法来满足需求，例如
   method : {
       show: function() {
           return user.email || user.name || user.phone
       }
   }
   结果是相同的， 但是计算数学的基于响应式依赖进行缓存，一旦user发生改变才会重新求值，但是函数每次调用都去执行。缓存是为了节省资源，减少getter次数。
   
   ```

3.  watch   [具体信息](https://cn.vuejs.org/v2/api/#watch)

   ```javascript
   当一些数据需要随着其它数据变动而变动可以使用watch，观察和响应 Vue 实例上的数据变动：侦听属性。watch的键是需要观察的表达式，值是对应的回掉函数，注意：不能用箭头函数去定义！
       data() {
           return {
           user：{
               name: 'jack',
               age: 18
           },
           displayName: ""
       }},
       watch: {
           'user.name': {
           	handler(val){
               	this.displayName = `this is ${val} , age ${this.age}`
               },
               // 第一次数据的变化默认是不监听的，false
               immediate: true
           }
       }
    watch 也可以去模仿computed的操作，但是不如computed来得灵活，当数据变化时执行异步或开销较大的操作时，这个方式是最有用的。上面监听的是简单属性，下面是对象
    data(){
           return {
               n: 1,
               obj: {
                   a: "a"
               }
           }
       },
       watch: {
           n() {
               console.log("n 变了");
           },
           obj: {
               handler() {
                   console.log("obj 变了, 里面简单属性元素变化也会监听到 ");
               },
               deep: true
           }，
           'obj.a': function(){
               console.log("obj.a变化了")
           }
       }
   默认监听简单数据类型是监听值的变化，而监听对象则是内存地址，所以当没有添加deep: true
   第二个obj是无法监听到obj.a 属性的变化, 简而言之参考===的规则。
    
   
   
   
   ```

>总结： 
>
> computed  是计算值 的变化，具有缓存性，响应依赖的值不发生变化，只会返回上次计算的值。
>
>watch 提供一个更通用的方法，来响应数据的变化，它执行的是方法。可以有异步的操作，无缓存性，一个更通用的方法，来响应数据的变化。
>
>deep: true 监听对象内部的变化
>
>immediate： true 侦听开始之后被立即调用

