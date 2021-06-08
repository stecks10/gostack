const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: buscar informações do  back-end
 * POST: criar uma informação no back-end
 * PUT/PATCH: Alterar uma informção no back-end
 * DELETE: Deletar uma informção no back-end
 * 
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/deletar)
 * Rquest Body: Conteúdo na hora dcriar ou editar um recurso (JSON)
 */

app.get('/projects', (request, response) => {
    console.log(title);
    console.log(owner);

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects',  (request, response) => {
    const {title, owner} = request.body;

    console.log(title);
    console.log(owner);;


    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

//http://localhost:3333/project/2

app.put('/projects/:id',  (request, response) => {
    const id = request.params;

    console.log(id);

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