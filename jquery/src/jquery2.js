window.jquery = function(selectorOrArray){
    let elements;
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    }else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }
    return {
        addClass(className){
            for (let index = 0; index < elements.length; index++) {
                elements[index].classList.add(className);
            }
            return this;
        },
        oldApi: elements.oldApi,
        find(selector){
            let arr = [];
            for (let index = 0; index < elements.length; index++) {
                arr = arr.concat(Array.from(elements[index].querySelectorAll(selector)));
            }
            arr.oldApi = this;
            return jquery(arr);
        },
        end(){
            return this.oldApi;
        },
        each(fn){
            for (let index = 0; index < elements.length; index++) {
                fn.call(null,elements[index],index);
            }
        },
        print(){
            for (let index = 0; index < elements.length; index++) {
                console.log(elements[index]);
            }
        },
        children(){
            const arr = [];
            this.each((e) => {
                    // 展开操作符
                    arr.push(... e.children )
                }
            )
            return jquery(arr);
        },
        parent(){
            const arr = [];
            for (let index = 0; index < elements.length; index++) {
                if(arr.indexOf(elements[index].parentNode) < 0){
                    arr.push(elements[index].parentNode);
                }
            }
            return jquery(arr);
        },
        siblings(){
            let arr = [];
            for (let index = 0; index < elements.length; index++) {
                arr = arr.concat(
                    Array.from(elements[index].parentNode.children)
                    .filter(e => e != elements[index]));
            }
            return jquery(arr);
        },
        index(){
            // 假设查询id
            const first = elements[0];
            const list = [];
            list.push(... first.parentNode.children);
            console.dir(list);
            let index;
            for (index = 0; index < list.length; index++) {
                if(list[index] === first){
                    break;
                }
            }
            return index;
        },
        next(){
            // 假设查询id
            const node = elements[0];
            let x = node.nextSibling;
            while(x && x.nodeType === 3){
                x = x.nextSibling;
            }
            const arr = []
            arr.push(x)
            return jquery(arr);
        },
        prev(){
            // 假设查询id
            const node = elements[0];
            let x = node.previousSibling
            while(x && x.nodeType === 3){
              x = x.previousSibling
            }
            const arr = []
            arr.push(x)
            return jquery(arr);
        },
    }
}

window.$ = window.jquery