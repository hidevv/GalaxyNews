const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, function() {
    console.log("servidor rodadando no endereço http://localhost:3000")
});