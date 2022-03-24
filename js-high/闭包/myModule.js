function myModule(modle){
    //msg 为私有数据
    var msg = "my function"
    function doSomething(){
        console.log('doSomething() ' + msg.toUpperCase())
    }
    function doSomething2(){
        console.log('doSomething2() ' + msg.toLowerCase())
    }
    if ( modle == 1){
        return doSomething
    }else if ( modle == 2){
        return doSomething2
    }else{
        //向外暴露对象（给外部使用的方法）
        return {
            doSomething: doSomething,
            doSomething2: doSomething2
        }
    }
}