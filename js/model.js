//model
;(function () {
    'use strict'

    const Model = window.Model = {}
    Model.getModel = function getModel () {
        let idCounter = 2
        const data = [
            {
                id: 0,
                content: 'Купить хлеб',
                done: false
            },
            {
                id: 1,
                content: 'Помыть машину',
                done: true
            }
        ]

        const watchers = []

        const api = {}

        api.getTasks = function getTasks () {
            return JSON.parse(JSON.stringify(data))
        }

        api.addTask = function addTask (content) {
            data.push({
                id: idCounter,
                content: content,
                done: false
            })
            idCounter++

            for (const watcher of watchers) {
                watcher()
            }
        }

        api.dispatch = function dispatch (callback) {//подписываемся на обновление данных
            watchers.push(callback)
        }

        return api
    }

})();