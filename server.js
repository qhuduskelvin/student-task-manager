console.log("STEP 1: File is running");

const express = require("express");
const app = express();

const PORT = 3000;

// TEST ROUTE (no files needed)
app.get("/", (req, res) => {
    res.send("SERVER IS WORKING");
});

app.listen(PORT, () => {
    console.log("STEP 2: Server is running on http://localhost:" + PORT);
});