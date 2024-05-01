const express = require('express');
const router = express.Router();

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Michi",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

router.get('/api/v1/pets', (request, response) => {
    res.send(petList);
});

/* PARAMS */
// Obtener parámetros de la URL (dinámicos)
// Params: '/api/v1/pets/ :petId'
router.get('/api/v1/petId', (request, response) => {
    console.log('Params de GetOnePet:', request.params.petId);
    // recorrer el arreglo de pets y devolver el que coincida con el id.
    const onePet = petList.find.pets 
}); 
module.exports = router;