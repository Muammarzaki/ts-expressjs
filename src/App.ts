import express, { Express } from "express";
import { hostname } from "os";
import { setRouters } from "./controllers/routes.js";

export const app: Express = express();
const port = 3000;

setRouters()

app.listen(port,
    () =>
        console.log(`server start in ${hostname}:${port}`)
);

