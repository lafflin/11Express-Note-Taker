// everything in this file is prepended by '/api'
const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
//  the db file stringified
let notesForArray = JSON.stringify(notes);
// init the notes arr
notesArr = [];
console.log("init:", notesArr);
// updating to make sure the notesArr is current
notesArr = notesForArray;
console.log("post sync:", notesArr);

router.get("/notes", (req, res) => {
	res.json(notes);
});

function createNote(body, notesArr) {
	// push the req.body to the array
	let createNote = body;

	// if for some reason the notes array has nothing, resync it with the db file on creation of a new note
	if (notesArr.length === 0) {
		notesArr.push(JSON.stringify(notes));
	}
	// give the note a uuid so that the app works properly
	createNote.id = uuidv4();
	// push the new note into the array
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
