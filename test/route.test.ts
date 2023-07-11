import { Controller, HttpMethod, controllerGenerator } from "../src/controllers/routes"

describe("test function routeGenerator", () => {
    const controllerTest: Controller = {
        method: HttpMethod.GET,
        path: '/',
        handler: (req, res) => {

        }

    }
    it("test function controllerGenrator", () => {
        console.log(controllerGenerator([controllerTest]));
    })
})