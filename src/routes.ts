import { Request, Response } from "express"
import { app } from "./App.js";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PATCH = "PATCH",
    DELETE = "DELETE",
    PUT = "PUT"
}

export interface Handler {
    (req: Request, res: Response): void;
}

export interface Route {
    method: HttpMethod,
    path: string,
    handler: Handler
}

export const urlGenerator = function (routes: ReadonlyArray<Route>) {
    routes.forEach(({ method, path, handler }, index, Array) => {
        switch (method) {
            case HttpMethod.GET:
                app.get(path, handler);
                break;

            case HttpMethod.POST:
                app.post(path, handler);
                break;

            case HttpMethod.DELETE:
                app.delete(path, handler);
                break;

            default:
                throw new Error("HttpMethod has not define in urlGenerator");
        }
    }
    )
}

