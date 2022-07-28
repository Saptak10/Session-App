const express = require('express');
const router = express.Router();

const { addSession } = require('../controllers/userController');

router.post("/addSession", addSession) 

module.exports = router;