const http = require('http')
const path = require('path')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 9000

let myPath = './views'
let fileExtension = '.html'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        fullPath = myPath+'/index'+fileExtension
    }
    else if(req.url==='/about'|| req.url==='/about-us'){
        fullPath =myPath+'/about'+fileExtension
    }
    else if(req.url==='/contact'){
        fullPath =myPath+'/contact'+fileExtension
    }
    else fullPath = myPath+'/error'+fileExtension



    fs.readFile(fullPath,(err,data)=>{
        if(err){
            console.log(`Error in reading from ${myPath}`)
        }
        res.setHeader('Content-Type','text/html')
        res.write(data)
        res.end()
    })
})
server.listen(port,hostname,()=>{
    console.log(`Server is listening at ${hostname}:${port}`)
})