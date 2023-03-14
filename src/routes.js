const { Router } = require("express");
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/login", (req, res) => {
    return res.json({ message: "Login!" });
});

routes.get("/home", (req, res) => {
    return res.json({ message: "Home!" });
});

module.exports = routes;