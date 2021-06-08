const express = require('express');
const { uuid } = require('uuidv4');

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

const projects = [];

app.get('/projects', (request, response) => {
    const {title} = request.query;

    const results = title
     ? projects.filter(project  => project.title.includes(title))
     : projects;


    return response.json(results);
});

app.post('/projects',  (request, response) => {
    const {title, owner} = request.body;

    const project = { id: uuid(), title, owner};

    projects.push(project);


    return response.json(project);
});
//http://localhost:3333/project/2

app.put ('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex <0) {
    return response.status(400).json({ error: 'project not found.' })
  }

  const project = {
    id,
    title, 
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id',  (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex <0) {
      return response.status(400).json({ error: 'project not found.' })
    }

    projects.splice(projectIndex, 1);


    return response.status(204).send();
});


app.listen(3333, () => {
    console.log('🚀 Back-end started!');
});