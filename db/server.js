const jsonServer = require("json-server");
const server = jsonServer.create();
const generateDB = require("./index");
const router = jsonServer.router(generateDB());
const middlewares = jsonServer.defaults();
const strategies = require("./strategies");

server.use(middlewares);

server.post("/strategies", (req, res) => {
  res.jsonp(strategies);
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use();
server.listen(3004, () => {
  console.log("JSON Server is running");
});
