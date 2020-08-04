const express = require("express");
const app = express();
const path = require("path");
// Cuando se manejan POST, para traducir el body para Express:
const parser = require("body-parser");

// app.use(...) --> Agrega midleware
// Para que express pueda usar el bodyParser, que es un Middleware
// Se ejecuta antes de procesar las peticiones, en el orden que aparecen código
app.use(parser.json());

// const User = require("User");

// app.get("/:username", (req, res) => {
// Es equivalente a "/username" y lo asigna a una variable username
// También se puede /:username/:id
app.get("/:username/:id", (req, res) => {
  // app.get("/:username", (req, res) => { // Revisar por qué afecta el funcionamiento
  res.json(req.params);
  // const { username } = req.params;
  // User.find({ usernam })
});

app.get("/users", (req, res) => {
  res.json(req.query);
});

// En el post, la información ya no viene en rootParams o en queryParams, viene en el body
app.post("/users", (req, res) => {
  console.log(`User: ${req.body.username}  Pwd: ${req.body.password}`);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Sever started and listening on port 3000 ...");
});
