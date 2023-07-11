import { Request, Response, Router } from "express";
import { app } from "../App.js";
import { homeController } from "./homeController.js";
import { aboutController } from "./aboutController.js";

const routers: Array<Route> = [
    homeController,
    aboutController
]

export enum HttpMethod {
    ALL = "ALL",
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    DELETE = "DELETE",
    PUT = "PUT",
}

export interface Handler {
    (req: Request, res: Response): void;
}

export interface Route {
    base: string,
    sub: Array<Controller>
}

export interface Controller {
    method: HttpMethod,
    path: string,
    handler: Handler
}

export const controllerGenerator = function (controller: ReadonlyArray<Controller>): Router {
    const router = Router();
    controller.forEach(({ method, path, handler }) => {
        switch (method) {
            case HttpMethod.GET:
                router.get(path, handler);
                break;

            case HttpMethod.POST:
                router.post(path, handler);
                break;

            case HttpMethod.DELETE:
                router.delete(path, handler);
                break;

            case HttpMethod.ALL:
                break;
            default:
                throw new Error("HttpMethod has not define in ControllerGenerator");
        }
    })
    return router;
}



export const routerGenerator = function (routes: ReadonlyArray<Route>) {
    routes.forEach(({ base, sub }) => {
        const router: Router = controllerGenerator(sub);

        app.use(base, router);
    })
}

export function setRouters() {
    routerGenerator(routers)
}