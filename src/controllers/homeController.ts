import { HttpMethod, Route } from "./routes.js";


export const homeController: Route = {
    base: "/",
    sub:[
        {
            method: HttpMethod.GET,
            path: "/",
            handler: (req, res) => { }
        }
    ]
}