const path = require("path");
const { param } = require("../routes/users");
const root  = path.join(__dirname, '../public');

const connection = require('../conection');



const getUsers = (req, res)=>{

    const sql = 'SELECT * FROM users'
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error: ' + err)
        }else{
            console.log(result)
            res.render('users', {users: result})
        }
    })

}

const getCreateUser = (req, res)=>{

    res.render('create-user')

}

const getUpdateUser = (req, res)=>{
    
    const param = req.params.id
    const sql = 'SELECT * FROM users WHERE id=?'

    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error: ' + err)
        }else{
           console.log(result)
           res.render('update-user', {user: result})
        }
    })
    

}

const getDeleteUser = (req, res)=>{

    const param = req.params.id
    const sql = 'SELECT * FROM users WHERE id=?'

    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error: ' + err)
        }else{
           console.log(result)
           res.render('delete-user', {user: result})
        }
    })

}

const createUser = (req, res)=>{

    const sql = 'INSERT INTO users SET ?'
    const data = req.body
    connection.query(sql, data, (err, result)=>{
         if(err){
            
            console.log('Ha ocurrido un error: ' + err)

         }else{

            console.log('Usuario registrado')
            res.redirect('/users/all')

         }
    })
}

const updateUser = (req, res)=>{
    const param = req.params.id
    const sql = `UPDATE users SET name='${req.body.name}', age=${req.body.age} WHERE id=${param}`
    
    connection.query(sql, (err,result)=>{

        if (err){
            console.log('Ha ocurrido un error: ' + err)

        }else{

            console.log('Usuario actualizado')
            res.redirect('/users/all')
        }
    });

}

const deleteUser = (req, res)=>{

    const param = req.params.id
    const sql = `DELETE from users WHERE id=${param}`
    
    connection.query(sql, (err,result)=>{

        if (err){
            console.log('Ha ocurrido un error: ' + err)

        }else{

            console.log('Usuario eliminado')
            res.redirect('/users/all')
        }
    });
    
}

module.exports = {
    getUsers, 
    getCreateUser, 
    getUpdateUser, 
    getDeleteUser,

    createUser,
    updateUser,
    deleteUser

}