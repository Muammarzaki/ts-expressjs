import express from "express";

const middleware = express();

middleware.use("*", (req, res, next) => {
    let content_type = req.headers["content-type"]
    console.log(`"${req.url}" ${req.hostname} ${content_type === undefined ? "-" : content_type} ${req.method}`)
    next()
});


export default middleware;