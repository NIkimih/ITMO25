import {Model} from "./model.js"
import {Controller} from "./controller.js"




const model = new Model()

window.model = model

const controller = new Controller(model)
