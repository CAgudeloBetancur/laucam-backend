# Laucam Backend

Este es el proyecto de la primera unidad de la asignatura `Ingeniería Web II` donde ponemos en práctica los conocimientos básicos sobre desarrollo web backend, usando como lenguaje `JavaScript` y las siguientes tecnologías como base: 

> - Express
> - Mongoose

Es una API con operaciones CRUD para los siguientes 5 modelos:

> - Director
> - Genero
> - Media
> - Productora
> - Tipo

## Consideraciones

Todos los modelos tienen los siguientes métodos:

  - POST
  - GET ( lista )
  - GET ( id )
  - PUT
  - PATCH
  - DELETE

<br>

Para que la api funcione correctamente y pueda conectarse a Mongo Atlas, se debe agregar el archivo .env con las siguientes variables de entorno:

```js
  PORT = int
  ATLAS_USER = string
  ATLAS_PASSWORD = string
  DB_NAME = string
  BASE_URL = string
  ATLAS_APP_NAME = string
```
<br>

> Cuando se reemplaze `{modelo}` por el modelo con el que se quiera trabajar en la `ruta`, debe usarse el nombre del **modelo** completamente en **`minúscula`**

El uso de los métodos `GET ( lista )`, `GET ( id )`, `PATCH` y `DELETE` es igual en todos los modelos:
<br>

```
🟢 GET [url_base]/{modelo}/lista 
```

`Respuestas`

```
200 | OK --> arreglo
400 | bad request --> objeto error
500 | error servidor --> objeto error
```
---
<br>

```
🟢 GET [url_base]/{modelo}/:id 
```

`Respuestas`

```
200 | OK --> objeto
400 | bad request --> objeto error
500 | error servidor --> objeto error
```
---
<br>

```
🟣 PATCH [url_base]/{modelo}/:id 
```
Recordar que en el **body** de `PATCH` se puede indicar la cantidad deseada de propiedades a editar, no necesariamente debe ir el esquema completo.

`Body`

```json
{
  "propiedad": "valor",
  "...": "..."
}
```

`Respuestas`

```

200 | OK --> objeto
400 | bad request --> objeto error
500 | error servidor --> objeto error
```
---
<br>

```
🔴 DELETE [url_base]/{modelo}/:id 
```

`Respuestas`

```
200 | OK --> arreglo (confirmacion)
400 | bad request --> objeto error
500 | error servidor --> objeto error
```
---

### Particularidades de los métodos `POST` y `PUT`

Para los métodos `POST` y `PUT` lo que cambia en cada modelo es que en el body debe estar el esquema completo, con todas las propiedades correspondientes al **modelo**.

En todos los **`modelos`**, los métodos `POST` y `PUT`, tienen el siguiente uso y las siguientes respuestas:

```
🟡 POST [url_base]/{modelo} 
```

`Respuestas`

```
200 | OK --> objeto creado
400 | bad request --> objeto error
500 | error del servidor --> objeto error
```
---
<br>

```
🔵 PUT [url_base]/{modelo}/:id
```

`Respuestas`

```
200 | OK --> objeto editado
400 | bad request --> objeto error
400 | error del servidor --> objeto error
```
---
<br>

Ahora, cuando se use tanto `PUT` como `POST` en cada **modelo**, su `body` debe lucir así:

> La propiedad `estado`, en los modelos que la implementan, solo recibe dos valores `"Activo"` e `"Inactivo"`

#### Director

`Body | PUT & POST`

```json
{
  "nombre": "string",
  "estado": "string"
}
```
---

#### Genero

`Body | PUT & POST`

```json
{
  "nombre": "string",
  "estado": "string",
  "descripcion": "string"
}
```
---

#### Media

`Body | PUT & POST`

```json
{
    "serial" : "string",
    "titulo": "string",
    "sinopsis": "string",
    "urlPelicula": "string",
    "urlImagen": "string",
    "fechaEstreno": "date ( YYYY-MM-DD )",
    "generoPrincipal": {
        "_id": "MongoDb ObjectId"
    },
    "directorPrincipal": {
        "_id": "MongoDb ObjectId"
    },
    "productora": {
        "_id": "MongoDb ObjectId"
    },
    "tipo": {
        "_id": "MongoDb ObjectId"
    }
}
```
---

#### Productora

`Body | PUT & POST`

```json

{
  "nombre": "string",
  "estado": "string",
  "slogan": "string",
  "descripcion": "string"
}
```
---

#### Tipo

`Body | PUT & POST`

```json
{
  "nombre": "string",
  "descripcion": "string"
}
```
---

### Ejemplo de uso para cada `método`

> Vamos a ver un ejemplo de cómo usar cada método y ruta con el modelo `Productora`


```
🟡 POST [url_base]/productora 
```

`Body`

```json
{
  "nombre": "string",
  "estado": "string",
  "slogan": "string",
  "descripcion": "string"
}
```
---
<br>

```
🟢 GET [url_base]/productora/lista 
```
---
<br>


```
🟢 GET [url_base]/productora/65fl32a56d1hfza655605e1
```
---
<br>

```
🔵 PUT [url_base]/productora/65fa32a56d1ffza655605e1b
```

`Body`
```json
{
  "nombre": "string",
  "estado": "string",
  "slogan": "string",
  "descripcion": "string"
}
```
---
<br>

```
🟣 PATCH [url_base]/productora/65fl32a56d1ffza6o5605e1
```
`Body`

```json
{
  "estado": "string",
  "slogan": "string",
}
```
En este caso, con `PATCH` solo se actualizarán **dos** propiedades de las cuatro que tiene el esquema completo.

---
<br>

```
🔴 DELETE [url_base]/productora/65fl32a56d1ffza655605e1b
```
---
<br>

>Ahora solo se deben reemplazar los valores variables, como el `body` y los `parámetros` (**id**) con los del `modelo` que se quiera usar para realizar las consultas.

### Validaciones

> La API cuenta con validaciones para:
>
> - Parámetro id de la ruta
> - Body (Propiedades obligatorias)
> - ObjectId (MongoDb) válido
> - Valores permitidos
> 
> Entre otras más