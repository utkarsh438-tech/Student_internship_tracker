const express = require('express');
const router = express.Router();
const { sendOtp, verifyOtp } = require('../controllers/otp_controller');

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

module.exports = router;
