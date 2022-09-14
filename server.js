const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = 3001;

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log("app online"));
