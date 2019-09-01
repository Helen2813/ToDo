//controller
;(function () {
    'use strict'

    const Controller = window.Controller = {}

    Controller.getController = function getController () {
        const view = null
        const model = null
        const api = {}

        api.setView = function setView (newView) {
            view = newView
        }

        api.setModel = function setModel (newModel) {
            model = newModel
        }


        return api
    }

})();