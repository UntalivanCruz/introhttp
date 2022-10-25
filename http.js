const http = require('http')
const router = require('./router.js')
require('dotenv').config()

const server = http.createServer((peticion, respuesta) => {
    switch (peticion.url) {
        case '/':
            router.index(peticion, respuesta)
            break
        case '/empleado':
            router.empleado(peticion, respuesta)
            break
        case '/about':
            respuesta.writeHead(200, { 'Content-Type': 'text/plain' })
            respuesta.write('Sitio desarrollado por Ivan')
            break
        default:
            respuesta.writeHead(404, { 'Content-Type': 'text/plain' })
            respuesta.write('Pagina no disponible')
            break
    }
    respuesta.end()
})

server.listen(process.env.PORT, process.env.HOST, () =>
    console.log(`Servidor disponible http://${process.env.HOST}:${process.env.PORT}`)
)

