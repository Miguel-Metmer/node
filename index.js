const express = require("express");

const application = express();

application.set("view engine", "twig");
application.use(express.static("public"));


application.get("/", (req, res) => {
    res.render("frontend/home.twig");
});

application.listen(8080);