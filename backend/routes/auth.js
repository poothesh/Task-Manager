const express = require("express");
const router = express.Router();
const {login , signup , googleLogin} = require("../controllers/authController");;

router.post("/signup", signup);
router.post("/login", login);
router.post('/google', googleLogin);


module.exports = router;