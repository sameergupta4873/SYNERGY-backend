const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());


const user=require('./routes/userRoute');
app.use("/api/v1",user);
app.use(errorMiddleware);

//Middleware for error
module.exports = app;
