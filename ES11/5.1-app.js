//获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
    import('./5.2-hello.js').then(value =>{
        value.hello();
    }) //动态导入，用的时候再导
}