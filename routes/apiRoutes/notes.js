const router = require("express").Router();
const fs = require("fs");
const notes = require("../../db/db.json");
const path = require("path");

notesArr = [];

router.get("/notes", (req, res) => {
	res.json(notes);
});

function createNote(body, notesArr) {
	let createNote = body;
	notesArr.push(createNote);

	fs.writeFileSync(
		path.join(__dirname, "../../db/db.json"),
		JSON.stringify(notesArr, null, 2)
	);
	return createNote;
}

router.post("/notes", (req, res) => {
	const newNote = createNote(req.body, notes);
	res.json(newNote);
});

module.exports = router;
