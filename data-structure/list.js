function createNode(x){
    return {
        data:x,
        link:null
    }
}

function createList(x){
    return createNode(x);
}

function appendNode(list,value){
    const node = createNode(value);
    while(list.link){
        list = list.link
    }
    list.link = node
return node
}


function removeNode(list,value){
    let l = list;
    let v = value;
    while(l !== null && l !== value){
        v = l
        l = l.link
    }
    if(l === null){
        return false
    }else if(l === v){
        v = l.link
    return v
    }else{
        v.link = l.link;
        return list
    }
}

const travelList = (list, fn) => {
    let x = list;
    while (x !== null) {
      fn(x);
      x = x.next;
    }
  };