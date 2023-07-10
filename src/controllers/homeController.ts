import { HttpMethod, Route } from "../routes.js";


export const homeController: Array<Route> = [
    {
        method: HttpMethod.GET,
        path: "/",
        handler: (req, res) => {
            res.status(200).send("hello world");
        }
    }
]
