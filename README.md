# Laucam Backend

<p style="font-size:1.2rem;">Este es el proyecto de la primera unidad de la asignatura <span style="display: inline-block; background-color: hsla(30, 33%, 0%, .7); padding: 0 .8rem; border-radius: .3rem; border: 1px solid hsl(0, 0%, 40%); font-size: 1.1rem">Ingeniería Web II</span> donde ponemos en práctica los conocimientos básicos sobre desarrollo web backend, usando como lenguaje <span style="display: inline-block; background-color: hsla(30, 33%, 0%, .7); padding: 0 .8rem; border-radius: .3rem; border: 1px solid hsl(0, 0%, 40%); font-size: 1.1rem">JavaScript</span> y las siguientes tecnologías como base: </p>

> - Express
> - Mongoose

```
GET /productora/lista 
```
```json
{
  "nombre": "string",
  "estado": "string",
  "productora": {
    "_id": "id valido para MongoDb"
  }
}
```