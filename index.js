// cuando se reejecute se limpia automatico
console.clear();
// console.log("Hola MUNDO2");

import { createServer } from 'http';
import path from 'path';

// tenemos nustro servidor
// que hago con esta instancia(httpServer) para poder escucharla 
// const httpServer = createServer((req, res) => {

// opcional 1º

// Nos falta el verbo/metodo para indicar que quiere hacer el cliente
// console.log(req.method);
// Nos falta el path//ruta para identificar el recurso
// console.log(req.url);
// Nos faltan las cabeceras
// console.log(req.headers);
// Nos falta el body/payload
// let data = '';
// para saber cuantas veces se ejecuta esta funcion
// let chunkIndex = 0;
// cada chunk tiene un limite de tamaño 12kbts
// req.on('data', (chunk) => {
// data += chunk;
// chunkIndex++;

// console.log(chunkIndex);
// });

//     req.on("end", () => {
//         // console.log(data);

//         res.end("RECIBIDO COLEGA");

//     });

//     console.log("PETICION RECIBIDA");

//     res.end("RECIBIDO AMIGO");
// });

// 2º metodo

const httpServer = createServer();

httpServer.on('request', (req, res) => {
    // Nos falta el verbo/metodo para indicar que quiere hacer el cliente
    console.log(req.method);
    // Nos falta el path//ruta para identificar el recurso
    console.log(req.url);
    // Nos faltan las cabeceras
    console.log(req.headers);
    // Nos falta el body/payload
    let data = '';
    // para saber cuantas veces se ejecuta esta funcion
    let chunkIndex = 0;
    // cada chunk tiene un limite de tamaño 12kbts
    req.on('data', (chunk) => {
        data += chunk;
        chunkIndex++;

        console.log(chunkIndex);
    });

    req.on("end", () => {
        //         // console.log(data);

        res.end("RECIBIDO COLEGA");

    });

})


// metodo listen lo que hace es poner en escucha ;arrancar el servdor como tal
httpServer.listen(3000);