  const http = require("http");
  const fs = require("fs");
  const qs = require("querystring");
 

const httpServer = http.createServer((req, res) => {

    console.log("Se ha detectado una nueva peticion");
    if(req.url === '/'){
      fs.readFile('index.html', (err, content) =>{

        if(err){
  
          if(err.code == 'ENOENT'){
  
            res.setStatus = 404
            console.log("No se encontro el archivo");
  
          }else{
            res.setStatus = 500
            console.log("Ha ocurrido un error en el servidor");
          }
  
        }else{
  
          res.setStatus = 200
  
        res.setHeader('Content-type', 'text/html');
      // res.write('<h1>Primer servidor ejecutandose correctamente</h1>')
      // res.write('<h2>Pagina de prueba</h2>')
        res.write(content)
        res.end();
  
        }
      }) 
    }else if(req.url == '/users'){

      if(req.method == 'GET'){

        res.setStatus = 200
        res.setHeader('Content-type', 'text/html');
        res.write('Accediendo a usuarios')
        res.end();

      }else if(req.method == 'POST'){

        // res.setStatus = 200
        // res.setHeader('Content-type', 'text/html');
        // res.write('Insertando usuarios')

        var datos = ''

        req.on('data', (d) =>{
          datos += d
          
        })
        req.on('end', () =>{

          var post = qs.parse(datos)
          res.end('Datos Recibidos: ' + post.nombre)

        })


      }else if(req.method == 'PUT'){

        // res.setStatus = 200
        // res.setHeader('Content-type', 'text/html');
        // res.write('Modificar usuarios')
        // res.end();

        var datos = ''

        req.on('data', (d) =>{
          datos += d
          
        })
        req.on('end', () =>{

          var post = qs.parse(datos)
          res.end('Usuario a  modificar: ' + post.nombre)

        })

      }else if(req.method == 'DELETE'){

        // res.setStatus = 200
        // res.setHeader('Content-type', 'text/html');
        // res.write('Eliminando usuarios')
        // res.end();

        var datos = ''

        req.on('data', (d) =>{
          datos += d
          
        })
        req.on('end', () =>{

          var post = qs.parse(datos)
          res.end('Usuario a eliminar: ' + post.nombre)

        })

      }
    }
  
})

httpServer.listen(3000);



