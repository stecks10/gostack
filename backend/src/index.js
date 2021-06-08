const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: buscar informações do  back-end
 * POST: criar uma informação no back-end
 * PUT/PATCH: Alterar uma informção no back-end
 * DELETE: Deletar uma informção no back-end
 */

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects',  (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

//http://localhost:3333/project/2

app.put('/projects/:id',  (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id',  (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});


app.listen(3333, () => {
    console.log('🚀 Back-end started!');
});