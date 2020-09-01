console.log('run');
const sons = document.querySelectorAll('#removeSons')[0];
// const nodes = dom.removeSons(sons);
// console.log(nodes);

let a = 0;
const fn = ()=>{
    a ++ ;
    console.log('点击触发'+a)
}
dom.on(window.dj, 'click', fn);
window.yc.onclick = ()=> {
    dom.off(window.dj, 'click', fn);
}

const xs = sons.querySelectorAll('.red')[0];
console.log(xs);

const e1 = dom.find('#e1')[0];
console.log(dom.next(e1));

dom.style(e1,'color','red');

const reds = dom.find('.red');
dom.each(reds, (e)=>{console.log(e)});