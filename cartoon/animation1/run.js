button1.onclick = ()=>{
    heart.classList.add('start');
}

button2.onclick = ()=>{
    heart.style.animationPlayState = "paused";
}

button3.onclick = ()=>{
    heart.style.animationPlayState = "running";
}