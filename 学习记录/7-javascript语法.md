## javascript语法

1. 表达式和语句

   javascript程序是按行执行的. 一般情况下一行就是一个语句

   例如:   

   ```javascript
   赋值语句: var a = 1;
   声明语句: var obj = {'name':'x','age':24}
   var 变量提升: 变量和函数声明移动到代码顶部,只有声明才会被提升，
   而赋值或者其他可执行的逻辑依然保留在原位置。
   ```

   表达式: 指一个为了得到返回值的计算式。

   例如: 

   ```javascript
   1 + 3 算数表达式
   [3,3+4] 数组初始化表达式
   {'name':'x','age':24} 对象表达式
   add(1,3) 函数表达式 (返回值为函数返回值)
   console.log 函数表达式 (返回值为函数本身undefined)
   ```

   两者的区别:

   语句主要是为了进行操作, 一般不需要返回值.

   表达式是为了获取返回值.

2.标识符的规则

```javascript
命名规则: 第一个字符, 可以是任意的Unicode字母以及($)(_),不包含数字
         其他的字符, 除了Unicode,美元符号,下划线,还可以使用数字0-9
```

3 . if  else 语句

```javascript
var obj = {'name':'x','age':24}
if('x' in obj){ // true 执行下一步
    console.log(obj);
}else if('name' in obj){ 
    console.log(obj);
}else {         // 最后所有判断都不符合,执行下一步
    console.log('无此属性');
}
```

4 .  while for 语句

``` javascript
While 语句:
var i = 1;
while(true){  // 条件为true,一直执行
    if(i < 20){
        console.log(i); i = i + 1;
    }else{
        break;
    }
}
For 语句:
for(var a = 1; a < 10; a ++){
    console.log(a);
}
for语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略。
如果全部省略会造成无限循环.
```

5 . break continue

```javascript
for(var i = 1; i < 11 ; i ++){ // 外层循环
    if(i > 9){
        break;  // 跳出当前循环, 不再执行下一次循环
    }
   console.log('循环:'+i); 
   for(var a = 1; a <= i ; a ++){
        var sum = a * i;
        if ( 30 > sum) {
            continue; // 立即终止本轮循环，返回循环结构的头部，开始下一轮循环。
        }
        console.log('sum: '+sum);
    }
}
```

6 . 标签（label）

```javascript
标签（label），相当于定位符，用于跳转到程序的任意位置
标签通常与`break`语句和`continue`语句配合使用，跳出特定的循环。
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) 
          break top; // continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
标签也可以用于跳出代码块:
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);
```

