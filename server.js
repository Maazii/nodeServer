const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile("./views/index.html", {root: __dirname}); One way to serve a file.
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));