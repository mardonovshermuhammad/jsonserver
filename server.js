
const jsonServer = require('json-server')
const setServers = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

setServers.use(middlewares);
setServers.use(router);
setServers.use(port);
