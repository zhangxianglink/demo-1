var n = 1

var id = setInterval(() => {
    if(n <= 200){
        demo.style.left = n + 'px'
        n = n +1
    }else{
        console.log('停止')
        clearInterval(id)
    }
}, 1000 / 60)