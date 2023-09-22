const express = require('express');
const tareasRoutes = require('../routes/tareasRoutes');

class Server {

    constructor() {
        this.app = express();
        this.port = 4000;
        this.paths = {
            tareas: '/api/tareas'
        }

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.tareas,tareasRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en http://localhost:${this.port}/`);
        });
    }

}

module.exports = Server;