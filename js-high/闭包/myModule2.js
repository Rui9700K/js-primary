(function(){
    //msg 为私有数据
    var msg = "my function"
    function doSomething(){
        console.log('doSomething() ' + msg.toUpperCase())
    }
    function doSomething2(){
        console.log('doSomething2() ' + msg.toLowerCase())
    }
    
    window.myModule2 = {
        doSomething: doSomething ,
        doSomething2: doSomething2
    }
})()