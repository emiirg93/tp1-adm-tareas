var uniqid = require('uniqid'); 

class Tarea {
    constructor(nombre,descripcion){
        this.id = uniqid();
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaCreacion = new Date();
        this.completada = false;
    };

    completarTarea(){
        this.completada = true;
    };

    actualizarTarea(nombre,descripcion){
        if(nombre.length > 0){
            this.nombre = nombre;
        }

        if(descripcion.length > 0){
            this.descripcion = descripcion;
        }
    }
}

module.exports = Tarea;