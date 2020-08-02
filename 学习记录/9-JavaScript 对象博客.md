## JavaScript 对象博客

按照数据类型来进行划分, JavaScript分为对象类型和非对象类型. 

针对对象的学习有三个难点, 原型(共有属性), this, Ajax

JavaScript对象主要分为 Array Function Object, 它们是通过引用传递.它只记录了一个内存地址，该地址存放了具体的数据,现在指向非基本数据类型的变量本身是不包含数据的。

```javascript
原型:
     原型是无须重复声明的共有属性.一般无法修改,只能进行读取.
     每个对象都有一个隐藏属性指向原型,

	  __proto__和constructor属性是对象所独有的；
     prototype属性是函数所独有的，因为函数也是一种对象，所以函数也拥有__proto__和constructor属性。

     __proto__属性的作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它
   __proto__属性所指向的那个对象（父对象）里找，一直找，直到__proto__属性的终点null，
   再往上找就相当于在null上取值，会报错。通过__proto__属性将对象连接起来的这条链路即我们所谓的原型链。

     prototype属性的作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，
   即f1.__proto__ === Foo.prototype。

     constructor属性的含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数
   都指向Function
```

1.  声明对象的两种语法

   ```javascript
   var obj = {'name':'x','age':24}
   var obj2 = new Object({name:'willz',age:24});
   注意: 键名是字符串,可以包含任何字符串
        如果省略引号, 键名依然是字符串, 但是命名需要参照标识符规则.
   	使用变量做key, 实际上key指向字符串 name1
       let key = 'name1'
       var obj = {[key]: 'xx'}
   ```

2. 如何删除对象的属性

   ```javascript
   var obj = {'name':'x','age':24}
   delete obj['name']
   delete obj.name
   查看属性是否存在 'name' in obj
   含有属性名, 但是值为undefined
   'name' in obj && obj['name'] === undefined
   单纯使用 obj['name'] === undefined 无法判断是否含有name属性, 结果为true
   ```

3. 如何查看对象的属性

   ```javascript
   查看自身所有属性: Object.keys(obj)
   查看自身所有值: Object.values(obj)
   查看自身和共有属性: console.dir(obj)
   查看自身属性的键值对数组: Object.entries(obj)
   判断一个属性是自身还是共有的: obj.hasOwnProperty('name')
   查看单个属性: obj['name']
                obj.name   注意:键值是字符串
                var key = 'name';
   			obj[key]
   ```

4. 修改或增加对象的属性

   ```javascript
   var obj = {'name':'x','age':24};
   obj['name'] = 'love';  //单个赋值

   修改或新增对象属性,并返回该对象
   const object1 = {};
   Object.defineProperty(object1, 'property1', {
   value: 42,
   writable: false // 属性是否可以修改
   });

   Object.assign(obj,{name:'yy',age:43}); //批量赋值
   修改共有属性: 无法通过自身修改,添加共有属性
   let obj={}, obj2{}
   obj.toString = 'xxx' 修改obj自身属性
   obj2.toString 还在原型上
   如果需要强行修改共有属性的话:
   Object.prototype['toString'] = 'xxx' // 其他对象的toString 也会修改
   强行修改原型:
   let common = {name : 'jack'}
   var obj = Object.create(common)  //obj的原型指向common
   ```

   

5. 'name' in obj和obj.hasOwnProperty('name') 的区别

   ```javascript
   'name' in obj 会查找所有的属性, 自身的以及共有的属性.
   obj.hasOwnProperty('name') 只会在自身的属性中查找
   ```

6. let 和 const
   ```javascript
    var 和 let 的不同之处在于后者是在编译时才初始化.
   let声明的变量只在其声明的块或子块中可用，这一点，与var相似。
   二者之间最主要的区别在于var声明的变量的作用域是整个封闭函数。

   function letTest() {
   let x = 1;
   {
     let x = 2;  // 不同的变量
    console.log(x);  // 2
   }
   console.log(x);  // 1
   }

   function varTest() {
   var x = 1;
   {
      var x = 2;  // 同样的变量!
      console.log(x);  // 2
   }
   console.log(x);  // 2
   }
   
   常量是块级作用域，很像使用 let 语句定义的变量。常量的值不能通过重新赋值来改变，并且不能重新声明。
   所以需要声明时赋一个初始值.

   const声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。
   一个常量不能和它所在作用域内的其他变量或函数拥有相同的名称。
   const MY_ARRAY = [];
   // 可以向数组填充数据
   MY_ARRAY.push('A'); // ["A"]
   const b = {};
   // 可以向对象赋值
   b['name'] = 'jack';
   ```
   