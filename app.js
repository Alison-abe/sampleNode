const express = require("express");
const app = express();
const { request } = require("http");
const { response } = require("express");
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json("hi welcome to alexa");
});


app.get("/speaking", (request, response) => {
    const {message} = request.body;
  response.status(200).json(message);
});

app.listen(3000, () => console.log("app is running"));