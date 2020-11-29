## 浅析Vue的两个版本

1. >完整版 =  编译器 + 运行时版
   >
   ><script crossorigin="anonymous" integrity="sha512-YXLGLsQBiwHPHLCAA9npZWhADUsHECjkZ71D1uzT2Hpop82/eLnmFb6b0jo8pK4T0Au0g2FETrRJNblF/46ZzQ==" src="https://lib.baomitu.com/vue/2.6.12/vue.js"></script>
   >
   >非完整版 = 只包含运行时
   >
   ><script crossorigin="anonymous" integrity="sha512-MbDBUqdp/G2JUxGdahQfbrfMSHqCp5f+6BK9fKshXb43f44GWCkw5ilQXqi1rZ1h9V8NgOWQh8VW3BdxQDDLpg==" src="https://lib.baomitu.com/vue/2.6.12/vue.runtime.js"></script>

2. >完整版可以使用template 或者 render
   >
   >```javascript
   >new Vue({
   >  el: "#app",
   >  template: '<div>{{ hi }}</div>'
   >})
   >以上代码<template>会被编译器进行编译
   >```
   >
   >非完整版使用rende
   >
   >```javascript
   >new Vue({
   >  el : '#app',
   >  render(createElement) {
   >    return createElement('div',[this.n, 
   >      createElement('button',{on:{click:this.add}},'+1')])
   >  },
   >  data :{
   >    n: 0
   >  },
   >  methods :{
   >    add() {
   >      this.n +=1
   >    }
   >  }
   >})
   >无需编译器,vue会给render函数一个默认的h(createElement)。Render函数将createElement的返回值放到了HTML中。
   >new Vue({
   >  el : '#app',
   >  render(h) {
   >    return h(Demo);
   >  }
   >})  
   >无需编译器，vue-loader将vue文件中的HTML转化为h
   >```
   >
   >template ，render都是创建html模板，但是template用法简单，但不够灵活，只用简单的组件。
   >
   >render采用js编写的方式，无需编译，操作灵活适用于复杂组件的操作。
   >
   >生产环境多使用非完整版，因为没有编译器，减少用户下载压力

3. >首先在[codesandbox](https://codesandbox.io/)中点击 creat sandbox 创建一个vue沙盒；
   >
   >进入app.vue编写自己想要的vue代码,在右侧界面观看效果。
   >
   >Ps(在运行时和修改代码大家不要开启网页翻译功能，因为这会导致程序无法运行和修改)
