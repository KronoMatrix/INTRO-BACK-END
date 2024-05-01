const express = require('express');
const router = express.Router();

/* POST */
// El Post tiene la habilidad de poner enviar algo al servidor.
// En éste caso a rave´s del BODY del request.

router.post('/api/v1/users', (request, response) => {
    console.log('Body de PostUser: ', request.body);
    response.status(201).send({ message: 'User created', data: request.body });
})