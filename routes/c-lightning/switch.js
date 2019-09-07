const SwitchController = require("../../controllers/c-lightning/switch");
const express = require("express");
const router = express.Router();
const authCheck = require("../authCheck");

router.post("/", authCheck, SwitchController.forwardingHistory);

module.exports = router;
