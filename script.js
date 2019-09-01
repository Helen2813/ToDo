const Model = window.Model
const View = window.View
const Controller = window.Controller

const model = Model.getModel()
const view = View.getView()
const controller = Controller.getController()

controller.setModel(model)
controller.setView(view)

document.body.append(view.getRoot())