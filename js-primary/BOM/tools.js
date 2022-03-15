//封装一个可以执行简单动画的函数
                /* 
                    boxname:动画对象
                    target:目标
                    speed:动画速度
                    attr:动画样式，例如：left,top,width...
                    callback:完毕以后再执行
                */
function move(boxname , target , speed , attr , callback) {

    clearInterval(boxname.timer);

    //优化：判断速度正负值
    //获取现在的位置，和目标位置比较
    var current = parseInt(getStyle(boxname ,attr));
    if(current > target){
        speed = -speed
    }

    boxname.timer = setInterval(function(){

        var oldValue = parseInt(getStyle(boxname , attr));
        var newValue = oldValue + speed;

        //向左移动判断是否小于等于，向右移动是否大于等于
        if((speed > 0 && newValue >= target) || (speed <0 && newValue <= target)){
            //当元素移动到目标值的时候停止
            newValue = target;
        }

        boxname.style[attr] = newValue +"px";

        if(newValue == target){
            clearInterval(boxname.timer);
            callback && callback();
        }

    },30)
}

//获取元素样式方法
function getStyle(obj , name){
    return getComputedStyle(obj , null)[name];
}