const express = require('express');
const router = express.Router();

// const { addSession, getSessions, getSessionById } = require('../controller/sessionController');
const { addSession, getSession } = require('../controller/sessionController');

// router.post("/addSession", addSession) 

// router.get("/", getSessions)

router.route("/")
    .post(addSession)
    .get(getSession);
// router.route("/:id", getSessionById)

module.exports = router;
