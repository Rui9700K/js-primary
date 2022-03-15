/* 
    对类操作的封装方法若干
*/

function addClass(obj , cn){
    //判断有没有CN这个class类，构造正则函数
    var reg = new RegExp("\\b"+cn+"\\b");
    if(!reg.test(obj.className)){
        //没有就添加class
        //添加class
        obj.className += " "+cn;
    }
}
function removeClass(obj , cn){
    //判断有没有CN这个class类，构造正则函数
    var reg = new RegExp("\\b"+cn+"\\b");
    
    obj.className = obj.className.replace(reg , "");
}
function changeReplace(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    if(reg.test(obj.className)){
        //有就删除class
        //删除class
        obj.className = obj.className.replace(reg , "");
    }else{
        //没有就加class
        obj.className += " "+cn;
    }
}
function hasClass(obj , cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    if(reg.test(obj.className)){
        //有就返回true
        return true;
    }else{
        //没有就返回false
        return false;
    }
}