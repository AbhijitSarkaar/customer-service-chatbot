const express = require("express");
const router = express.Router();
const { getResponse } = require("../controllers/indexControllers");

router.route("/chat-response").post(getResponse);

module.exports = router;
