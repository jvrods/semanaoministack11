const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params:Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)  
  * Route Params:Parâmetors utilizados para identificar recursos
  * */
 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */




