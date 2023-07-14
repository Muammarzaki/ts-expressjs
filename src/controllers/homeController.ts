import { Router } from "express";
import { Success } from "../types/dto";

const homeRouter = Router();

homeRouter.get("/", (req, res) => {
    let response: Success<string> = {
        data: "home",
        status: "success",
        status_code: 200,
    }
    res
        .setHeader("Content-Type", "application/json")
        .status(200)
        .send(response)
})
export default homeRouter;