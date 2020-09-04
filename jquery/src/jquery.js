window.jquery = function(selectorFirst) {
    let result;
    if(typeof  selectorFirst === 'string'){
        result = document.querySelectorAll(selectorFirst);
    }else if(selectorFirst instanceof Array){
        result = selectorFirst
    }
    return {
        addClass(className)  {
            // 访问函数外部的变量,闭包
            for (let index = 0; index < result.length; index++) {
                result[index].classList.add(className);
            }
            // 返回第1层引用.链式调用
            return this;
        },
        find(selector){
            let arr = [];
            for (let index = 0; index < result.length; index++) {
               arr = arr.concat(Array.from(result[index].querySelectorAll(selector)));
            }
            //返回当前层的引用
            arr.oldApi = this;
            const obj = jquery(arr);
            return obj;
        },
        oldApi: result.oldApi,
        end(){
            console.dir(this);
            return this.oldApi;
        },
        each(fn){
            for (let index = 0; index < result.length; index++) {
                fn.call(null,result[index],index);
            }
            return this;
        },
        parent(){
            const arr = [];
            this.each((e) => {
                    if(arr.indexOf(e.parentNode) < 0){
                        arr.push(e.parentNode)
                    }
                }
            )
            return jquery(arr);
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
        print(){
            console.log(result);
        }
    }
}