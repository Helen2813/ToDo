//controller
;(function () {
    'use strict'

    const Controller = window.Controller = {}

    Controller.getController = function getController () {
        let view = null
        let model = null

        const api = {}

        api.setView = function setView (newView) {
            view = newView

            initCheck()
        }

        api.setModel = function setModel (newModel) {
            model = newModel

            initCheck()
        }

        return api

        function initCheck () {
            if (view === null || model === null) {
                return
            }

            view.update(model.getTasks())

            model.dispatch(function () {
                view.update(model.getTasks())
            })

            view.buttonClickHandler = function (buttonRole) {
                switch (buttonRole) {
                    case 'addTask':
                        const content = view.getContent()

                        if (content !== '') {
                            model.addTask(content)
                            view.setContent('')
                        }

                        break
                }
            }
        }
    }
})();