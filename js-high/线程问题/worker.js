function Fib(number){
    return number<=2 ? 1:Fib(number-1)+Fib(number-2)
}
var onmessage = function(event) {
    var number = event.data //获取数据
    var result = Fib(number) //调用方法计算
    postMessage(result) //返回
}
//分线程无法更新window，只能用于计算（或者后台计时等）