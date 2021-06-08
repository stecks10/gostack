const express = require('express');
const { v4: uuidv4, isUuid } = require('uuid');

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
 * 
 * 
 * 
 * Middleware: 
 * Interceptador de requisições que interromper totalmente a requisiçãoou alterar dados da requisição
 */

const projects = [];

function logRequest(request, response, next) {
  const {  method, url } = request;

  const logLabel= `[${method.toUpperCase()}] ${url}`;
  console.time(logLabel);

   next(); // Proximo middleware
  console.timeEnd(logLabel);
}

function validadeProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.'});
  }

  return next();
}


app.use(logRequest);
app.use('/project/:id', validadeProjectId)

app.get('/projects',logRequest, (request, response) => {

    const {title} = request.query;

    const results = title
     ? projects.filter(project  => project.title.includes(title))
     : projects;


    return response.json(results);
});

app.post('/projects',  (request, response) => {
    const {title, owner} = request.body;

    const project = { id: uuidv4(), title, owner};

    projects.push(project);


    return response.json(project);
});
//http://localhost:3333/project/2

app.put ('/projects/:id',  (request, response) => {
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