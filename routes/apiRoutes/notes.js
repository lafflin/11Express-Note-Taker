// everything in this file is prepended by '/api'
const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const path = require("path");

// init the notes arr
notesArr = [];

// get the notes db file
router.get("/notes", (req, res) => {
	res.json(notes);
});

function createNote(body, notesArr) {
	// push the req.body to the array
	let createNote = body;
	notesArr.push(createNote);

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
