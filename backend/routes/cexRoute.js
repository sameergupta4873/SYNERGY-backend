const {getMarketData,getTransactions, detectAnomaly, filterTransactions} =require('../controllers/cexController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/getBinance").get(getMarketData);
router.route("/getTransactions").get(getTransactions);
router.route("/detectAnomaly").get(detectAnomaly);
// filterTransactions
router.route("/filterTransactions").get(filterTransactions);

module.exports = router;