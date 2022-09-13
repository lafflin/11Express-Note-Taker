// every route inside of this file has '/' prepended
const router = require("express").Router();
const apiRoutes = require("./apiRoutes/notes");
const notes = require("./notes");

router.use("/api", apiRoutes);
router.use("/notes", notes);

const path = require("path");

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../publicindex.html"));
});

module.exports = router;
