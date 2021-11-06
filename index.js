'use strict';
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;




app.use("/", (req, res, next) => {
    return res.json("welcome")
})


app.listen(port, () => {
    console.log(`App running on port ${port}`, '...');
});
