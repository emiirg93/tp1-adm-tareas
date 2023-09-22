const { request, response } = require('express');
const Tarea = require('../models/tarea');

const listado = [];

const obtenerListado = (req = request, res = response) => {
    res.send(listado);
}

const obtenerListadoPorId = (req = request, res = response) => {
    const { id } = req.params;
    const tarea = listado.find(t => t.id === id);

    if(!tarea){
        res.status(400).send(`El id : ${id} no existe en DB.`);
        return;
    }

    res.send(tarea);
}

const crearNuevaTarea = (req = request, res = response) => {
    const { nombre, descripcion } = req.body;

    if(!nombre || !descripcion){
        res.status(400).send('Es obligatorio para crear un nuevo registro el Nombre y su Descripción.')
    }

    const tareaNueva = new Tarea(nombre,descripcion);
    listado.push(tareaNueva);

    res.status(201).send(tareaNueva);
}

const actualizarTarea = (req = request, res = response) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    if(!id){
        res.status(400).send(`Es necesario el id para actualizar una tarea.`);
        return;
    }

    const tarea = listado.find(t => t.id === id);

    if(!tarea){
        res.status(400).send(`El id : ${id} no existe en DB.`);
        return;
    }

    if(!nombre && !descripcion){
        res.status(400).send(`Se requiere el nombre o la descripcion para actualizar una tarea.`);
        return;
    }

    tarea.actualizarTarea(nombre,descripcion);

    listado.splice(listado.findIndex(t => t.id === tarea.id),1,tarea);

    res.send(tarea);
}

const eliminarTarea = (req = request, res = response) => {
    const { id } = req.params;

    if(!id){
        res.status(400).send(`Es necesario el id para eliminar una tarea.`);
        return;
    }

    const tarea = listado.find(t => t.id === id);

    if(!tarea){
        res.status(400).send(`El id : ${id} no existe en DB.`);
        return;
    }

    listado.splice(listado.findIndex(t => t.id === tarea.id),1);
    
    res.send(tarea);
}

module.exports = {
    obtenerListado,
    obtenerListadoPorId,
    crearNuevaTarea,
    actualizarTarea,
    eliminarTarea
}
