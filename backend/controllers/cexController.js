const errorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwttoken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const axios = require("axios");

const BASE_URL = 'https://api.binance.com/api/v3/ticker'

exports.getMarketData = catchAsyncErrors(async (req, res, next) => {
	const { symbol } = req.body;
    const url = `${BASE_URL}/price/?symbol=${symbol}`
	try {
        const response = await axios.get(url);

        console.log(response.data);

        res.status(200).json(
            response.data
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        })
    }
});
exports.getTransactions=catchAsyncErrors(async (req, res, next) => {
    const {module,action,address,startblock,endblock,page,offset}=req.body;
    const url=`https://api.etherscan.io/api?module=${module}&action=${action}&address=${address}&startblock=${startblock}&endblock=${endblock}&page=${page}&offset=${offset}&sort=asc&apikey=S86F1RHCUUZH72TMQ92N1EM1HZEAI46D3H`
    try {
        const response = await axios.get(url);

        console.log(response.data);

        res.status(200).json(
            response.data
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        })
    }
}
)


