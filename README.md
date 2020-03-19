
# Test Seguros

Separacion en capas:

- Infrastructure
- Domain
- Application


## Productos precargados:
``` javascript
[
    {
        "id": 1,
        "description": "Cobertura",
        "price": 20,
        "rule": "DOWN",
        "sellIn": 10
    },
    {
        "id": 2,
        "description": "Full cobertura",
        "price": 0,
        "rule": "UP",
        "sellIn": 2
    },
    {
        "id": 3,
        "description": "Baja cobertura",
        "price": 7,
        "rule": "DOWN",
        "sellIn": 5
    },
    {
        "id": 4,
        "description": "Mega cobertura",
        "price": 80,
        "rule": "FIXED",
        "sellIn": 0
    },
    {
        "id": 5,
        "description": "Mega cobertura",
        "price": 80,
        "rule": "FIXED",
        "sellIn": -1
    },
    {
        "id": 6,
        "description": "Full cobertura super duper",
        "price": 20,
        "rule": "UP_SPECIAL",
        "sellIn": 15
    },
    {
        "id": 7,
        "description": "Full cobertura super duper",
        "price": 49,
        "rule": "UP_SPECIAL",
        "sellIn": 10
    },
    {
        "id": 8,
        "description": "Full cobertura super duper",
        "price": 49,
        "rule": "UP_SPECIAL",
        "sellIn": 5
    },
    {
        "id": 9,
        "description": "Super avance",
        "price": 6,
        "rule": "DOUBLE_DOWN",
        "sellIn": 3
    }
]
```

## Ejecutar desarrollo
```sh
npm start
```
## Ejecutar produccion
```sh
docker build -t products .
docker run -p 4000:4000 -d products
```

## Endpoints disponibles:

| Endpoint | Descripcion |
| -------- | ----------- |
| **http://localhost:4000/api/test/product/{id}/sell** | Vender un producto |
| **http://localhost:4000/api/test/product/sold** | Listado de productos vendidos |
| **http://localhost:4000/api/test/product/simulation/{days}** | Simulacion de precios a una cantidad de dias en el futuro |
| **http://localhost:4000/api/test//product/update/ONLY-TEST** | Endpoint solo para test, para actualizar productos sin esperar la tarea de la media noche |


## Postman collection
Se incluye en el repo el archivo [Seguros.postman_collection.json](./Seguros.postman_collection.json), con una coleccion de ejemplos de la REST API.