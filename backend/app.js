const express = require("express");
const app = express();
const mongoose =require("mongoose"); ;
const port = process.env.PORT || 3000;
require('dotenv').config()
console.log(`process.env`)
// const dbConnection = require("./db/mongoos");
// dbConnection();

app.get("/", (req, res) => res.send("Hello team 5!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
