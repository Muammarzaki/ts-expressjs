import express from "express";
import homeRouter from "./homeController";

const controller = express();

controller.use(homeRouter);

export default controller;