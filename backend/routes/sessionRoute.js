const express = require('express');
const router = express.Router();

const { addSession, getSession } = require('../controller/sessionController');

router.route("/")
    .post(addSession)
    .get(getSession);

module.exports = router;
