## para entregar hasta el proximo viernes 22 de septiembre 

# Creación de una API REST para Administrar Tareas

Descripción:
Crea una API RESTful para administrar tareas. Deberás implementar las operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) para las tareas.

# Requisitos:

Utiliza Express.js para crear el servidor y manejar las rutas.
Las tareas deben tener los siguientes campos: id, nombre, descripcion, fechaCreacion, completada.
Implementa las siguientes rutas y sus respectivas acciones:
    GET /tareas: Obtiene la lista de todas las tareas.
    GET /tareas/🆔 Obtiene los detalles de una tarea específica.
    POST /tareas: Crea una nueva tarea.
    PUT /tareas/🆔 Actualiza una tarea existente.
    DELETE /tareas/🆔 Elimina una tarea.
Utiliza un array para almacenar las tareas en memoria (en un entorno real, se usaría una base de datos).
Asegúrate de manejar los errores correctamente y devolver códigos de estado apropiados.