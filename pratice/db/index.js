const mysql=require('mysql')
module.exports=()=>{
    let connection=mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'root',
        database:'aa'
    })

    connection.connect((error)=>{
        if(error){
            console.log('ok')
        }else{
            console.log('失败')
        }
    })

    return new Promise((resolve,reject)=>{
        connection.query('select * from aa',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
            connection.end()
        })
    })

}