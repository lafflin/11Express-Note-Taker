// every route inside of this file has '/' prepended
const router = require("express").Router();
const apiRoutes = require("./apiRoutes/notes");
const notes = require("./notes");

router.use("/api", apiRoutes);
router.use("/notes", notes);

module.exports = router;
