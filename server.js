/* 
  add routes
    GET /notes = notes.html
    GET * = index.html
    GET /api/notes = db.json
    POST /api/notes = post notes via postman

    need to direct to /notes
    /api/notes

  possibly some front end functionality once the backend stuff is done
  
  LAST- deploy to heroku
*/

const express = require("express");
const uuid = require("uuid");
const routes = require("./routes");

const app = express();

const PORT = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(routes);

app.listen(PORT, () => console.log("app online"));
