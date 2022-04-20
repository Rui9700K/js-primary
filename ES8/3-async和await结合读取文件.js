//1.引入fs模块
const fs = require('fs');

//读取 learn文件
function readLearn(){
    return new Promise((resolve, reject) =>{
        fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data)
        })
    })
}

function readLearn2(){
    return new Promise((resolve, reject) =>{
        fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn2.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data)
        })
    })
}

function readLearn3(){
    return new Promise((resolve, reject) =>{
        fs.readFile("C:\\Users\\11505\\Desktop\\git-space\\前端\\jselement\\learn3.md",(err,data)=>{
            //如果失败
            if(err) reject(err);
            //如果成功
            resolve(data)
        })
    })
}

async function main(){
    //获取文档内容
    let learn1 = await readLearn();
    let learn2 = await readLearn2();
    let learn3 = await readLearn3();

    console.log(learn1.toString());
    console.log(learn2.toString());
    console.log(learn3.toString());
}

main()