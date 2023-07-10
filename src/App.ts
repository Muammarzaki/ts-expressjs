import express, { Express } from "express";
import { hostname } from "os";
import { urlGenerator as controllerGenerator } from "./routes.js";
import { controllers } from "./controllers/controllers.js";

export const app: Express = express();
const port = 3000;

console.info(controllers);

app.listen(port,
    () =>
        console.log(`server start in ${hostname}:${port}`)
);

controllerGenerator(controllers);