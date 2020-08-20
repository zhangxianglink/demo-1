function min(numbers) {
    if(numbers.length > 2){
       return min([numbers[0],min(numbers.slice(1))])
    }else{
       return Math.min.apply(null,numbers)
    }   
}

function minIndex(n){
return n.indexOf(min(n))
}

function sort(numbers) {
    if(numbers.length > 2){
       let index = minIndex(numbers)
       let value = min(numbers)
       numbers.splice(index,1)
       return [value].concat(sort(numbers))
    }else{
       return numbers[0] < numbers[1] ? [numbers[0], numbers[1]] : [numbers[1], numbers[0]]
    }   
}


// for循环
function minIndex(n){
    let index = n.indexOf(min(n))
     n.splice(index,1)
}

function sort(numbers) {
    let arr = [];
    let arrs = numbers.slice(0)
    for(let j = 0; j< numbers.length; j++){
        arr.push(min(arrs))      
        minIndex(arrs)
    } 
    return arr;
}

// for 循环2 
function minIndex(n) {
    let index = 0;
    let i;
    for (i = 1; i < n.length; i++) {
        if (n[i] < n[index]) {
            index = i;
        }
    }
    return index;
  }

  function sort(n) {
      let i;
      let temp;
      for (let i = 0; i < n.length; i++) {
         let min = minIndex(n.slice(i) + i)
          temp = n[i];
          n[i] = n[min];
          n[min] = temp;
      }
      return n;
  }
// 双重for循环, 类似java 

//快速排序
function quickSort(n) {
    if(n.length <= 1){
        return n;
    }
    let floorIndex = Math.floor(n.length / 2);
    let floorValue = n.splice(floorIndex,1)[0];
    let left = [];
    let right = [];
    let i;
    for(i = 0; i < n.length; i++){
        if(n[i] < floorValue){
            left.push(n[i]);
        }else{
            right.push(n[i]);
        }
    }
    return quickSort(left).concat([floorValue], quickSort(right));
}
 
// 归并排序
function sort(n) {
    if(n.length === 0){
        return n;
    }
    let floor = Math.floor(n.length / 2);
    let left = n.slice(0,floor);
    let right = n.slice(floor);
    return merge(sort(left),sort(right));
}
function merge(a,b) {
    if(a.length === 0){
        return b;
    }
    if(b.length === 0){
        return a;
    }
    return a[0] < b[0] ? [a[0]].concat(merge(a.slice(1),b)) : [b[0]].concat(merge(a,b.slice(1)));
}
// 计数排序
function sort(array) {
    let hash = {};
    let max = array[0];
    let index;
    let arr = [];
    for (index = 0; index < array.length; index++) {
       if(array[index] in hash){
           hash[array[index]] += 1;
       } else{
        hash[array[index]] = 1;
       }
       if(array[index] > max){
           max = array[index]
       }
    }
console.log(hash);
    let i;
    for (i = 0; i <= max; i++) {
        if(i in hash){
            for (let index = 0; index < hash[i]; index++) {
                arr.push(i)
            }
        }
    }
    return arr;
}