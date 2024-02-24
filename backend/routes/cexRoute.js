const {getMarketData,getTransactions} =require('../controllers/cexController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/getBinance").get(getMarketData);
router.route("/getTransactions").get(getTransactions);
module.exports = router;