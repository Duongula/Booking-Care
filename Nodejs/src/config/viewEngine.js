import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); //jsp(java), blade(php)
    app.set("views", "./src/views")
}

module.exports = configViewEngine; //de cac file js khac co the su dung function nay