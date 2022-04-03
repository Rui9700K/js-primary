//1.引入express npm i express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则 
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX');
});
//app.all:支持所有请求
app.post('/server',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX(post)');
});
app.all('/json-server',(request,response)=> {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //响应一个数据
    const data = {
        name:'AJAX',
        age:'22'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);

    //设置响应体
    response.send(str);

})
//针对IE缓存的规则
app.get('/ie',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO IE');
});
//针对超时
app.get('/timeout',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    setTimeout(() => {
        response.send('DELA');
    },3000)
});
//JQ服务
app.all('/JQ',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    //response.send("hello JQ AJAX");
    const data = {
        name:'ZYF'
    }
    response.send(JSON.stringify(data))
});
//axios服务
app.all('/axios',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    //response.send("hello JQ AJAX");
    const data = {
        name:'ZYF'
    }
    response.send(JSON.stringify(data))
});
//fetch服务
app.all('/fetch',(request,response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应体
    //response.send("hello JQ AJAX");
    const data = {
        name:'ZYF'
    }
    response.send(JSON.stringify(data))
});
//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    //response.send("console.log('hello jsonp-server')")

    const data = {
        name:'ZYF jsonp-server'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})
//jsonp服务检测用户名
app.all('/checkDataName',(request,response)=>{
    //response.send("console.log('hello jsonp-server')")

    const data = {
        exist : 1,
        msg:"用户名已存在",
    }
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
})
//jsonp JQ方法
app.all('/jq-jsonp',(request,response)=>{
    //response.send("console.log('hello jsonp-server')")

    const data = {
        name:"ZYF",
        city:"北京"
    }
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`);
})
//CORS方法
app.all('/cors-server',(request,response)=>{
    //响应头
    response.setHeader('Access-Control-Allow-Origin', '*');

    const data = {
        name : "Hello CORS"
    }

    let str = JSON.stringify(data)

    response.send(str);
})
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000 端口监听中……");
});