import express, { Application } from 'express';
import cors from 'cors';
import flightRoute from '../routes/flight';

import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        flight: '/api/flight'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
        // this.sockets();
    }

    // BD
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error();
        }
    }

    middlewares(){

        // CORS
        this.app.use( cors({
            origin:'*'
         }));

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta publica
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.apiPaths.flight, flightRoute );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

export default Server;
