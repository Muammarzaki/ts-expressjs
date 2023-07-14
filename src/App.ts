import express, { Express } from "express";
import { hostname } from "os";
import middleware from "./middlewares/middleware";
import controller from "./controllers/router";

export const app: Express = express();
const port = 3000;
/**
 * midlleware definition
 */
app.use(middleware);

/**
 * controller definition
 */
app.use(controller);

app.listen(port,
    () =>
        console.log(`server start in ${hostname}:${port}`)
);

