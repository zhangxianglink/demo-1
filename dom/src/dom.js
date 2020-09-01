window.dom = {
    //  使用template标签包容传入的html文本
    create(string){
        const template = document.createElement('template');
        template.innerHTML = string;
        return template.content.firstChild;
    },
    // node2节点放到node下一个节点之前
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling);
    },
    // 调用原本API
    before(node,node2){
        node.parentNode.insertBefore(node2,node);
    },
    // 为父节点添加子节点
    append(parent,node){
        parent.appendChild(node);
    },
    // 为子节点添加父节点
    warp(node,parent){
        // before这句话是否多余?
        dom.before(node,parent);
        dom.append(parent,node);
    },

    // 删除部分
    remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    // 删除当前节点的所有子节点.并返回
    removeSons(node){
        const result = [];
        let son = node.firstChild;
        while(son){
            result.push(son);
            son.parentNode.removeChild(son);
            son = node.firstChild;
        }
        return result;
    },

    // 如果三个参数添加属性,2个参数返回属性
    attr(node, name, value){
        if( arguments.length === 3){
            node.setAttribute(name, value);
        }else {
            return node.getAttribute(name);
        }
    },
    //文本,一个参数返回节点内容, 两个参数写入节点参数
    text(node, string){
        let x = ('innerText' in node)
        if( arguments.length === 1){
           if(x){
               return node.innerText;
           }else{
               return node.textContent;
           }
        }else if(arguments.length === 2) {
            if(x){
                node.innerText = string;
            }else{
                node.textContent = string;
            }
        }
    },
    html(node,string){
        if(arguments.length == 2){
            node.innerHTML = string;
        }else if(arguments.length == 1){
            return node.innerHTML;
        }
    },
    style(node, name, value){
        if(arguments.length == 3){
            node.style[name] = value;
        }else if(arguments.length == 2){
            return node.style[name];
        }else if(name instanceof Object){
            const obj = name;
            for(let key in obj){
                node.style[key] = obj[key];
            }
        }
    },
    class: {
        add(node, className){
            node.classList.add(className);
        },
        remove(node, className){
            node.classList.remove(className)
        },
        contains(node, className){
            return node.classList.contains(className);
        }
    },
    //关于节点的操作
    on(node, eventName, fn){
        node.addEventListener(eventName,fn);
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName,fn);
    },
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(e => e != node);
    },
    next(node){ 
        let x = node.nextSibling;
        while(x && x.nodeType === 3){
            x = x.nextSibling;
        }
        return x;
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
          x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for (let index = 0; index < nodeList.length; index++) {
            fn.call(null,nodeList[index]);           
        }
    },
    index(node){
        const list = node.children(node.parentNode);
        let index;
        for (index = 0; index < list.length; index++) {
           if(list[index] === node){
            break;
           }
        }
        return index;
    }
};