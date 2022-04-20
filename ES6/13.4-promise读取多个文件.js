//引入fs模块
const fs = require('fs');

// C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn.md

//使用promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn.md",(err,data)=>{
        resolve(data);
    })
})

p.then(value => {
    return new Promise((resolve, reject) =>{
        fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn2.md",(err,data)=>{
            resolve([value, data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) =>{
        fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn3.md",(err,data)=>{
            //压入
            value.push(data)
            resolve(value);
        })
    })
}).then(value=>{
    console.log(value.join('\r\n'))
})