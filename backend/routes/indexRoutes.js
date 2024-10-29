const express = require("express");
const router = express.Router();
const { getResponse, uploadFile } = require("../controllers/indexControllers");

router.route("/chat-response").post(getResponse);
router.route("/upload").post(uploadFile);

module.exports = router;
