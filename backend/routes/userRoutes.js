const express = require("express");
const { sentMailWithOtp, verifyOtp } = require("../controllers/userController");
const router = express.Router();

router.route("/create").post(sentMailWithOtp)

router.route("/verifyOtp").post(verifyOtp)


module.exports = router;