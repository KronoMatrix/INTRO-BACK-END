const express = require('express');
const router = express.Router();

router.get('/api/v1/cakes', (request, response) => {
    const idCake = parseInt(request.params.cakeId);
    if (idCake > 100) {
        response.status('401').send({ message: 'El Pastel está feo '});
    } else {
        response.status('207').send({ message: 'El Pastel está bonito'})
    }
});

module.exports = router;