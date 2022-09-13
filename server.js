/*
 *add routes
    POST /api/notes = post notes via postman
 *possibly some front end functionality once the backend stuff is done
 *LAST- deploy to heroku
 */

const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");
const routes = require("./routes");

const notes = require("./db/db.json");
let notesArr = [];

const app = express();

const PORT = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log("app online"));
