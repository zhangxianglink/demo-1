##  JS 函数的执行时机

为什么如下代码会打印 6 个 6

```javascript
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
let 的作用域在for循环外, 当for循环执行完成后i值为6, 随后setTimeout函数执行6次,打印出6个6.
```

 打印0、1、2、3、4、5 的方法

```javascript
for(let i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}
如果是 for(let i = 0; i<6; i++) 那么每一次循环都会声明一个新的i值, 与之前的不同.
所以函数执行使用不同的i值
```

打印出 0、1、2、3、4、5 方法二

```javascript
for (var i=0; i< 6; i++) {
    !function(j) {
        setTimeout( ()=>{
            console.log( j );
        }, 0 );
    }(i);
}
采用立即执行函数,将i值传入进去, 当setTimeout输出j的时候, 是将循环传入的i值放进去
```

方法3 

```javascript
function fn(j){
console.log('-----------------------'+j)
    setTimeout(()=>{
        console.log(j)
     }, j*1000)
}
for (var i=0; i<6; i++) {
     fn.call(undefined,i)
}
拆分代码结构, 传入函数fn的参数每次都是不同的, 当其他程序执行完毕后,再按照时间的顺序 (第一秒,第二秒,...)
执行setTimeout里面的回调函数.
```



