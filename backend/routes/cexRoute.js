const {getMarketData,getTransactions, detectAnomaly, filterTransactions, showTransitiveTransactions, getAnamolyTransactions} =require('../controllers/cexController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/getBinance").get(getMarketData);
router.route("/getTransactions").post(getTransactions);
router.route("/getAnamolyTransactions").post(getAnamolyTransactions);
router.route("/detectAnomaly").post(detectAnomaly);
// filterTransactions
router.route("/filterTransactions").post(filterTransactions);
router.route("/showTransitiveTransactions").get(showTransitiveTransactions);
module.exports = router;