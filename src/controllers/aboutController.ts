import { HttpMethod, Route } from "../routes.js";

export const aboutController: Array<Route> = [
    {
        path: "/about",
        method: HttpMethod.GET,
        handler: (req, res) => {
            let pesan = req.query.pesan
            if (pesan) {
                console.log(pesan);
            }
            res.status(200).send("ini applikasi yang dibuat secara modular sederhana");
        }
    }
]