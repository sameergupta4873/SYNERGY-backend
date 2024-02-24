const {getMarketData,getTransactions, detectAnomaly, filterTransactions, showTransitiveTransactions} =require('../controllers/cexController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/getBinance").get(getMarketData);
router.route("/getTransactions").post(getTransactions);
router.route("/detectAnomaly").post(detectAnomaly);
// filterTransactions
router.route("/filterTransactions").get(filterTransactions);
router.route("/showTransitiveTransactions").get(showTransitiveTransactions);
module.exports = router;