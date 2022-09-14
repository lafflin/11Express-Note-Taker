// file to direct to "/api" and "/notes"
const router = require("express").Router();
const apiRoutes = require("./apiRoutes/notes");
const notes = require("./notes");

router.use("/api", apiRoutes);
router.use("/notes", notes);

const path = require("path");

// send the user to the index.html when at '/'
// router.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../../public/index.html"));
// });

module.exports = router;
