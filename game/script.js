import { Model } from "./model.js";
import { Controller } from "./controller.js";
import { View } from "./view.js";

const model = new Model();
const view = new View();

window.model = model;
window.view = view;

const controller = new Controller(model, view);
