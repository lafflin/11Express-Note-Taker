/*
click on existing notes to see details
click on + to make new note
use uuids
deploy to heroku
finish readme
finish comments
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const routes = require("./routes");

const app = express();

const PORT = 3001;

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log("app online"));
