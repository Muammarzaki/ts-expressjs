import { Route } from "../routes";
import { aboutController } from "./aboutController.js";
import { homeController } from "./homeController.js";

export const controllers: Array<Route> = [
    ...homeController,
    ...aboutController
]