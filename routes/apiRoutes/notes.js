// everything in this file is prepended by '/api'
const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const path = require("path");

let notesForArray = JSON.stringify(notes);
// init the notes arr
notesArr = [];
console.log("init:", notesArr);
notesArr = notesForArray;
console.log("post sync:", notesArr);

router.get("/notes", (req, res) => {
	res.json(notes);
});

function createNote(body, notesArr) {
	// push the req.body to the array
	let createNote = body;

	if (notesArr.length === 0) {
		notesArr.push(JSON.parse(notes));
	}

	notesArr.push(createNote);
	console.log("after one added:", notesArr);
	// sync the db file with this new note
	fs.writeFileSync(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify(notesArr, null, 2)
	);
	return createNote;
}

router.post("/notes", (req, res) => {
	// create a new note with the req.body, in the notes db file
	const newNote = createNote(req.body, notes);
	res.json(newNote);
});

module.exports = router;
