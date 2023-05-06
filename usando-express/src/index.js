const express = require('express');
const path = require('path');
const app = express()
const connection = require('./conection');

const user = require('./routes/users')


//settings

app.set('title', 'Aplicacion hecha en Node.js')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares

// const my_middleware = (req, res, next) => {

//     console.log('Ejecutando middleware')
//     next()

// }

// app.use(my_middleware)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

//rutas
app.get('/', (req, res)=>{
    res.render('index')
})

app.use('/users', user)

app.listen(app.get('port'), ()=>{
    console.log('Mi '+ app.get('title') + ' está corriendo en el puerto ' + app.get('port'))
})