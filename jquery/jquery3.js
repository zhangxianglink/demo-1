window.$ = window.jQuery = function(selectorParams){
    let elements;
    // 根据不同情况赋值,但结果是数组
    if(typeof selectorParams === 'string'){
        if(selectorParams[0] === '<'){
            elements = [createElement(selectorParams)];
        }else{
            elements = document.querySelectorAll(selectorParams);
        }
    }else if(selectorParams instanceof Array){
        elements = selectorParams
    }
    // 处理加入节点的情况
    function createElement(params){
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    }

    // 为构造的对象绑定原型
    const api = Object.create(jQuery.prototype);
    Object.assign(api, {
        elements: elements,
        oldApi: selectorParams.oldApi
    })
}

// 为了节约内存,使得返回的对象调用同样的资源,采用构造函数的形式将资源放入原型
jQuery.prototype = {
    // 为原型绑定构造函数
    constructor: jQuery,
    jquery: true,
    addClass(params){
        for (let index = 0; index < this.elements.length; index++) {
            this.elements[index].classList.add(params);
        }
        return this;
    },
    find(selector){
        let array = [];
        for (let index = 0; index < this.elements.length; index++) {
             array.concat( Array.from(this.elements[index].querySelectorAll(selector)));
        }
        array.oldApi = this;
        return jQuery(array);
    },
    end(){
        return this.oldApi;
    },
    each(fn){
        for (let index = 0; index < this.elements.length; index++) {
            fn.call(null,this.elements[index],index);
        }
    },
    print(){
        for (let index = 0; index < elements.length; index++) {
            console.log(elements[index]);
        }
    },
    parent() {
    const array = [];
    this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(...node.children);
        }
      });
      return jQuery(array);
    },
    get(index) {
        return this.elements[index];
    },
    appendTo(node) {
        if (node instanceof Element) {
          this.each(el => node.appendChild(el));
        } else if (node.jquery === true) {
          this.each(el => node.get(0).appendChild(el));
        }
      },
    append(children) {
      if (children instanceof Element) {
        this.get(0).appendChild(children);
      } else if (children instanceof HTMLCollection) {
        for (let i = 0; i < children.length; i++) {
          this.get(0).appendChild(children[i]);
        }
      } else if (children.jquery === true) {
        children.each(node => this.get(0).appendChild(node));
      }
    }
}